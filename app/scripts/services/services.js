'use strict';

/**
 * @ngdoc service
 * @name angularRedditApp.services
 * @description
 * # services
 * Service in the angularRedditApp.
 */
angular.module('angularRedditApp')
  .service('services', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var data = {}

    data.getArticles = function() {
      return $http({
        method: 'JSON',
        url: 'https://www.reddit.com/r/worldnews/.json'
      });
    }

    return data;
  });
