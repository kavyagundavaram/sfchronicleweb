'use strict';

angular.module('sfchroniclewebApp.auth', [
  'sfchroniclewebApp.constants',
  'sfchroniclewebApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
