var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createFactory(require('./views/components/content.jsx'));
var node = document.getElementById('container');

ReactDOM.render(Component({ title: 'Express', text: 'client' }), node);
