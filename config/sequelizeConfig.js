let path = require('path');

module.exports = {
    // 'development': {
    //     'username': 'root',
    //     'password': null,
    //     'database': 'database_development',
    //     'host': '127.0.0.1',
    //     'dialect': 'mysql'
    // },
    // 'test': {
    //     'username': 'root',
    //     'password': null,
    //     'database': 'database_test',
    //     'host': '127.0.0.1',
    //     'dialect': 'mysql'
    // },

    'development': {
        'username': 'root',
        'password': 'mypassword',
        'database': 'testing',
        'host': '127.0.0.1',
        'dialect': 'mysql',
    },
    "production": {
        'username': 'cassiopeia',
        'password': 'g6VqTpYvA3wEIYAG',
        'database': 'cassiopeia',
        'host': 'mysql',
        'dialect': 'mysql',
    }
};