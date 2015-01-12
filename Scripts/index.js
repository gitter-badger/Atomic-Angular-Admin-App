var angular = require('angular');

angular.module('app', [])
  .controller('ParentController', function ($scope) {

      $scope.pages = [
        { name: 'Dashboard', link: './', cssClass: 'dashboard' },
        { name: 'Articles', link: './', cssClass: 'files-o' },
        { name: 'Members', link: './', cssClass: 'user' }
      ];

  })

.directive('NavComponent', require('nav-component'));
