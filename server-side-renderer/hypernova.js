const bundle = require('./bundle');


var hypernova = require('hypernova/server');

hypernova({
  devMode: true,

  getComponent(name) {
    if (name === 'Mark') {
      return require('./bundle').Mark();
    }
    return null;
  },

  port: 3030,
});
