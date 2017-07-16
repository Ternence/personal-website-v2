import React from 'react';
import path from 'path';
import fs from 'fs';
import express from 'express';
import compression from 'compression';
import ReactDOMServer from 'react-dom/server';
import Mark from './assets/jsx/mark';
import template from './assets/index.template';

const PORT = process.env.port || 9123;

const app = express();
app.use(compression());

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.get('/keybase.txt', (req, res) => {
    fs.readFile('keybase.txt', 'utf8', (err, file) => {
        res.send(file);
    });
});

app.get('/', (req, res) => {
    const markHTML = ReactDOMServer.renderToString(<Mark />);
    const renderedMarkup = template(markHTML);

    res.send(renderedMarkup);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
