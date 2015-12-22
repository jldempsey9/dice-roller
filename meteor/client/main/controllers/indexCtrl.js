angular.module("dice")
.controller('IndexCtrl', function ($scope, $state) {  //took out Groups
  $scope.joinGroupError = false;

  $scope.testString = "hellow kitty";

  $scope.joinGroup = function (groupId) {
    console.log("joining group (not really)", groupId);
  };

  $scope.createGroup = function () {
    console.log("creating new group (not really)");
  };
});
