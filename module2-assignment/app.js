(function () {
'use strict';

angular.module('LunchCheckerApp', [])

.controller('LunchCheckerController', LunchChecker);

LunchChecker.$inject = ['$scope'];

function LunchChecker ($scope) {

  $scope.message = "";
  $scope.lunch = "";

  $scope.showMessage = function () {

      if($scope.lunch == "") {
        $scope.message = "Please enter data first";
        $scope.fontcolor = "black"
        $scope.bordercolor = "red";
      }

      else{ // input box not empty
        var splitlunch = [];
        splitlunch = $scope.lunch.split(',');
        $scope.bordercolor = "green";

        if (splitlunch.length <= 3){ //less than 4 elements
          $scope.message = "Enjoy";
          $scope.fontcolor = "green";
        }
        else { // more than 3 elements
          $scope.message = "Too Much";
          $scope.fontcolor = "red";
        }
      } // end of non empty input box
  };
};

})();
