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
	github: {
	    baseUrl: 'https://api.github.com',
	    token: ''
    },
    json: {
        url: 'http://localhost:5001',
		headers: 'Content-Type: application/json',
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
                    type: 'github.branches',
                    repository: 'USGS-Astrogeology/PDS-Pipelines',
                    columns: 1, rows: 1,
                    x: 0, y: 0
                },
                {
                    type: 'github.organization_badge',
                    organization: 'USGS-Astrogeology',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type:  'json.data',
      				title: 'null',
     			 	value: '${DI.value}',
      				unit:  null,
                    columns: 1, rows: 1,
                    x: 1, y: 1
                },
            ],
        },
    ],
};

module.exports = config;

