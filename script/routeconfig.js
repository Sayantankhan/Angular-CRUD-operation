"use strict";

var app = angular.module('Routeapp', ['ngRoute','Viewmodule']);
app.config(function($routeProvider,$locationProvider) {

    $routeProvider
    .when("/",{
      templateUrl : 'home.html'
    })
    .when("/homefield", {
        templateUrl : 'home.html'
    })
    .when("/CRUD", {
      templateUrl: 'angular-crud.html'
    })
    .when("/view/:id",{
      templateUrl:'viewid.html',
      controler: 'Viewcontroller'
    });

  $locationProvider.html5Mode(true).hashPrefix('!');

});
