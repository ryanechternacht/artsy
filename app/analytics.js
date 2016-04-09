'use strict';

angular.module('analytics', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/analytics', {
        templateUrl: '/app/analytics.html', 
        controller: 'AnalyticsCtrl'
    })
}])

.controller('AnalyticsCtrl', ['$scope', function($scope) {
    buildExhibitTime();
    buildNewVisitors();
    buildNewOldPopularity();
    buildFundraising();
}]);

function buildExhibitTime() { 
    $(function () {
        $('#exhibit-time').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Exhibit Interest'
            },
            subtitle: {
                text: 'Avg time spent in exhibit'
            },
            xAxis: {
                categories: [
                    'Asian Art',
                    'Classical',
                    'Contemporary',
                    'Native American',
                    'Max and Gaby’s Alphabet',
                    '30 Americans',
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Time Spent (min)'
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                data: [71.5, 49.9, 106.4, 176.0, 144.0, 129.2],
                color: '#666'
            }]
        });
    });
}

function buildNewVisitors() { 
    $(function () {
        $('#new-visitors').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'New Visitors'
            },
            subtitle: {
                text: 'Last 12 months (rolling)'
            },
            xAxis: {
                categories: [
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                    'January',
                    'February',
                    'March',
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Time Spent (min)'
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                data: [58, 60, 67, 65, 70, 75, 100, 80, 89, 94, 101, 110],
                color: '#666'
            }]
        });
    });
}
function buildNewOldPopularity() {
    $(function () {
        $('#new-old-popularity').highcharts({
            title: {
                text: 'Popularity of New and Existing Exhibits',
                x: -20 //center
            },
            subtitle: {
                text: '% of time spent in each',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: '% of time spent in each',
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }],
                min: 0,
                max: 100
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'New Exhibits',
                data: [60, 58, 55, 42, 40, 43, 66, 67, 66, 60, 58, 57]
            }, {
                name: 'Existing Exhibits',
                data: [40, 42, 45, 58, 60, 57, 34, 33, 34, 40, 42, 43]
            }]
        });
    });
}

function buildFundraising() {
    $(function () {
        var gaugeOptions = {

            chart: {
                type: 'solidgauge'
            },

            title: null,

            pane: {
                center: ['50%', '85%'],
                size: '100%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },

            tooltip: {
                enabled: false
            },

            // the value axis
            yAxis: {
                stops: [
                    [0.1, '#DF5353'], // red
                    [0.5, '#DDDF0D'], // yellow
                    [0.9, '#55BF3B'] // green
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickPixelInterval: 400,
                tickWidth: 0,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                }
            },

            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            }
        };

        // The speed gauge
        $('#fundraising').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 2500,
                title: {
                    text: 'Individual Contributions'
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Individual Contributions',
                data: [1776],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                           '<span style="font-size:12px;color:silver">km/h</span></div>'
                },
                tooltip: {
                    valueSuffix: 'Contributions'
                }
            }]

        }));
    });
}