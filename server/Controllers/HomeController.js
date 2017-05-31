/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import BaseController from './BaseController';

export default class HomeController extends BaseController {

    indexAction(fullName, src, req, res) {
        let component = React.createElement(
            src,
            {name: 'pepa'},
            null
        );
        BaseController.renderReact(fullName,res,component);
    }


}

