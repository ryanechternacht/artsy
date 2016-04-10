'use strict';

angular.module('analytics', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/analytics', {
        templateUrl: '/analytics.html', 
        controller: 'AnalyticsCtrl'
    })
}])

.controller('AnalyticsCtrl', ['$scope', function($scope) {
    buildExhibitTime();
    buildNewVisitors();
    buildLikesPerVisit();
    // buildFundraising();
    buildHeatMap();
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

function  buildLikesPerVisit() {
    $(function () {
        $('#new-old-popularity').highcharts({
            title: {
                text: 'Visit Popularity',
                x: -20 //center
            },
            subtitle: {
                text: 'Average Likes per Visit',
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
                data: [60, 58, 55, 53, 54, 55, 57, 59, 61, 60, 58, 64]
            }, {
                name: 'Existing Exhibits',
                data: [40, 42, 45, 44, 43, 46, 48, 50, 53, 51, 55, 54]
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

function buildHeatMap() {
    $(function () {

    $('#heatmap').highcharts({

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
        },

        title: {
            text: 'Weekly Interest by Group'
        },

        xAxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },

        yAxis: {
            categories: ['Large Group', 'Small Group', 'Family', 'Couple', 'Single'],
            title: null
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> <br><b>' +
                    this.point.value + '</b> people visited in <b>' + this.series.yAxis.categories[this.point.y] + '</b>';
            }
        },

        series: [{
            name: 'Visitors',
            borderWidth: 1,
            data: [
                [0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], 
                [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], 
                [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], 
                [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], 
                [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], 
                [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], 
                [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], 
            ],
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }]

    });
});
}