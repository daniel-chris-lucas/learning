var Raven = require('raven-js');

function logCustomMessage (message, context) {
    Raven.captureMessage(message, {
        level: 'error',
        extra: context
    });

    console.error(message);
}

module.exports = logCustomMessage;