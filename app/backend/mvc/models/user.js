
import bcrypt from 'bcryptjs';

import Schema from './schemas/user.js';

export default {
    // helpers
    hash (password) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                if (err) {reject(err);}
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {reject(err);}
                    resolve(hash);
                });
            });
        });
    },

    findById (id) {
        return Schema.findById(String(id));
    },

    findByName (name) {
        return Schema.findOne().where('name').equals(name);
    },

    // end points
    get () {
        return Schema.find();
    },

    post (body) {
        return this.hash(body.password)
            .then((hash) => {
                let model = new Schema({
                    name: body.name,
                    password: hash,
                    admin: body.admin
                });
                return model.save();
            })
    },

    delete (id='') {
        return Schema.findById(String(id)).then((model) => model.remove());
    }

}
