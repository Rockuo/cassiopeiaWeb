/**
 * Created by rockuo on 29.5.17.
 */

import BaseController from './BaseController';
import ShowEventIndex from '../../src/pages/ShowEventIndex.jsx';
import ShowEventShow from '../../src/pages/ShowEventShow.jsx';
import models from '../../models';

export default class EventController extends BaseController {

    static routing() {
        return {
            show_event_index: {type:'get', route:'/event',action: 'indexAction'},
            show_event_show: {type:'get', route:'/event/:eventId',action: 'showAction'},
        };
    }

    indexAction(req, res) {
        models.Event.findAll({
            order: '"createdAt" DESC'
        }).then( rows => {
            this.renderReact(
                req,
                res,
                {page: ShowEventIndex.WrappedComponent.name},
                {pageData: {rows, routeTemplate: EventController.routing().show_event_show.route}}
            );
        });
    }

    showAction(req, res) {
        models.Event.findOne({
            where: {
                id: req.params.eventId
            }
        }).then( event => {
            if (event) {
                this.renderReact(
                    req,
                    res,
                    {page: ShowEventShow.WrappedComponent.name},
                    {pageData: {event}}
                );
            } else {
                // todo
            }
        });
    }

}

