var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '599e9c1fb5044e73b18919b08d3ccca8';
var sentryApp = '93245';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
    name: 'Github Battle',
    branch: 'production_error_tracking',
    version: '1.0'
}

Raven.config(sentryURL, {
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch
    }
}).install();

window.onerror = function () {
    Raven.showReportDialog();
};

ReactDOM.render(
    routes,
    document.getElementById('app')
);