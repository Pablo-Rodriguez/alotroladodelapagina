
import slugify from 'slugify'

import Schema from './schemas/blog.js'

export default {
  // Helpers

  more (page = 0, limit = 0, tag) {
    let query = Schema.find()
    query = tag != null ? query.where('tags').in([tag]) : query
    return query.count().then((count) => {
      return ((count - ((page + 1) * limit)) > 0)
    })
  },

  get (page = 0, limit = 0, tag) {
    let query = Schema.find()
    query = tag != null ? query.where('tags').in([tag]) : query
    return query
      .skip(page*limit)
      .limit(limit)
      .sort({date: 'descending'})
  },

  // End-points
  getPaginated (page = 0, limit = 3, tag) {
    page = Number(page)
    limit = Number(limit)
    if (tag === '') {
      tag = null
    }
    let posts = this.get(page, limit, tag)
    let more = this.more(page, limit, tag)
    return Promise.all([posts, more])
  },

  getOne (slug) {
    return Schema.findOne()
      .where('slug')
      .equals(slug)
  },

  post (model = {}) {
    let article = new Schema({
      title: model.title.trim(),
      slug: slugify(model.title.trim(), {remove: /[^\w\s_\-]/g}),
      body: model.body,
      tags: model.tags.trim().split(',').map((tag) => tag.trim())
    })

    return article.save()
  },

  put () {},

  delete (id='') {
    return Schema.findById(String(id)).then((model) => model.remove())
  }

}
