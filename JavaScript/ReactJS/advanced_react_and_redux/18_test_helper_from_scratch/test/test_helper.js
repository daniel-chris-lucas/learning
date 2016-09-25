import jsdom from 'jsdom';

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;


// Build 'renderComponent' helper that should render a given react class



// Build helper for simulating events



// Set up chai-jquery
