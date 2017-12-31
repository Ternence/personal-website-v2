import React from 'react';
import ReactDOM from 'react-dom';
import Mark from '../components/Mark';

ReactDOM.render(<Mark />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/assets/service-worker.js').then(
            registration => {
                // Registration was successful
                console.log(
                    'ServiceWorker registration successful with scope: ',
                    registration.scope,
                );
            },
            err => {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            },
        );
    });
}
