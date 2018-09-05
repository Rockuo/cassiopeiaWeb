/**
 * Created by rockuo on 29.5.17.
 */

import BaseController from './BaseController';
import Home from '../../src/pages/Home';
import {InfoController, EventController} from './index';
import models from '../../models';
// import bcrypt from "bcrypt-nodejs";
// import passport from "passport/lib";

export default class HomeController extends BaseController {

    static routing() {
        return {
            cassiopeia_home: {type:'get', route:'/',action: 'indexAction'},
            // danger: {type:'get', route:'/danger',action: 'danger'}
        };
    }

    indexAction(req, res) {
        let pageData = {
            infos: {routeTemplate: InfoController.routing().show_info_show.route},
            events: {routeTemplate: EventController.routing().show_event_show.route}
        };
        models.Info.findAll({
            order: '"createdAt" DESC'
        }).then(infos => {
            pageData.infos.rows = infos;
            models.Event.findAll({
                order: '"createdAt" DESC'
            }).then(events => {
                pageData.events.rows = events;
                this.renderReact(
                    req,
                    res,
                    {page: Home.WrappedComponent.name},
                    {pageData}
                );
            });
        });
    }


    danger(req) {
        // if(!!+req.query.force) {
        //     models.User.sync({force:true}).then(() => {
        //         models.Event.sync({force: true});
        //         models.Info.sync({force:true});
        //         models.Contact.sync({force:true});
        //         models.Photo.sync({force:true});
        //
        //         models.User.create({
        //             username: 'admin',
        //             firstName: 'admin',
        //             lastName: 'admin',
        //             password: bcrypt.hashSync('admin'),
        //             roles: ['admin']
        //         })
        //     });
        // }
    }
}

