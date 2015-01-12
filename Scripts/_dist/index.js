(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = function NavController ($scope) {



}

},{}],2:[function(require,module,exports){
'use strict';

module.exports = function () {

  return {
    restrict: 'E',
    scope: {
      list: '='
    },
    template: require('./template.html'),
    controller: require('./NavController')
  };

};

},{"./NavController":1,"./template.html":3}],3:[function(require,module,exports){
module.exports = '\n\n\n<ul class="nav leftnav ">\n    <li class="leftnav__item leftnav__item--search">\n        <div class="input-group custom-search-form">\n            <input type="text" class="form-control" placeholder="Search...">\n            <span class="input-group-btn">\n                <button class="btn btn-default" type="button">\n                    <i class="fa fa-search"></i>\n                </button>\n            </span>\n        </div>\n    </li>\n    <li class="leftnav__item" ng-repeat="item in list">\n        <a href="{{ item.link }}" class="leftnav__link">\n            <i class="fa fa-{{ item.cssClass }} fa-fw"></i>\n            {{ item.name }}\n        </a>\n    </li>\n</ul>\n\n';
},{}],4:[function(require,module,exports){
var angular = (window.angular);

angular.module('app', [])
  .controller('ParentController', function ($scope) {

      $scope.pages = [
        { name: 'Dashboard', link: './', cssClass: 'dashboard' },
        { name: 'Articles', link: './', cssClass: 'files-o' },
        { name: 'Members', link: './', cssClass: 'user' }
      ];

  })

.directive('NavComponent', require('nav-component'));

},{"nav-component":2}]},{},[4])