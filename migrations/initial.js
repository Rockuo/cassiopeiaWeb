/**
 * Created by rockuo on 4.6.17.
 */
'use strict';
let db = require('../models');
module.exports = {
    up:() => {
        db.user.sync();
    },

    down: queryInterface => {
        return queryInterface.dropTable('users');
    }
};
