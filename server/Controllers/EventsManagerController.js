/**
 * Created by rockuo on 29.5.17.
 */

import BaseController from './BaseController';
import EventIndex from '../../src/pages/EventIndex';
import EventEdit from '../../src/pages/EventEdit';
import models from '../../models';
import _ from 'lodash';
import {ROLE_ADMIN} from '../roles';


export default class EventsManagerController extends BaseController {

    static routing() {
        return {
            event_index :{type:'get', route:'/manage/event', action: 'indexAction'},// roles: [ROLE_ADMIN]}, todo
            event_new :{type:'get', route:'/manage/event/new', action: 'newAction'},// roles: [ROLE_ADMIN]}, todo
            event_create :{type:'post', route:'/manage/event/create', action: 'createAction'},// roles: [ROLE_ADMIN]}, todo
            event_edit :{type:'get', route:'/manage/event/:eventId', action: 'editAction'},// roles: [ROLE_ADMIN]} todo
            event_update :{type:'post', route:'/manage/event/:eventId', action: 'updateAction'},// roles: [ROLE_ADMIN]} todo
        };
    }

    indexAction(req, res) {
        models.Event.findAll().then( rows => {
            let pageData = {
                rows: _.map(rows, event => { return {href: `/manage/event/${event.id}`, value: event.title};})
            };
            this.renderReact(req, res, {page: EventIndex.WrappedComponent.name}, {pageData});
        });
    }

    newAction(req, res) {
        this.renderReact(req, res, {page: EventEdit.WrappedComponent.name}, {
            pageData: {
                action: EventsManagerController.routing().event_create.route,
                roles: [ROLE_ADMIN]
            }
        })
    }

    createAction(req, res) {
        models.Event.create({
            title: req.body.title,
            type: req.body.type,
            text: req.body.text,
            section: req.body.section,
            UserId: req.user && req.user.id || 1
        }).then(event => res.redirect(`/manage/event/${event.id}`));
    }

    editAction(req, res) {
        models.Event.findOne({
            where: {
                id: req.params.eventId
            }
        }).then( event => {
            if (event) {
                this.renderReact(req, res, {page: EventEdit.WrappedComponent.name}, {
                    pageData: {
                        event,
                        action: `/manage/event/${event.id}`,
                        roles: [ROLE_ADMIN]
                    }
                })
            } else {
                // todo
            }
        });
    }

    updateAction(req, res) {
        models.Event.findOne({
            where: {
                id: req.params.eventId
            }
        }).then(
            event => {
            if (event) {
                event.title = req.body.title;
                event.type = req.body.type;
                event.text = req.body.text;
                event.section = req.body.section;
                event.save().then(() => res.redirect(`/manage/event/${event.id}`));
            } else {
                // todo
            }
        });
    }
}




