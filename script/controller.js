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
