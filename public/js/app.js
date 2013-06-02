// Generated by CoffeeScript 1.3.3
(function() {
  "use strict";

  var app;

  app = angular.module("myApp", ["myApp.filters", "myApp.services", "myApp.directives", "myApp.controllers"]);

  app.config(function($routeProvider, $locationProvider) {
    return $routeProvider.when("/", {
      templateUrl: "partials/home.html",
      controller: 'HomeCtrl'
    }).when("/map", {
      templateUrl: "partials/map.html",
      controller: 'MapCtrl'
    }).when("/map:params", {
      templateUrl: "partials/map.html",
      controller: 'MapCtrl'
    }).when("/search", {
      templateUrl: "partials/search.html",
      controller: 'SearchCtrl'
    }).otherwise({
      redirectTo: "/"
    });
  });

  app.run(function($rootScope, $location) {
    var rootScope;
    rootScope = $rootScope;
    rootScope.navBarHeight = 40;
    return rootScope.mapShown = function() {
      return $location.path().indexOf('/map') > -1;
    };
  });

}).call(this);
