'use strict';

var myapp = angular.module('AngularCrud',[]);

myapp.controller('CrudController',['$scope','$http',function($scope,$http){

          //insert into database
           $scope.insert = function(user){
             $scope.message = user;
             console.log(user.email);
             $http({
               method: "POST",
               url: "http://localhost:8082/validateData",
               headers: {
                 "Content-Type": "application/x-www-form-urlencoded"
               },
               data:{
                 email : user.email,
                 password: user.password
               }
              //// not using params because this params binds the data with url
             //// even it is post method
            //// so node will not find value in body part
              //  params:{
              //    email : user.email,
              //    password: user.password
              //  }

             }).then(function success(response){

             },function error(response){

             });
           };
}]);
