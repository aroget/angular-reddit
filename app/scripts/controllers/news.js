'use strict';

/**
 * @ngdoc function
 * @name angularRedditApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the angularRedditApp
 */
angular.module('angularRedditApp')
  .controller('NewsCtrl', function ($scope, $http, $route) {
    $scope.$route = $route;

    $http.get('https://www.reddit.com/r/news/.json?limit=100&sort=activity').

    success(function(data, status, headers, config) {
      $scope.topics = data.data.children;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
    });
  });
