'use strict';

/**
 * @ngdoc function
 * @name angularRedditApp.controller:TopicCtrl
 * @description
 * # TopicCtrl
 * Controller of the angularRedditApp
 */
angular.module('angularRedditApp')
  .controller('TopicCtrl', function ($scope, $http, $routeParams) {

    var topic = $routeParams.topic;
    $scope.name = topic;


    $http.get('https://www.reddit.com/r/'+ topic +'/.json').

      success(function(data, status, headers, config) {
        $scope.articles = data.data.children;
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  });
