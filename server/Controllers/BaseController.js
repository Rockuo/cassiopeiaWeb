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

    renderReact(req, res, defaultState, params = {menuItems: menuItems, topMenuItems: topMenuItems}) {
        let user = {};

        if (req.user) {
            user.username = req.user.username;
            if(JSON.parse(req.user.roles).includes('admin')){
                params.topMenuItems = topMenuItemsAdmin;
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