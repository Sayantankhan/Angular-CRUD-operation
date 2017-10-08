'use strict';

var myapp = angular.module('AngularCrud',[]);

myapp.controller('CrudController',['$scope','$http',function($scope,$http){
           $scope.insert = function(user){
             $scope.message = user;

             $http({
               method: "POST",
               url: "http://localhost:8081/AngularDemo/AngularController",
               params:{
                 email : user.email,
                 password: user.password
               }

             }).then(function success(response){

             },function error(response){

             });
           };
}]);
