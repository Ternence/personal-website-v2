// for the regenerator (which we don't actually need on newer versions of node)
import 'babel-polyfill';

import path from 'path';
import { Readable } from 'stream';
import fs from 'fs';

import * as React from 'react';

import express from 'express';
import compression from 'compression';
import { renderToNodeStream } from 'react-dom/server';
import SSRBundle from '@larah/personal-website-frontend/ssr_build/Mark';

const Mark = SSRBundle.default;
const PORT = process.env.port || 9123;

const app = express();
app.use(compression());

// https://stackoverflow.com/a/22085851/4396258
const noop = function noop() {};
const getStream = text => {
    const s = new Readable();
    s._read = noop;
    s.push(text);
    s.push(null);
    return s;
};

const streamResponse = (res, reader) =>
    new Promise(resolve => {
        reader.pipe(res, { end: false });
        reader.on('end', resolve);
    });

// TODO: Replace index.html with an actual parseable template?
const TEMPLATE_SECTIONS = fs
    .readFileSync(path.join(__dirname, 'public/index.html'))
    .toString()
    .split('<div id="root"></div>');

const templateSections = [
    `${TEMPLATE_SECTIONS[0]}<div id="root">`,
    `</div>${TEMPLATE_SECTIONS[1]}`,
];

// TODO: save time/memory by making these objects once here and make "resettable" streams
// const templateSectionStreams = templateSections.map(getStream);

// app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    const templateSectionStreams = templateSections.map(getStream);

    await streamResponse(res, templateSectionStreams[0]);
    await streamResponse(res, renderToNodeStream(<Mark />));
    await streamResponse(res, templateSectionStreams[1]);

    res.end();
});

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
