import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        let txt = this.props.txt;
        return <h1>{txt}</h1>

        // Could also be written
        // return <h1>{this.props.txt}</h1>
    }
};

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'this is the default txt'
};

ReactDOM.render(
    <App cat={5} txt="this is the props value" />,
    document.getElementById('app')
);
