var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    };
  },

  render: function() {
    return <div className="input-group">
      <input
        type="text"
        value={this.state.text}
        onChange={this.handleInputChange}
        className="form-control" />

      <span className="input-group-btn">
        <button
          onClick={this.handleClick}
          className="btn btn-default"
          type="button"
        >
          Add
        </button>
      </span>
    </div>
  },

  handleClick: function() {
    // Send value of text input to firebase
  },

  handleInputChange: function(event) {
    this.setState({
      text: event.target.value
    });
  }
});
