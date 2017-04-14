const fs = require('fs'); 
const path = require('path');
const hypernova = require('hypernova/server');
const renderReact = require('hypernova-react').renderReact;
const downloadBundle = require('./downloadBundle');

const BUNDLE_PATH = path.join(__dirname, 'ssr-bundle.js');
const SHA = require('child_process').execSync('git rev-parse HEAD').toString().trim();

function startHypernova (bundle) {
    hypernova({
        getComponent(name) {
            const component = bundle[name];
            if (component) {
                return renderReact(name, component);
            }

            return null;
        }
    });
};

function main () {
    fs.stat(BUNDLE_PATH, (err, stat) => {
        if (!err) {
            // Bundle already exists on disk.
            startHypernova(require(BUNDLE_PATH));
        } else {
            downloadBundle(SHA, BUNDLE_PATH, () => {
                const bundle = require(BUNDLE_PATH);
                startHypernova(bundle); 
            });
        }
    });
}

main();
