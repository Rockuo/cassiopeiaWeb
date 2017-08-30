/**
 * Created by rockuo on 29.5.17.
 */

import BaseController from './BaseController';
import InfoIndex from '../../src/pages/InfoIndex';
import InfoEdit from '../../src/pages/InfoEdit';
import models from '../../models';
import _ from 'lodash';
import {ROLE_ADMIN} from '../roles';


export default class InfoManagerController extends BaseController {

    static routing() {
        return {
            info_index :{type:'get', route:'/manage/info', action: 'indexAction'},// roles: [ROLE_ADMIN]}, todo
            info_new :{type:'get', route:'/manage/info/new', action: 'newAction'},// roles: [ROLE_ADMIN]}, todo
            info_create :{type:'post', route:'/manage/info/create', action: 'createAction'},// roles: [ROLE_ADMIN]}, todo
            info_edit :{type:'get', route:'/manage/info/:infoId', action: 'editAction'},// roles: [ROLE_ADMIN]} todo
            info_update :{type:'post', route:'/manage/info/:infoId', action: 'updateAction'},// roles: [ROLE_ADMIN]} todo
        };
    }

    indexAction(req, res) {
        models.Info.findAll().then( rows => {
            let pageData = {
                rows: rows,
                routeTemplate: InfoManagerController.routing().info_edit.route,
                newInfo: InfoManagerController.routing().info_new.route
            };
            this.renderReact(req, res, {page: InfoIndex.WrappedComponent.name}, {pageData});
        });
    }

    newAction(req, res) {
        this.renderReact(req, res, {page: InfoEdit.WrappedComponent.name}, {
            pageData: {
                action: InfoManagerController.routing().info_create.route,
                roles: [ROLE_ADMIN]
            }
        })
    }

    createAction(req, res) {
        models.Info.create({
            title: req.body.title,
            type: req.body.type,
            text: req.body.text,
            section: req.body.section,
            UserId: req.user && req.user.id || 1
        }).then(info => res.redirect(`/manage/info/${info.id}`));
    }

    editAction(req, res) {
        models.Info.findOne({
            where: {
                id: req.params.infoId
            }
        }).then( info => {
            if (info) {
                this.renderReact(req, res, {page: InfoEdit.WrappedComponent.name}, {
                    pageData: {
                        info,
                        action: `/manage/info/${info.id}`,
                        roles: [ROLE_ADMIN]
                    }
                })
            } else {
                // todo
            }
        });
    }

    updateAction(req, res) {
        models.Info.findOne({
            where: {
                id: req.params.infoId
            }
        }).then(
            info => {
            if (info) {
                info.title = req.body.title;
                info.type = req.body.type;
                info.text = req.body.text;
                info.section = req.body.section;
                info.save().then(() => res.redirect(`/manage/info/${info.id}`));
            } else {
                // todo
            }
        });
    }
}




