import express from 'express';
import path from 'path';
// import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import setRoutes from './router';
import '../src/index';
import '../src/index';
import passport from 'passport';
import models from '../models';
import bcrypt from 'bcrypt-nodejs';
const Strategy = require('passport-local').Strategy;
let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// todo uncomment after placing favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(require('express-session')({secret: 'keyboard cat', resave: false, saveUninitialized: false}));


passport.use(new Strategy(function (username, pass, cb) {
    models.User.findOne({
        where: {
            username: username
        }
    }).then(
        (user, err) =>
            err ? cb(err) : (!user || !bcrypt.compareSync(pass, user.password)) ? cb(null, false) : cb(null, user)
    )
}));

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    models.User.findById(id).then(function (user) {
        cb(null, user);
    });
});

app.use(passport.initialize());
app.use(passport.session());

setRoutes(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
