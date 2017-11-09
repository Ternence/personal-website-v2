import path from 'path';
import { Readable } from 'stream';
import fs from 'fs';

import express from 'express';
import compression from 'compression';
import React from 'react';
import { renderToStream } from 'react-dom/server'

import Mark from './web/components/Mark';
import templateSections from './web/index.template';

// for the regenerator (which we don't actually need on newer versions of node)
import 'babel-polyfill';

const PORT = process.env.port || 9123;

const app = express();
app.use(compression());

// https://stackoverflow.com/a/22085851/4396258
const noop = function noop() {};
const getStream = text => {
  const s = new Readable();
  s._read = noop;
  s.push(text);
  s.push(null)
  return s;
};

const streamResponse = (res, reader) => new Promise((resolve, reject) => {
    reader.pipe(res, { end: false });
    reader.on('end', resolve);
});

// TODO: save time/memory by making these objects once here and make "resettable" streams
// const templateSectionStreams = templateSections.map(getStream);

app.get('/', async (req, res) => {
    const templateSectionStreams = templateSections.map(getStream);

    await streamResponse(res, templateSectionStreams[0]);
    await streamResponse(res, renderToStream(<Mark />));
    await streamResponse(res, templateSectionStreams[1]);

    res.end();
});

app.use('/assets', express.static(path.join(__dirname, 'web', 'public')));

// TODO: merge static manifest and favicon with root route
app.use('/favicon.ico', express.static(path.join(__dirname, 'web', 'public', 'favicon.ico')));

app.use('/profile.jpg', express.static(path.join(__dirname, '../profile.jpg')));


app.get('/keybase.txt', (req, res) => {
    const stream = fs.createReadStream('keybase.txt', 'utf8');
    stream.pipe(res);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
