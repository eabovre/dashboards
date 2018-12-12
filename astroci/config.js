// Load environment variables from .env file if available
require('dotenv').load();

var config = {
    env:  'prod',

    host: '0.0.0.0',
    port: process.env.PORT || 5000,

    // Available themes:
    // + bordeau
    // + harlequin
    // + light-grey
    // + light-yellow
    // + night-blue
    // + snow
    // + yellow
    theme: 'night-blue',

    // clients configs
    api: {
        jenkins: {
            baseUrl: 'https://jenkins-dev.wr.usgs.gov',
            basicAuthUser: 'jlaura',
            basicAuthPassword: ''
        }
    },

    // define duration between each dashboard rotation (ms)
    rotationDuration: 8000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 60000,

    dashboards: [

        // first dashboard
        {
            // 4 x 3 dashboard
            columns: 3,
            rows:    5,
            widgets: [
                {
                    type: 'travis.build_history',
                    owner: 'USGS-Astrogeology',
                    repository: 'conda-libcsm',
                    columns: 1, rows: 1,
                    x: 0, y: 0
                },
                {
                    type: 'travis.build_history',
                    owner: 'USGS-Astrogeology',
                    repository: 'CSM-CameraModel',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'travis.build_history',
                    owner: 'USGS-Astrogeology',
                    repository: 'CSM-Swig',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'travis.build_history',
                    owner: 'USGS-Astrogeology',
                    repository: 'autocnet',
                    columns: 1, rows: 1,
                    x: 0, y: 1
                },
                {
                    type: 'travis.build_history',
                    owner: 'USGS-Astrogeology',
                    repository: 'plio',
                    columns: 1, rows: 1,
                    x: 1, y: 1
                },
                {
                    type: 'travis.build_history',
                    owner: 'USGS-Astrogeology',
                    repository: 'pfeffernusse',
                    columns: 1, rows: 1,
                    x: 2, y: 1
                },
                {
                    type: 'travis.build_history',
                    owner: 'USGS-Astrogeology',
                    repository: 'ale',
                    columns: 1, rows: 1,
                    x: 0, y: 2
                },
                {
                    type: 'travis.build_history',
                    owner: 'USGS-Astrogeology',
                    repository: 'PyHAT',
                    columns: 1, rows: 1,
                    x: 1, y: 2
                },
                {
                    type: 'travis.build_history',
                    owner: 'USGS-Astrogeology',
                    repository: 'SensorUtils',
                    columns: 1, rows: 1,
                    x: 2, y: 2
                },
                {
                    type: 'jenkins.view',
                    view: 'isis3',
                    title: 'isis3',
                    columns: 3, rows: 1,
                    x: 0, y: 3
                },
                {
                    type: 'jenkins.view',
                    view: 'ScheduledTasks',
                    title: 'Scheduled Jobs',
                    columns: 3, rows: 1,
                    x: 0, y: 4
                }
            ]
        },
    ]
};

module.exports = config;
