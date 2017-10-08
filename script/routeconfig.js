"use strict";

var app = angular.module('Routeapp', ['ngRoute']);
app.config(function($routeProvider,$locationProvider) {

    $routeProvider
    .when("/",{
      templateUrl : 'home.html'
    })
    .when("/homefield", {
        templateUrl : 'home.html'
    })
    .when("/about_page", {
      templateUrl: 'crud.html'
    });

  $locationProvider.html5Mode(true).hashPrefix('!');

});
