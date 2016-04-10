'use strict';

angular.module('events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/events', {
        templateUrl: '/app/events.html',
        controller: 'EventsCtrl'
    })
}])

.controller('EventsCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.events = buildEventData();
}]);

function buildEventData() {
    return [
        {
            "id": 1,
            "payload": 131958,
            "title": "Test Event",
            "description": "",
            "address": "1126 Walnut St. Apt. 3a",
            "city": "Cincinnati",
            "state": "OH",
            "url": "http://juanjbrown.com/",
            "cincyartsguide_event_name": "",
            "photo": "http://54.86.24.29/api/v1/events/photos/events/2016/04/10/bg_goE163P.jpg",
            "start_date": "2016-04-10T02:03:58Z",
            "end_date": "2016-04-11T18:00:00Z",
            "audio_tag": 2,
            "organization": 6
        },
        {
            "id": 2,
            "payload": 131960,
            "title": "30 Americans",
            "description": "30 Americans showcases art by many of the most important African-American artists of the last three decades. This provocative exhibition focuses on issues of racial, gender, and historical identity in contemporary culture while exploring the powerful influence of artistic legacy and community across generations. The works are drawn primarily from the Rubell Family Collection. Free admission",
            "address": "953 Eden Park Drive",
            "city": "Cincinnati",
            "state": "OH",
            "url": "http://www.cincinnatiartmuseum.org/",
            "cincyartsguide_event_name": "30-americans",
            "photo": "http://54.86.24.29/api/v1/events/photos/events/2016/04/10/wiley-k_sleep_homepage2_G2xV5RM.jpg",
            "start_date": "2016-04-01T02:22:11Z",
            "end_date": "2016-04-30T02:22:11Z",
            "audio_tag": 3,
            "organization": 5
        }
    ];
}