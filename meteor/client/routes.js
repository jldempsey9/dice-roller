angular.module("dice")
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'client/main/views/index.ng.html',
                controller: 'IndexCtrl'
            })
            .state('roll', {
              url: '/roll',
              templateUrl: 'client/main/views/roll.ng.html',
              controller: 'RollCtrl'
            });

        $urlRouterProvider.otherwise('/main');
    });
