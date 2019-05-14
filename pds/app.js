require('babel-register')({
    only: [
        /node_modules\/mozaik[^/]*\/src/,
        /src\/server\.js/,
        /data\.json/
    ]
});

require('./src/server');0


