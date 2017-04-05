const bundle = require('./bundle');
const ReactDOMServer = require('react-dom/server');

const express = require('express');
const app = express();


app.get('/Mark', function (req, res) {
    console.log('Getting request for /Mark');
    console.time('test');

    let markup;
    for (let i = 0; i < 50; i++) {
        markup = ReactDOMServer.renderToString(bundle.Mark());
    }

    res.json({'Mark': markup});
    console.timeEnd('test'); //Prints something like that-> test: 11374.004ms
});

app.listen(3000, function () {
  console.log('Renderer app listening on port 3000!')
});
