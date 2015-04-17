(function () {
  'use strict';

  angular
    .module('hippo.ngbp', [
      'hippo.ngbp.templates',
      'hippo.ngbp.api',
      'ui.router',
      'sub'
    ])
    .config(config);

  angular.element(document).ready(function () {
    angular.bootstrap(document.documentElement, ['hippo.ngbp'], {
      strictDi: true
    });
  });

  function config ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'modules/hippo.ngbp.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    });

    $locationProvider.html5Mode(true);
  }
})();
