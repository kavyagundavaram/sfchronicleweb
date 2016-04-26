'use strict';

angular.module('sfchroniclewebApp', [
  'sfchroniclewebApp.auth',
  'sfchroniclewebApp.admin',
  'sfchroniclewebApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
