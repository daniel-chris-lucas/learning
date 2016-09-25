import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    static contextTypes = {
        router: React.PropTypes.object
    };

    class Authentication extends Component {
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}
