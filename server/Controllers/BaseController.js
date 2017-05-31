/**
 * Created by rockuo on 29.5.17.
 */
'use strict';


import {renderToString} from 'react-dom/server';
import Layout from '../../src/components/Layout';
import React from 'react';


export default class BaseController {
    constructor(app) {
        this.app = app;
    }

    static renderReact(fullName, res, srcComp){
        let component = React.createElement(
            Layout,
            {},
            srcComp
        );
        res.render('index', {title: 'todo', routeFullName: fullName, ctnt: renderToString(component)});
    }

}