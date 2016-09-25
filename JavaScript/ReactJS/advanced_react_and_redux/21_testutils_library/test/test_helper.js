import jsdom from 'jsdom';
import jquery from 'jquery';

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = jquery(global.window);


// Build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass) {
    const componentInstance = TestUtils.renderIntoDocument(<ComponentClass />);

    return $(ReactDOM.findDOMNode(componentInstance));
}


// Build helper for simulating events



// Set up chai-jquery
