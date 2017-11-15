window.app = angular.module('myApp', ['ui.router', 'ui.bootstrap','angucomplete-alt']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            abtract: true,
            templateUrl: 'assets/templates/searchbox.html'
        })
        .state('table',{
            url:'/table',
            templateUrl:'assets/templates/api-table.html'
        })

});
app.controller('myController',
    function ($scope, $http,$location) {

        var arr = new Array();
        $http.get("assets/data/usa_states.json").success(function (data) {
            angular.forEach(data, function (item) {
                arr.push({ bookName: item.name });

            });
            $scope.addSkill = function (selected) {
                console.log(selected.title);
                $location.path('/table');
            };

            $scope.myBooks = arr;



        }).error(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus);
        });


    });
