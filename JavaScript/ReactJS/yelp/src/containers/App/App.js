import React, { PropTypes } from 'react';
import { Router } from 'react-router';

import styles from './styles.module.css';

class App extends React.Component {
    static PropTypes = {
        routes: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    content() {
        return (
            <Router routes={this.props.routes}
                    history={this.props.history} />
        );
    }

    render() {
        return (
            <div style={ {height: '100%'} }>
                {this.content}
            </div>
        );
    }
}

module.exports = App;