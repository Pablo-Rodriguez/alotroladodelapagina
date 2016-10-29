
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let user = new Schema({
    name: {
        type: String,
        unique: true
    },
    password: String,
    admin: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('User', user);
