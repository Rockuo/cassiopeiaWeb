/**
 * Created by rockuo on 29.5.17.
 */

import BaseController from './BaseController';
import Home from '../../src/pages/Home';
import models from '../../models';

export default class HomeController extends BaseController {

    static routing() {
        return {
            cassiopeia_home: {type:'get', route:'/',action: 'indexAction'},
            // danger: {type:'get', route:'/danger',action: 'danger'}
        };
    }

    indexAction(req, res) {
        this.renderReact(req, res, {page: Home.WrappedComponent.name});
    }


    danger() {
        // models.User.sync({force:true}).then(() => {
        //     models.Event.sync({force: true});
        //     models.Info.sync({force:true})
        //     models.Contact.sync({force:true})
        // });
    }
}

