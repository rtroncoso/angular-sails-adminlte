/**
 * This file contains all necessary Angular controller definitions for
 * 'frontend.modules.dashboard' module.
 *
 * Note that this file should only contain controllers and nothing else.
 */
(function() {
  'use strict';

  // Controller to show dashboard on GUI.
  angular.module('frontend.modules.dashboard')
    .controller('DashboardController', [
      '$rootScope', '$scope', '$state',
      'UserService', 'MessageService',
      function controller(
        $rootScope, $scope, $state,
        UserService, MessageService
      ) {

        // Set root-scope configurations
        $rootScope.template = {
          class: 'skin-red-light',
          title: 'Dashboard'
        };

        // Initialize scope data
        $scope.user = UserService.user();

      }
    ])
  ;

}());
