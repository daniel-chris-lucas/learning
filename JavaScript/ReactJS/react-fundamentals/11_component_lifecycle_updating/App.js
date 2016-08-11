import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {increasing: false};
    }

    update() {
        ReactDOM.render(
            <App val={this.props.val + 1} />,
            document.getElementById('app')
        );
    }

    /*
     * Invoked when a component is receiving props.
     * This method is not called for the initial render.
     *
     * This is an oportunity to react to a prop transition before
     * render() is called.
     */
    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val});
    }

    /**
     * Invoked before rendering when new props or state are being
     * received. This method is not called for the initial
     * render or when forceUpdate is used.
     *
     * Use this as an opportunity to return false when you're
     * certain that the transition to the new props and state
     * will not require a component update.
     */
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val %5 === 0;
    }

    /**
     * Invoked immediately after the component's updates are flushed to
     * the DOM. This method is not called for the initial render.
     *
     * Use this as an opportunity to operate on the DOM when the
     * component has been updated.
     */
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
    }

    render() {
        console.log(this.state.increasing);
        return (
            <button className="btn btn-primary" onClick={this.update}>
                {this.props.val}
            </button>
        );
    }
}

App.defaultProps = {
    val: 0
}

export default App;
