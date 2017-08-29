/**
 * Created by rockuo on 4.6.17.
 */
'use strict';
let db = require('../models/index');
module.exports = {
    up: () => {
        db.User.sync()
            .then(db.Event.sync())
            .then(db.Info.sync())
            .then(db.Contact.sync())
            // .then(db.Photo.sync());
    },

    down: () => {
        db.Event.drop().then(db.User.drop()).then(db.Info.drop()).then(db.Contact.drop()).then(db.Photo.drop());
    }
};
