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
                instance[settings.action](
                    req,
                    res,
                    next
                );
            });
        });
    });
    app.use('/', router);
}
