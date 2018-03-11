import Raven from 'raven-js';

const sentry_key = '0ee1bbf91ef041dfa19aba92b8e49179';
const sentry_app = '301831';

export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, content) {
    Raven.captureException(ex, {
        extra: content
    });
    /*eslint no-console:0*/
    window && window.console && console.error && console.error(ex);
}