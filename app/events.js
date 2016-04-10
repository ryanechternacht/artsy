'use strict';

angular.module('events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/events', {
        templateUrl: '/events.html',
        controller: 'EventsCtrl'
    })
}])

.controller('EventsCtrl', ['$scope', '$http', function($scope, $http) {
    // $scope.events = buildEventData();
    $http({ method: 'GET', url: '/data/events' }).then(response => {
        if(response.data) { 
            $scope.events = response.data;
        } else {
            // TODO do what?
        }
    });
}]);