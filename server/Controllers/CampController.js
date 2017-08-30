/**
 * Created by rockuo on 29.5.17.
 */

import BaseController from './BaseController';
import ShowCampIndex from '../../src/pages/ShowCampIndex.jsx';
import {InfoController, EventController} from './index';
import models from '../../models';

export default class CampController extends BaseController {

    static routing() {
        return {
            show_camp_index: {type:'get', route:'/camp',action: 'indexAction'},
        };
    }

    indexAction(req, res) {
        let pageData = {
            infos: {routeTemplate: InfoController.routing().show_info_show.route},
            events: {routeTemplate: EventController.routing().show_event_show.route}
        };
        models.Info.findAll({
            where: {
                section: 'CAMP'
            },
            order: '"createdAt" DESC'
        }).then(infos => {
            pageData.infos.rows = infos;
            models.Event.findAll({
                where: {
                    section: 'CAMP'
                },
                order: '"createdAt" DESC'
            }).then(events => {
                pageData.events.rows = events;
                this.renderReact(
                    req,
                    res,
                    {page: ShowCampIndex.WrappedComponent.name},
                    {pageData}
                );
            });
        });
    }
}

