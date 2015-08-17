/**
 * Angular module to load them all. This component is divided to following logical components:
 *
 *  frontend.modules.dashboard
 *
 * Each component has it own configuration for ui-router.
 */
(function() {
  'use strict';

  // Define frontend.admin module
  angular.module('frontend.modules', [
    'frontend.modules.dashboard'
  ]);

  // Module configuration
  angular.module('frontend.modules')
    .config([
      '$stateProvider',
      function($stateProvider) {
        $stateProvider
          .state('pages', {
            parent: 'frontend.admin',
            data: {
              access: 1
            },
            views: {
              'content@frontend': {
                controller: [
                  '$state',
                  function($state) {
                    $state.go('pages.dashboard');
                  }
                ]
              },
              'pageNavigation@frontend': {
                templateUrl: '/frontend/core/layout/partials/navigation.html',
                controller: 'NavigationController',
                resolve: {
                  _items: [
                    'ContentNavigationItems',
                    function resolve(ContentNavigationItems) {
                      return ContentNavigationItems.getItems('modules');
                    }
                  ]
                }
              }
            }
          })
        ;
      }
    ])
  ;

angular.module('frontend.modules')
  .run([
    '$rootScope',
    function($rootScope) {

      // Set root-scope title
      $rootScope.template = {
        class: 'skin-red-light',
        title: 'holis'
      };

    }
  ])
;

}());
