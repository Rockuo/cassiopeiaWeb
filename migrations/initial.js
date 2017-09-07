/**
 * Created by rockuo on 4.6.17.
 */
'use strict';
let db = require('../models/index');
module.exports = {
    up: () => {
        console.log('up-..........');
        db.User.sync({force:true})
            .then(us => {
            console.log(us);
            db.Event.sync({force: true}).then(x => console.log(x));
            db.Info.sync({force:true}).then(x => console.log(x));
            db.Contact.sync({force:true}).then(x => console.log(x));
        })
        ;
        // db.User.sync({force:true}).then(console.log('user'));
        // db.Event.sync({force:true}).then(console.log('event'));
        // db.Info.sync({force:true}).then(console.log('info'));
        // db.Contact.sync({force:true}).then(console.log('contact'));
            // .then(db.Photo.sync());
    },

    down: () => {
        db.Event.drop().then(db.User.drop()).then(db.Info.drop()).then(db.Contact.drop());
    }
};
