var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <h1>
    I am a header
    {this.props.children}
    </h1>
  }
});
