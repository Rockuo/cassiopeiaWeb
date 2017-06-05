/**
 * Created by rockuo on 29.5.17.
 */

import BaseController from './BaseController';
import Home from '../../src/pages/Home';

export default class HomeController extends BaseController {

    static routing() {
        return [{type:'get', route:'/',action: 'indexAction'}];
    }

    indexAction(req, res) {
        this.renderReact(res, {page: Home.WrappedComponent.name});
    }


}

