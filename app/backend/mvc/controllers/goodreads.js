
import request from 'request';
import xml2js from 'xml2js';
import util from '../../util.js';

let KEY = 'bAhSponNBxgzg41oDZ1rg';

export default class goodreads {
    constructor (rex) {
        rex.get('/last-readings', this.lastReadings);
    }

    lastReadings (req, res) {
        let url = 'https://www.goodreads.com/review/list.xml';
        let params = {
            v: 2,
            shelf: 'read',
            sort: 'date_read',
            order: 'd',
            id: '51343598',
            page: 1,
            per_page: 5,
            key: KEY
        };

        url = util.addQuerysToUrl(url, params);
        new Promise((resolve, reject) => {
            request(url, (err, res, body) => {
                resolve(body);
            });
        }).then(util.xmlToJSON).then((json) => {
            return json.GoodreadsResponse.reviews[0].review;
        }).then((reviews) => {
            return reviews.map((review) => {
                return {
                    title: review.book[0].title[0],
                    author: review.book[0].authors[0].author[0].name[0],
                    image: review.book[0].image_url[0],
                    stars: review.rating[0],
                    review: review.body[0],
                    link: review.book[0].link[0]
                }
            });
        }).then((json) => res.json(json));
    }
}
