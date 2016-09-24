
import {join} from 'path';

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

export default function (rex) {
    rex.app.set('views', join(__dirname, 'mvc', 'views'));
    rex.app.set('view engine', 'pug');

    rex.load('morgan', morgan('dev'));
    rex.load('body-parser-urlencoded', bodyParser.urlencoded({extended: false}));
    rex.load('body-parser-json', bodyParser.json());
    rex.load('method-override', methodOverride('_method'));
    /*rex.load('cookie-parser', cookieParser());
    rex.load('express-session', expressSession({
      secret: 'secret que hai que cambiar',
      resave: false,
      saveUninitialized: false
    }));
    rex.load('passport', passport.initialize());
    rex.load('passport-session', passport.session());
    rex.load('auth', auth('/login'));*/
    rex.load('static', express.static(join(__dirname, '/public')));

    rex.use('morgan');
    rex.use('body-parser-urlencoded');
    rex.use('body-parser-json');
    rex.use('method-override');
    /*rex.use('cookie-parser');
    rex.use('express-session');
    rex.use('passport');
    rex.use('passport-session');*/
    rex.use('static');
}