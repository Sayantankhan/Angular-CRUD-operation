'use strict';

var app = angular.module('Viewmodule',[]);

app.controller('Viewcontroller',['$scope','$routeParams',function($scope,$routeParams){
    $scope.value = $routeParams.id;
}]);
