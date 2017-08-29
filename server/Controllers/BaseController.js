/**
 * Created by rockuo on 29.5.17.
 */
'use strict';


import {renderToString} from 'react-dom/server';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
import React from 'react';
import All from '../../src';
import * as reducers from '../../reducers/index';
import menuItems from '../../src/menu';
import topMenuItems from '../../src/topMenu';
import topMenuItemsAdmin from '../../src/topMenuAdmin';
import topMenuItemsSigned from '../../src/topMenuSigned';
import _ from 'lodash';
import {ROLE_ADMIN} from '../roles';

const defaults = {menuItems: menuItems, topMenuItems: topMenuItems, pageData: {}};

export default class BaseController {
    constructor() {
        if (new.target === BaseController) {
            throw new TypeError('Cannot construct Abstract instances directly');
        }
    }

    static services() {
    }

    static routing() {
    }

    renderReact(req, res, defaultState, params = {}) {
        params = _.defaultsDeep(params, defaults);
        let user = {};

        // todo <remove>
        params.topMenuItems = topMenuItemsAdmin;
        params.topMenuItems = params.topMenuItems.concat(topMenuItemsSigned);
        // todo </remove>
        if (req.user) {
            user.username = req.user.username;
            if(req.user.roles){
                params.topMenuItems = topMenuItemsAdmin;
                params.topMenuItems = params.topMenuItems.concat(topMenuItemsSigned);
            } else {
                params.topMenuItems = topMenuItemsSigned;
            }
        }

        let store = createStore(
            combineReducers({...reducers, test: (state = false) => state}),
            {...defaultState, user, test: true, ...params}
            ),
            component = React.createElement(All(store));

        res.render('index', {
            title: 'todo',
            content: renderToString(component),
            state: JSON.stringify(store.getState())
        });
    }

}