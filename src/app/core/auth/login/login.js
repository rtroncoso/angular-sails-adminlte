/**
 * Messages component which is divided to following logical components:
 *
 *  Controllers
 *
 * All of these are wrapped to 'frontend.auth.login' angular module.
 */
(function() {
  'use strict';

  // Define frontend.auth.login angular module
  angular.module('frontend.core.auth.login', []);

  // Module configuration
  angular.module('frontend.core.auth.login')
    .config([
      '$stateProvider',
      function config($stateProvider) {
        $stateProvider
          // Login
          .state('auth.login', {
            url: '/users/login',
            data: {
              title: 'login',
              access: 0
            },
            views: {
              'main@': {
                templateUrl: '/frontend/core/auth/login/login.html',
                controller: 'LoginController'
              }
            }
          })
        ;
      }
    ])
  ;
}());
