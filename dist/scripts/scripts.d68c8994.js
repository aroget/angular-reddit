"use strict";angular.module("angularRedditApp",["ngResource","ngRoute","LocalStorageModule"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main",activetab:"/"}).when("/r/:topic",{templateUrl:"views/topic.html",controller:"TopicCtrl",controllerAs:"topic",activetab:"/r/"}).when("/discover",{templateUrl:"views/discover.html",controller:"DiscoverCtrl",controllerAs:"discover",activetab:"discover"}).when("/trending",{templateUrl:"views/trending.html",controller:"TrendingCtrl",controllerAs:"trending",activetab:"trending"}).when("/news",{templateUrl:"views/news.html",controller:"NewsCtrl",controllerAs:"news",activetab:"news"}).otherwise({redirectTo:"/"})}]),angular.module("angularRedditApp").controller("MainCtrl",["$scope","$http","localStorageService","$route",function(a,b,c,d){b.get("https://www.reddit.com/subreddits/.json?limit=100&sort=activity").success(function(b,c,d,e){a.topics=b.data.children}).error(function(a,b,c,d){}),a.$route=d,a.saveToStore=function(a){var b=JSON.parse(c.get("visited"))||[],d=a.data.title,e=a.data.url,f={title:d,url:e};return b.push(f),c.set("visited",JSON.stringify(b))}}]).controller("recentlyVisited",["$scope","localStorageService",function(a,b){JSON.parse(b.get("visited"))}]),angular.module("angularRedditApp").service("services",function(){var a={};return a.getArticles=function(){return $http({method:"JSON",url:"https://www.reddit.com/r/worldnews/.json"})},a}),angular.module("angularRedditApp").controller("TopicCtrl",["$scope","$http","$routeParams",function(a,b,c){var d=c.topic;a.name=d,b.get("https://www.reddit.com/r/"+d+"/.json").success(function(b,c,d,e){a.articles=b.data.children,console.log(b)}).error(function(a,b,c,d){})}]),angular.module("angularRedditApp").controller("DiscoverCtrl",["$scope","$http","$route",function(a,b,c){a.$route=c,b.get("https://www.reddit.com/r/random/.json?limit=100&sort=activity").success(function(b,c,d,e){a.topics=b.data.children,console.log(b)}).error(function(a,b,c,d){})}]),angular.module("angularRedditApp").controller("TrendingCtrl",["$scope","$http","$route",function(a,b,c){b.get("https://www.reddit.com/top/.json?limit=100&sort=activity").success(function(b,c,d,e){a.topics=b.data.children,console.log(b)}).error(function(a,b,c,d){}),a.$route=c}]),angular.module("angularRedditApp").controller("NewsCtrl",["$scope","$http","$route",function(a,b,c){a.$route=c,b.get("https://www.reddit.com/r/news/.json?limit=100&sort=activity").success(function(b,c,d,e){a.topics=b.data.children,console.log(b)}).error(function(a,b,c,d){})}]),angular.module("angularRedditApp").run(["$templateCache",function(a){a.put("views/discover.html",'<h1>Here</h1> <div class="row"> <ul class="col-md-12"> <li class="col-md-6" ng-repeat="topic in topics | filter:query"> <a href="{{topic.data.url}}" target="_blank"> <h3> {{ topic.data.title | limitTo: 75 }}... </h3> <span class="users">Score</span> <span class="subscribers">{{ topic.data.score }}</span> <!-- <p>{{ topic.data.public_description | limitTo : 120 }}</p> --> </a> </li> </ul> </div> <!-- <button ng-click="loadMore()">Load More Topics</button> -->'),a.put("views/main.html",'<div class="row"> <ul class="col-md-12"> <li class="col-md-6" ng-repeat="topic in topics | filter:query"> <a href="#{{topic.data.url}}" ng-click="saveToStore(topic)"> <h3> {{ topic.data.title }} </h3> <span class="users">Readers</span> <span class="subscribers">{{ topic.data.subscribers | number:0 }}</span> <!-- <p>{{ topic.data.public_description | limitTo : 120 }}</p> --> </a> </li> </ul> </div> <!-- <button ng-click="loadMore()">Load More Topics</button> -->'),a.put("views/news.html",'<div class="row"> <ul class="col-md-12"> <li class="col-md-6" ng-repeat="topic in topics | filter:query"> <a href="{{topic.data.url}}" target="_blank"> <h3> {{ topic.data.title | limitTo: 75 }}... </h3> <span class="users">Score</span> <span class="subscribers">{{ topic.data.score }}</span> <!-- <p>{{ topic.data.public_description | limitTo : 120 }}</p> --> </a> </li> </ul> </div> <!-- <button ng-click="loadMore()">Load More Topics</button> -->'),a.put("views/topic.html",'<div class="breadcrumb"> <a href="#/">Feed</a> <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span> <span class="category-name">{{name}}</span> </div> <ul class="col-md-12"> <li class="col-md-6" ng-repeat="article in articles | filter:query"> <a href="{{article.data.url}}" target="_blank"> <h3>{{ article.data.title | limitTo: 45 }}...</h3> <span class="users">Score</span> <span class="subscribers">{{ article.data.score }}</span> <p class="date">{{ article.data.created * 1000 | date}}</p> </a> </li> </ul>'),a.put("views/trending.html",'<div class="row"> <ul class="col-md-12"> <li class="col-md-6" ng-repeat="topic in topics | filter:query"> <a href="{{topic.data.url}}" target="_blank"> <h3> {{ topic.data.title | limitTo: 75 }}... </h3> <span class="users">Score</span> <span class="subscribers">{{ topic.data.score }}</span> <!-- <p>{{ topic.data.public_description | limitTo : 120 }}</p> --> </a> </li> </ul> </div> <!-- <button ng-click="loadMore()">Load More Topics</button> -->')}]);