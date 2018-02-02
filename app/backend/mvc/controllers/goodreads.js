
import request from 'request'
import xml2js from 'xml2js'
import util from '../../util.js'

let KEY = process.env.GOODREADS_KEY || ''

export default class goodreads {
  constructor (rex) {
    rex.get('/api/last-readings', this.lastReadings.bind(this))
  }

  lastReadings (req, res) {
    let url = 'https://www.goodreads.com/review/list.xml'
    let params = {
      v: 2,
      shelf: 'read',
      sort: 'date_read',
      order: 'd',
      id: '51343598',
      page: 1,
      per_page: 5,
      key: KEY
    }

    url = util.addQuerysToUrl(url, params)
    new Promise((resolve, reject) => {
      request(url, (err, res, body) => {
        resolve(body)
      })
    }).then(util.xmlToJSON).then((json) => {
      return json.GoodreadsResponse.reviews[0].review
    }).then((reviews) => {
      return reviews.map((review) => {
        return {
          title: review.book[0].title[0],
          author: review.book[0].authors[0].author[0].name[0],
          image: this.parseImage(review.book[0].image_url[0]),
          stars: review.rating[0],
          review: review.body[0],
          link: review.book[0].link[0]
        }
      })
    }).then((json) => res.json(json))
    .catch((err) => {
      res.json([])
    })
  }

  parseImage (url) {
    try {
      let arr = url.split('/')
      let pos = arr.length - 2
      let change = arr[pos]
      change = change.slice(0, change.length - 1)
      change += 'l'
      arr[pos] = change
      return arr.join('/')
    } catch (e) {
      console.log(e)
      return url
    }
  }
}
