/**
 * Created by rockuo on 29.5.17.
 */
'use strict';
import _ from 'lodash';
import * as Controllers from './Controllers';
import routes from '../routes';
import express from 'express';

export default function(app) {
    _.each(routes, (actions, controllerName) => {
        let controller = new Controllers[controllerName](app);
        _.each(actions, (actionSetting, actionName) => {
            const router = express.Router();
            router[actionSetting.type](actionSetting.route, function(req, res, next) {
                controller[actionName + 'Action'](
                    `${controllerName}.${actionName}`,
                    actionSetting.src,
                    req,
                    res,
                    next
                );
            });
            app.use(actionSetting.route , router);
        });
    });
}
