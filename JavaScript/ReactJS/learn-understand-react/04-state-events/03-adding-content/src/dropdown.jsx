var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    alert('hello from dropdown');
  },

  render: function() {
    var list = this.props.items.map(function(item) {
      return <ListItem item={item} />
    });

    return <div className="dropdown">
      <Button
        whenClicked={this.handleClick}
        className="btn-default"
        title={this.props.title}
        subTitleClassName="caret" />
      <ul>
        {list}
      </ul>
    </div>
  }
});
