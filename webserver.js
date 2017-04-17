const path = require('path');
const axios = require('axios');
const express = require('express');
const template = require('./assets/index.template');
const compression = require('compression')

const app = express();
app.use(compression());

app.use('/assets', express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    axios.post('http://localhost:8080/batch', {
        "me": {
            "name": "Mark",
            "data": {}
        }
    }).then(response => {
        const me = response.data.results.me.html;
        const renderedMarkup = template(me);
        res.send(renderedMarkup);
    });
});

app.listen(9123, () => {
    console.log("Server listening on port 9123!");
});
