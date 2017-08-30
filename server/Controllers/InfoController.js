/**
 * Created by rockuo on 29.5.17.
 */

import BaseController from './BaseController';
import ShowInfoIndex from '../../src/pages/ShowInfoIndex.jsx';
import ShowInfoShow from '../../src/pages/ShowInfoShow.jsx';
import models from '../../models';

export default class InfoController extends BaseController {

    static routing() {
        return {
            show_info_index: {type:'get', route:'/info',action: 'indexAction'},
            show_info_show: {type:'get', route:'/info/:infoId',action: 'showAction'},
        };
    }

    indexAction(req, res) {
        models.Info.findAll({
            order: '"createdAt" DESC'
        }).then( rows => {
            this.renderReact(
                req,
                res,
                {page: ShowInfoIndex.WrappedComponent.name},
                {pageData: {rows, routeTemplate: InfoController.routing().show_info_show.route}}
            );
        });
    }

    showAction(req, res) {
        models.Info.findOne({
            where: {
                id: req.params.infoId
            }
        }).then( info => {
            if (info) {
                this.renderReact(
                    req,
                    res,
                    {page: ShowInfoShow.WrappedComponent.name},
                    {pageData: {info}}
                );
            } else {
                // todo
            }
        });
    }

}

