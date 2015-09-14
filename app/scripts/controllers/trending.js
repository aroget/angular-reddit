'use strict';

/**
 * @ngdoc function
 * @name angularRedditApp.controller:TrendingCtrl
 * @description
 * # TrendingCtrl
 * Controller of the angularRedditApp
 */
angular.module('angularRedditApp')
  .controller('TrendingCtrl', function ($scope, $http, $route) {

    $http.get('https://www.reddit.com/top/.json?limit=100&sort=activity').

    success(function(data, status, headers, config) {
      $scope.topics = data.data.children;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
    });

    $scope.$route = $route;
  });
