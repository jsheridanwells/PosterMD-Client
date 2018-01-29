'use strict';

let angular = require('../lib/node_modules/angular');
require('../lib/node_modules/angular-route');
let app = angular.module('PosterMD', ['ngRoute']);

require('./controllers');
require('./creds');
require('./directives');
require('./factories');
require('./services');

app.config(($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'views/splash.html'
  })
  .when('/signup', {
    templateUrl: 'views/signup.html'
  })
  .when('/login', {
    templateUrl: 'views/login.html'
  })
  .otherwise('/');
});