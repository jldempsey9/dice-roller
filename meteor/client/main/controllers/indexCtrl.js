angular.module("dice")
.controller('IndexCtrl', function (Groups, $scope, $state) {
  $scope.joinGroupError = false;

  $scope.testString = "hellow kitty";

  $scope.joinGroup = function (groupId) {
    Groups.get({groupId: groupId})
    .$promise.then(function (group) {
      $state.go('app.group', {groupId: group.id});
    },
    function (error) {
      $scope.joinGroupError = true;
    });
  };

  $scope.createGroup = function () {
    var newGroup = new Groups();
    newGroup.$save({})
    .then(function (group) {
      $state.go('app.group', {groupId: group.id});
    });
  };
});
