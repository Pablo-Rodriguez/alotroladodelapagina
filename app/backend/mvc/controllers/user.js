
import passport from 'passport';
import model from '../models/user.js';
import util from '../../util.js';
import errorMsg from '../../errors.js';

export default class User {

    constructor (rex) {
        rex.get('/users', 'admin', this.get);
        rex.post('/users', 'admin', this.post);
        rex.post('/login', passport.authenticate('local', {
            successRedirect: '/#/',
            failureRedirect: '/#/'
        }));
        rex.get('/logout', 'auth', this.logout);
        rex.delete('/users', 'admin', this.delete);
    }

    get (req, res) {
        model.get()
            .then((users) => res.json({err: false, users}))
            .catch(util.error(res, errorMsg.user.get))
    }

    logout (req, res) {
        req.logout();
        res.redirect('/#/');
    }

    post (req, res) {
        model.post(req.body)
            .then(() => res.json({err: false}))
            .catch(util.error(res, errorMsg.user.post));
    }

    delete (req, res) {
        model.delete(req.body.id)
            .then(() => res.json({err: false}))
            .catch(util.error(res, errorMsg.user.delete));
    }

}
