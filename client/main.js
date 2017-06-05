/**
 * Created by rockuo on 1.6.17.
 */

import { render } from 'react-dom';
import React from 'react';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
import All from '../src/index.jsx';
import * as reducers from '../reducers/index';


const preLoadedState = JSON.parse(document.getElementById('state').value);
let store = createStore(combineReducers({...reducers,test: (state = false) => state}), preLoadedState),
    component = React.createElement(All(store));

render(component,document.getElementById('root'));