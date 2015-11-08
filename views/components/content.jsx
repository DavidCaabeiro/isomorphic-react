var React = require('react');

var Content = React.createClass({
  render: function() {
    return (
      <div id="content">
        <p>Welcome to {this.props.title}</p>
        <p>Component rendered on <b>{this.props.text}</b></p>
      </div>
    );
  }
});

module.exports = Content;
