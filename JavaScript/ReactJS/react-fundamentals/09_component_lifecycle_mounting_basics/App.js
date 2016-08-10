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
     * Gets called just after the component has been inserted into the DOM
     * Just after first call to render
     */
    componentDidMount() {
        console.log('mounted');
    }

    /*
     * Called just before the component is removed from DOM
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
        ReactDOM.render(<App />, document.getElementById('a'));
    }

    unmount() {
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
