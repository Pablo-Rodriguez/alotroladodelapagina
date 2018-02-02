
import model from '../models/blog.js'
import util from '../../util.js'
import errorMsg from '../../errors.js'

export default class home {
  constructor (rex) {
    rex.get('/api/posts', this.get)
    rex.get('/api/posts/:title', this.getOne)
    rex.post('/api/posts', 'auth', this.post)
    rex.put('/api/posts', 'auth', this.put)
    rex.delete('/api/posts', 'auth', this.delete)
  }

  get (req, res) {
    model.getPaginated(req.query.page, req.query.limit, req.query.tag)
      .then((promises) => res.json({err: false, posts: promises[0], more: promises[1]}))
      .catch(util.error(res, errorMsg.blog.get))
  }

  getOne (req, res) {
    model.getOne(req.params.title)
      .then((article) => res.json({err: false, article}))
      .catch(util.error(res, errorMsg.blog.getOne))
  }

  post (req, res) {
    model.post(req.body)
      .then(() => res.json({err: false}))
      .catch((err) => {
        if (err.code === 11000) {
          res.json({err: true, msg: errorMsg.blog.existed})
        } else {
          console.log(err)
          res.json({err: true, msg: errorMsg.blog.post})
        }
      })
  }

  put (req, res) {}

  delete (req, res) {
    model.delete(req.query.id)
      .then(() => res.json({err: false}))
      .catch(util.error(res, errorMsg.blog.delete))
  }

}
