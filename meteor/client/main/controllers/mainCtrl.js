angular.module("dice")
  .controller('RollCtrl', function ($scope, $stateParams, $timeout) { //took out roller
    //var _ = Meteor.npmRequire('lodash');
    //var socket = Meteor.npmRequired('socket.io-client')();

      $scope.clientId = "seven";
      $scope.members = [];
      $scope.member = {clientId: $scope.clientId};
      $scope.diceToRoll = [];
      $scope.diceColor = '#cc0000';
      $scope.roll = {
        disabled: false,
        time: new Date(),
        values: [],
      };


      // socket.on('groups:update:members', function (data) {
      //   $scope.$apply(function () {
      //     $scope.members = getRollStats(data);
      //   });
      // });

      var joinGroup = function () {
        // socket.emit('groups:join', {
        //   groupId: $stateParams.groupId,
        //   clientId: "seven",
        //   clientName: "Matt Damon",
        //   diceColor: '#cc0000'
        // });
        console.log("supposedly joining a group");
      };

      var getRollStats = function () {

        // _.forEach(data, function (member, index, array) {
        //   array[index].rollStats = {
        //     dc: (_.find(member.rolls, {die: 20})) ?
        //       _.find(member.rolls, {die: 20}).value :
        //       null,
        //     sum: _.sum(_.map(member.rolls, 'value'))
        //   };
        // });

        var members = [
          {
            clientId: "seven",
            diceColor: "#cc0000",
            rolls: [
              {
                die : 10,
                value : 7
              }
            ]
          },
          {
            clientId: "steven",
            diceColor: "#cc0000",
            rolls: [
              {
                die : 8,
                value : 7
              },
              {
                die : 20,
                value : 1
              }
            ]
          },
          {
            clientId: "seven",
            diceColor: "#cc0000",
            rolls:[
              {
                die : 20,
                value : 1
              }
            ]
          }
        ];
        return members;
      };

      joinGroup();

      $scope.setClientName = function () {
        $scope.clientName = prompt('Enter your name:'); //localstoraged
        joinGroup();
      };

      $scope.addDie = function (type) {
        console.log("die added");
        $scope.diceToRoll.push(type);
      };

      $scope.removeDie = function (index) {
        $scope.diceToRoll.splice(index, 1);
      };

      $scope.removeAllDice = function (index) {
        $scope.diceToRoll = [];
      };

      $scope.$watch('diceColor', function (newValue, oldValue) {
        if (typeof newValue === 'undefined') {
          return;
        }
        $scope.diceColor = newValue;    //localstoraged
        joinGroup();
      });

      $scope.roll = function () {
        console.log("rolling");
        $scope.roll.time = new Date();
        $scope.roll.disabled = true;
        $scope.roll.values = [];

        // $scope.$apply(function () {
        //      $scope.members = getRollStats(data);
        //    });

           $scope.members = getRollStats();
           console.log("scope members", $scope.members);

        // socket.emit('groups:roll', {
        //   groupId: $stateParams.groupId,
        //   clientId: $scope.clientId,    //localstoraged
        //   dice: $scope.diceToRoll
        // });

        //gets: groups[groupIndex].members

        _.forEach($scope.diceToRoll, function (die) {
          //$scope.roll.values.push(roller.roll(die));

        });

        $timeout(function () {
          $scope.roll.disabled = false;
        }, 1500)
      };
});
