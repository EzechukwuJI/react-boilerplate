var ReactDOM  =  require('react-dom');
var React  =  require('react');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');



// load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history = {hasHistory}>
  </Router>,
  document.getElementById('app')
);
