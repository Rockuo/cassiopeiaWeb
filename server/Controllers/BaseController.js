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

    renderReact(res, defaultState) {
        let store = createStore(combineReducers({...reducers,test: (state = false) => state}), {...defaultState, test:true}),
            component = React.createElement(All(store));
        res.render('index', {title: 'todo', content: renderToString(component), state: JSON.stringify(store.getState())});
    }

}