import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = { val: 0 };
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({val: this.state.val + 1});
    }

    /*
     * Gets called when the component is ready
     * Just before inserting into the DOM (render)
     */
    componentWillMount() {
        console.log('mounting');
    }

    render() {
        console.log('rendering');
        return (
            <button className="btn btn-default" 
                    onClick={this.update}
            >
                {this.state.val}
            </button>
        );
    }

    /*
     * Invoked once, immediately after the initial rendering occurs.
     * At this point in the lifecycle, you can access any refs to 
     * your children. The componentDidMount() method of child
     * components is invoked before that of parent components.
     *
     * If you want to integrate with other JavaScript frameworks, set
     * timers using setTimeout or setInterval, or send AJAX requests,
     * perform those operations in this method.
     */
    componentDidMount() {
        console.log('mounted');
    }

    /*
     * Invoked immediately before a component is unmounted from the DOM.
     *
     * Perform any necessary0 cleanup in this method, such as invalidating
     * timers or cleaning up any DOM elements that were created in
     * componentDidMount.
     */
    componentWillUnmount() {
        console.log('bye!');
    }
}

class Wrapper extends React.Component {
    constructor() {
        super();
    }

    mount() {
        /**
         * Render a ReactElement into the DOM in the supplied
         * container and return a reference to the component.
         *
         * If the ReactElement was previously rendered into the
         * container this will perform an update on it.
         */
        ReactDOM.render(<App />, document.getElementById('a'));
    }

    unmount() {
        /*
         * Remove a mounted React component from the DOM and clean up its
         * event handlers and state. If no component was mounted in the
         * container, calling this function does nothing.
         */
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        );
    }
}

export default Wrapper;