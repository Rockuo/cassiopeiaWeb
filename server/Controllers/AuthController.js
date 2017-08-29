/**
 * Created by rockuo on 29.5.17.
 */

import BaseController from './BaseController';
import SignIn from '../../src/pages/SingIn';
import SignUp from '../../src/pages/SingUp';
import passport from 'passport';
import models from '../../models';
import bcrypt from 'bcrypt-nodejs';

export default class AuthController extends BaseController {

    static routing() {
        return [
            {type: 'get', route: '/signup', action: 'signUpViewAction'},
            {type: 'get', route: '/signin', action: 'signInViewAction'},
            {type: 'post', route: '/signin', action: 'signInAction'},
            {type: 'post', route: '/signup', action: 'signUpAction'},
            {type: 'get', route: '/signout', action: 'signOutAction'},
        ];
    }

    signInViewAction(req, res) {
        this.renderReact(req, res, {page: SignIn.WrappedComponent.name});
    }

    signUpViewAction(req, res) {
        this.renderReact(req, res, {page: SignUp.WrappedComponent.name});
    }

    signInAction(req, res) {
        passport.authenticate('local', {
            failureRedirect: '/signin',
            successRedirect: '/'
        })(req,res);
    }

    signUpAction(req, res) {
        models.User.findOne({
            where: {
                username: req.body.username
            }
        }).then( user => {
            if (!user) {
                models.User.create({
                    username: req.body.username,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    password: bcrypt.hashSync(req.body.password),
                    roles: JSON.stringify(['user'])
                }).then(
                    () => passport.authenticate("local", {failureRedirect: "/signup", successRedirect: "/"})(req, res)
                )
            } else {
                // todo
            }
        })
    }

    signOutAction(req, res) {
        req.session.destroy();
        res.redirect("/");
    }
}

