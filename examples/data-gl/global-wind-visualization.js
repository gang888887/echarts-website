/*
title: Global wind visualization
category: flowGL
tags: bmap
titleCN: Global wind visualization
videoStart: 2000
videoEnd: 10000
*/

$.getJSON(ROOT_PATH + '/data-gl/asset/data/winds.json', function (windData) {

    var data = [];
    var p = 0;
    var maxMag = 0;
    var minMag = Infinity;
    for (var j = 0; j < windData.ny; j++) {
        for (var i = 0; i <= windData.nx; i++) {
            // Continuous data.
            var p = (i % windData.nx) + j * windData.nx;
            var vx = windData.data[p][0];
            var vy = windData.data[p][1];
            var mag = Math.sqrt(vx * vx + vy * vy);
            // 数据是一个一维数组
            // [ [经度, 维度，向量经度方向的值，向量维度方向的值] ]
            data.push([
                i / windData.nx * 360 - 180,
                j / windData.ny * 180 - 90,
                vx,
                vy,
                mag
            ]);
            maxMag = Math.max(mag, maxMag);
            minMag = Math.min(mag, minMag);
        }
    }
    myChart.setOption(option = {
        backgroundColor: '#001122',
        visualMap: {
            left: 'right',
            min: minMag,
            max: maxMag,
            dimension: 4,
            inRange: {
                // color: ['green', 'yellow', 'red']
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            realtime: false,
            calculable: true,
            textStyle: {
                color: '#fff'
            }
        },
        bmap: {
            center: [0, 0],
            zoom: 1,
            roam: true,
            mapStyle: {
            'styleJson': [
                {
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#031628'
                }
                },
                {
                'featureType': 'land',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#000102'
                }
                },
                {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
                },
                {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
                },
                {
                'featureType': 'arterial',
                'elementType': 'geometry.stroke',
                'stylers': {
                    'color': '#0b3d51'
                }
                },
                {
                'featureType': 'local',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#000000'
                }
                },
                {
                'featureType': 'railway',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
                },
                {
                'featureType': 'railway',
                'elementType': 'geometry.stroke',
                'stylers': {
                    'color': '#08304b'
                }
                },
                {
                'featureType': 'subway',
                'elementType': 'geometry',
                'stylers': {
                    'lightness': -70
                }
                },
                {
                'featureType': 'building',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
                },
                {
                'featureType': 'all',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#857f7f'
                }
                },
                {
                'featureType': 'all',
                'elementType': 'labels.text.stroke',
                'stylers': {
                    'color': '#000000'
                }
                },
                {
                'featureType': 'building',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#022338'
                }
                },
                {
                'featureType': 'green',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#062032'
                }
                },
                {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#465b6c'
                }
                },
                {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#022338'
                }
                },
                {
                'featureType': 'label',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
                }
            ]
            }
        },
        series: [{
            type: 'flowGL',
            coordinateSystem: 'bmap',
            data: data,
            supersampling: 4,
            particleType: 'line',
            particleDensity: 128,
            particleSpeed: 1,
            // gridWidth: windData.nx,
            // gridHeight: windData.ny,
            itemStyle: {
                opacity: 0.7
            }
        }]
    });
});