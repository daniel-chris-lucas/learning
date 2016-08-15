var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },
        basePath: '',
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-webpack'
        ],
        preprocessors: {},
        port: 9876,;
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['Chrome'],
        concurrency: Infinity
    });
};