/**
 * Created by rockuo on 29.5.17.
 */

import BaseController from './BaseController';
import ContactIndex from '../../src/pages/ContactIndex';
import ContactEdit from '../../src/pages/ContactEdit';
import models from '../../models';
import _ from 'lodash';
import {ROLE_ADMIN} from '../roles';


export default class ContactsManagerController extends BaseController {

    static routing() {
        return {
            contact_index :{type:'get', route:'/manage/contact', action: 'indexAction', roles: [ROLE_ADMIN]},
            contact_new :{type:'get', route:'/manage/contact/new', action: 'newAction',roles: [ROLE_ADMIN]},
            contact_create :{type:'post', route:'/manage/contact/create', action: 'createAction',roles: [ROLE_ADMIN]},
            contact_edit :{type:'get', route:'/manage/contact/:contactId', action: 'editAction', roles: [ROLE_ADMIN]},
            contact_update :{type:'post', route:'/manage/contact/:contactId', action: 'updateAction',roles: [ROLE_ADMIN]}
        };
    }

    indexAction(req, res) {
        models.Contact.findAll().then( rows => {
            let pageData = {
                rows: rows,
                routeTemplate: ContactsManagerController.routing().contact_edit.route,
                newContact: ContactsManagerController.routing().contact_new.route
            };
            this.renderReact(req, res, {page: ContactIndex.WrappedComponent.name}, {pageData});
        });
    }

    newAction(req, res) {
        this.renderReact(req, res, {page: ContactEdit.WrappedComponent.name}, {
            pageData: {
                action: ContactsManagerController.routing().contact_create.route,
                roles: [ROLE_ADMIN]
            }
        })
    }

    createAction(req, res) {
        models.Contact.create({
            contactAttributes: req.body.contactAttributes,
        }).then(contact => res.redirect(`/manage/contact/${contact.id}`));
    }

    editAction(req, res) {
        models.Contact.findOne({
            where: {
                id: req.params.contactId
            }
        }).then( contact => {
            if (contact) {
                this.renderReact(req, res, {page: ContactEdit.WrappedComponent.name}, {
                    pageData: {
                        contact,
                        action: `/manage/contact/${contact.id}`,
                        roles: [ROLE_ADMIN]
                    }
                })
            } else {
                // todo
            }
        });
    }

    updateAction(req, res) {
        models.Contact.findOne({
            where: {
                id: req.params.contactId
            }
        }).then(
            contact => {
            if (contact) {
                contact.contactAttributes = req.body.contactAttributes;
                contact.save().then(() => res.redirect(`/manage/contact/${contact.id}`));
            } else {
                // todo
            }
        });
    }
}




