var React = require('react');

var DefaultLayout = require('./layout.jsx');
var Content = require('./components/content.jsx');

var Index = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <Content title={this.props.title} text={this.props.text} />
      </DefaultLayout>
    );
  }
});

module.exports = Index;
