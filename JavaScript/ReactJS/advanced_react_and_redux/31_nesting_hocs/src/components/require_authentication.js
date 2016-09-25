import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends Component {
        render() {
            console.log(this.props.authenticated);
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}
