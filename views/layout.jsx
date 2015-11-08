var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel='stylesheet' href='/stylesheets/style.css' />
        </head>
        <body>
          <div id="container">
            {this.props.children}
          </div>
          <script src="/javascripts/main.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
