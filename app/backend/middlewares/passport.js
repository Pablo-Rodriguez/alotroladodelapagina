
import Strategy from 'passport-local';
import bcrypt from 'bcryptjs';
import model from '../mvc/models/user.js';

export default function (passport) {
    passport.use(new Strategy((name, password, done) => {
        model.findByName(name)
            .then((user) => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            })
            .catch((err) => done(null, false));
    }));
    passport.serializeUser((user, done) => done(null, user._id));
    passport.deserializeUser((id, done) => {
        model.findById(id)
            .then((user) => done(null, user))
            .catch((err) => {
                console.log(err);
                done(err);
            });
    });
}
