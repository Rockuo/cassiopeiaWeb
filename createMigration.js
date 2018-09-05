import models from "./models";
import bcrypt from "bcrypt-nodejs";
import session from 'express-session';
const SequelizeStore = require('connect-session-sequelize')(session.Store);


models.User.sync({force:true}).then(() => {
    models.Event.sync({force: true});
    models.Info.sync({force:true});
    models.Contact.sync({force:true});

    models.Photo.sync({force:true});
    models.User.create({
        username: 'admin',
        firstName: 'admin',
        lastName: 'admin',
        password: bcrypt.hashSync('admin'),
        roles: ['admin']
    })

});
(new SequelizeStore({db: models.sequelize})).sync({force:true});