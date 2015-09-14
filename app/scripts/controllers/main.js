'use strict';

/**
 * @ngdoc function
 * @name angularRedditApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularRedditApp
 */
angular.module('angularRedditApp')
  .controller('MainCtrl', function ($scope, $http, localStorageService, $route) {

      $http.get('https://www.reddit.com/subreddits/.json?limit=100&sort=activity').

      success(function(data, status, headers, config) {
        $scope.topics = data.data.children;
        // console.log(data);
      }).
      error(function(data, status, headers, config) {
        // log error
      });

      $scope.$route = $route;

      $scope.saveToStore = function(topic){
        // empty array to hold values
        var favs = [];
        // intial value of localstorage else create empty array
        var ls = JSON.parse(localStorageService.get('visited')) || [];
        // getting values to store in ls
        var title = topic.data.title;
        var url   = topic.data.url;

        // build the object & push to array
        var obj = {
          'title' : title,
          'url'   : url
        };
        ls.push(obj);

        // push new values to ls
        return localStorageService.set('visited', JSON.stringify(ls));


      };
  })
  .controller('recentlyVisited', function($scope, localStorageService){
    var ls = JSON.parse(localStorageService.get('visited'));
    // if we have more than 5 elements we return the last 5
    // if (ls.length > 5){
    //   $scope.links = ls.slice(Math.max(ls.length - 5, 1));
    // }
    // else{
    //   $scope.links = ls;
    // }

  });
