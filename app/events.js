'use strict';

angular.module('events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/events', {
        templateUrl: '/app/events.html',
        controller: 'EventsCtrl'
    })
}])

.controller('EventsCtrl', ['$scope', function($scope) {
    
}]);