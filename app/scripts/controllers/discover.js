'use strict';

/**
 * @ngdoc function
 * @name angularRedditApp.controller:DiscoverCtrl
 * @description
 * # DiscoverCtrl
 * Controller of the angularRedditApp
 */
angular.module('angularRedditApp')
  .controller('DiscoverCtrl', function ($scope, $http, $route) {

    $scope.$route = $route;
    $http.get('https://www.reddit.com/r/random/.json?limit=100&sort=activity').

    success(function(data, status, headers, config) {
      $scope.topics = data.data.children;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
    });
  });
