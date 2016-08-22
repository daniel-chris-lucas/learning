var React = require('React');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            scores: []
        }
    },

    componentDidMount: function () {
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then(function (scores) {
                this.setState({
                    scores: scores,
                    isLoading: false
                });
            }.bind(this));
    },

    render: function () {
        return (
            <Results isLoading={null}
                     playersInfo={this.props.location.state.playersInfo} 
                     scores={null} />
        );
    }
});

module.exports = ResultsContainer;