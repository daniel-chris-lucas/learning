import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import styles from './styles.module.css';

const App = React.createClass({
    render: function () {
        return (
            <div className={styles.wrapper}>
                <h1>Environment: {__NODE_ENV__}</h1>
            </div>
        );
    }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);