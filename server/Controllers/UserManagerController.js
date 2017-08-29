/**
 * Created by rockuo on 29.5.17.
 */

import BaseController from './BaseController';
import UserIndex from '../../src/pages/UserIndex';
import UserEdit from '../../src/pages/UserEdit';
import models from '../../models';
import _ from 'lodash';
import {ROLE_ADMIN} from '../roles';
import bcrypt from 'bcrypt-nodejs';


export default class UserManagerController extends BaseController {

    static routing() {
        return {
            user_index :{type:'get', route:'/manage/users', action: 'indexAction'},// roles: [ROLE_ADMIN]}, todo
            user_edit :{type:'get', route:'/manage/users/:userId', action: 'editAction'},// roles: [ROLE_ADMIN]} todo
            user_update :{type:'post', route:'/manage/users/:userId', action: 'updateAction'},// roles: [ROLE_ADMIN]} todo
        };
    }

    indexAction(req, res) {
        models.User.findAll().then( rows => {
            let pageData = {
                rows: _.map(rows, user => { return {href: `/manage/users/${user.id}`, value: user.username};})
            };
            this.renderReact(req, res, {page: UserIndex.WrappedComponent.name}, {pageData});
        });
    }

    editAction(req, res) {
        models.User.findOne({
            where: {
                id: req.params.userId
            }
        }).then( user => {
            if (user) {
                this.renderForm(req, res, user);
            } else {
                // todo
            }
        });
    }

    updateAction(req, res) {
        models.User.findOne({
            where: {
                id: req.params.userId
            }
        }).then( user => {
            if (user) {
                let data = req.body;

                if (!data.username) {
                    this.renderForm(req, res, user);
                    return
                }

                user.firstName = data.firstName;
                user.lastName = data.lastName;
                if(data.roles) {
                    user.roles = [data.roles]
                }
                if(data.password) {
                    user.password = bcrypt.hashSync(data.password)
                }
                models.User.findOne({
                    where: {
                        username: data.username
                    }
                }).then( founded => {
                    if (!founded || user.username === data.username) {
                        user.username = data.username;
                        founded.save().then(() => this.renderForm(req, res, user));
                    } else {
                        //todo
                    }
                })

            } else {
                // todo
            }
        });
    }

    renderForm(req, res, user) {
        this.renderReact(req, res, {page: UserEdit.WrappedComponent.name}, {
            pageData: {
                user,
                action: '/manage/users/',
                roles: [ROLE_ADMIN]
            }
        })
    }
}




