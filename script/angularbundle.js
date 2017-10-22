/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var app = angular.module('FormValidation',['ValidationController','AngularCrud','Routeapp']);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var myapp = angular.module('ValidationController',[]);
myapp.controller('FormValidationcntrl',['$scope',function($scope){
  $scope.master = [];
  //$scope.data = [];

      $scope.insert = function(user) {
        //$scope.master = angular.copy(user);
        $scope.message = "";
        $scope.master.push(angular.copy(user));
        //angular.copy(user)  makes a copy of the user
        //if we use user instead of angular.copy(user) it will change for every time user i/p change
        //structure-- angular.copy(source, [destination]);
        //The source that will be used to make a copy. Can be any type, including primitives, null, and undefined.
        //Destination into which the source is copied. If provided, must be of the same type as source
        $scope.reset();
      };


      $scope.reset = function() {
        $scope.user = {};
		    $scope.updatemessage = "Updation will be done based on emailId";
      };

      $scope.delete = function(user){
        // var position = $scope.master.indexOf(user);
        // $scope.data = position;
        // $scope.master.splice(position,1);
        var isFindElement = false;
        for(var i = 0; i <= $scope.master.length - 1; i++){
          if($scope.master[i].name == user.name && $scope.master[i].email == user.email){
                isFindElement = true;
                $scope.master.splice($scope.master[i],1);
                $scope.message = "";
          }
        }
          if(!isFindElement){
            $scope.message = "* User is not found";
          }
          $scope.reset();
      }

	  $scope.update = function(user){
		var isElementFind = false;
     //$scope.message = isElementFind;
		for(var i = 0; i <= $scope.master.length - 1; i++){
          if($scope.master[i].email == user.email){
               isElementFind = true;
               $scope.master[i].name = user.name;
               $scope.message = "";
          }
    }

		if(!isElementFind){
		     $scope.message = "* User is not found";
		}
		$scope.reset();
	  }

	  //As because we call reset function by default when page will load
      $scope.reset();
}]);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var app = angular.module('Viewmodule',[]);

app.controller('Viewcontroller',['$scope','$routeParams',function($scope,$routeParams){
    $scope.value = $routeParams.id;
}]);


/***/ })
/******/ ]);