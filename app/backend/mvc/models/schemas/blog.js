
import mongoose from 'mongoose'

const Schema = mongoose.Schema

let blog = new Schema({
  title: {
    type: String
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  body: String,
  tags: [String],
  date: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Blog', blog)
