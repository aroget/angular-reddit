'use strict';

/**
 * @ngdoc overview
 * @name angularRedditApp
 * @description
 * # angularRedditApp
 *
 * Main module of the application.
 */
angular
  .module('angularRedditApp', [
    'ngResource',
    'ngRoute',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        activetab: '/'
      })
      .when('/r/:topic', {
        templateUrl: 'views/topic.html',
        controller: 'TopicCtrl',
        controllerAs: 'topic',
        activetab: '/r/'
      })
      .when('/discover', {
        templateUrl: 'views/discover.html',
        controller: 'DiscoverCtrl',
        controllerAs: 'discover',
        activetab: 'discover'
      })
      .when('/trending', {
        templateUrl: 'views/trending.html',
        controller: 'TrendingCtrl',
        controllerAs: 'trending',
        activetab: 'trending'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl',
        controllerAs: 'news',
        activetab: 'news'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
