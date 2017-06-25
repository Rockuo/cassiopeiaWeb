/**
 * Created by rockuo on 29.5.17.
 */

import BaseController from './BaseController';
import UserIndex from '../../src/pages/UserIndex';

export default class UserManagerController extends BaseController {

    static routing() {
        return [{type:'get', route:'/manage/users', action: 'indexAction', roles: ['admin']}];
    }

    indexAction(req, res) {
        this.renderReact(req, res, {page: UserIndex.WrappedComponent.name});
    }


}

