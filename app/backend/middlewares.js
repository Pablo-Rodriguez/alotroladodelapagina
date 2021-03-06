
import {join} from 'path'

import express from 'express'
import morgan from 'morgan'
import favicon from 'serve-favicon'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import cookieParser from 'cookie-parser'
import expressSession from 'express-session'
import passport from 'passport'
import auth from './middlewares/auth.js'
import admin from './middlewares/admin.js'
import passportConfig from './middlewares/passport.js'

const root = join(__dirname, 'public')

passportConfig(passport)

export default function (rex) {
  rex.load('morgan', morgan('dev'))
  rex.load('favicon', favicon(join(__dirname, 'public', 'img', 'icon.png')))
  rex.load('body-parser-urlencoded', bodyParser.urlencoded({extended: false}))
  rex.load('body-parser-json', bodyParser.json())
  rex.load('method-override', methodOverride('_method'))
  rex.load('cookie-parser', cookieParser())
  rex.load('express-session', expressSession({
    secret: process.env.EXPRESS_SESSION_SECRET || 'secret que hai que cambiar',
    resave: false,
    saveUninitialized: false
  }))
  rex.load('passport', passport.initialize())
  rex.load('passport-session', passport.session())
  rex.load('auth', auth('/#/'))
  rex.load('admin', admin('/#/'))
  rex.load('static', express.static(root))

  rex.use('morgan')
  rex.use('favicon')
  rex.use('body-parser-urlencoded')
  rex.use('body-parser-json')
  rex.use('method-override')
  rex.use('cookie-parser')
  rex.use('express-session')
  rex.use('passport')
  rex.use('passport-session')
  rex.use('static')
}
