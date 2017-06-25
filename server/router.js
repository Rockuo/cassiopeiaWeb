/**
 * Created by rockuo on 29.5.17.
 */
'use strict';
import _ from 'lodash';
import * as Controllers from './Controllers';
import express from 'express';

export default function(app) {

    const router = express.Router();
    let controllers = [];
    _.each(Controllers, Controller => {
        let args = [];
        let instance = new Controller(...args);
        controllers.push(instance);
        _.each(Controller.routing(), settings => {
            router[settings.type](settings.route, function(req, res, next) {
                let found = true;
                if(settings.roles){
                    if(req.user) {
                        let roles = JSON.parse(req.user.roles);
                        _.each(settings.roles, role => {
                            if(!roles.includes(role)){
                                found = false;
                                return false;
                            }
                        });
                    } else {
                        found = false;
                    }
                }
                if(found) {
                    instance[settings.action](
                        req,
                        res,
                        next
                    );
                } else {
                    let err = new Error('Not Found');
                    err.status = 404;
                    next(err);
                }
            });
        });
    });
    app.use('/', router);
}
