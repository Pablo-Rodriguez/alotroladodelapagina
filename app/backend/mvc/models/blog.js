
import Schema from './schemas/blog.js'

export default {
  // Helpers

  more (page=0, limit=0) {
    return Schema.count().then((count) => {
      return ((count - ((page + 1)*limit)) > 0)
    })
  },

  get (page=0, limit=0) {
    return Schema.find()
      .skip(page*limit)
      .limit(limit)
      .sort({date: 'descending'})
  },

  getTag (tag='', page=0, limit=0) {
    return Schema.find()
      .where('tags')
      .in([tag])
      .skip(page*limit)
      .limit(limit)
      .sort({date: 'descending'})
  },

  // End-points
  getPaginated (page=0, limit=10, tag='') {
    page = Number(page)
    limit = Number(limit)
    let articles = !!tag ? this.getTag(tag.split('-').join(' '), page, limit)
      : this.get(page, limit)
    let more = this.more(page, limit)
    return Promise.all([articles, more])
  },

  getOne (title) {
    return Schema.findOne()
      .where('title')
      .equals(title.split('-').join(' '))
  },

  post (model={}) {
    let article = new Schema({
      title: model.title.trim(),
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
