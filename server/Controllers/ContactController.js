/**
 * Created by rockuo on 29.5.17.
 */

import BaseController from './BaseController';
import ShowContactIndex from '../../src/pages/ShowContactIndex.jsx';
import models from '../../models';

export default class ContactController extends BaseController {

    static routing() {
        return {
            show_contact_index: {type:'get', route:'/contact',action: 'indexAction'},
        };
    }

    indexAction(req, res) {
        console.log('asdasdsadsadsadasdasdas');
        models.Contact.findAll({
            order: '"createdAt" DESC'
        }).then( rows => {
            this.renderReact(
                req,
                res,
                {page: ShowContactIndex.WrappedComponent.name},
                {pageData: {rows}}
            );
        });
    }
}

