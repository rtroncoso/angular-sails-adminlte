/**
 * Angular module for frontend.modules.dashboard component.
 *
 * Basically this file contains actual angular module initialize
 * and route definitions for this module.
 */
(function() {
  'use strict';

  // Define frontend.public module
  angular.module('frontend.modules.dashboard', []);

  // Module configuration
  angular.module('frontend.modules.dashboard')
    .config([
      '$stateProvider',
      function($stateProvider) {

        $stateProvider
          .state('pages.dashboard', {
            url: '/dashboard',
            data: {
              access: 1
            },
            views: {
              'content@frontend': {
                controller: 'DashboardController',
                templateUrl: '/frontend/modules/dashboard/dashboard.html'
              }
            }
          })
        ;

      }
    ])
  ;

}());
