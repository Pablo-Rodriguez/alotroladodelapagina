
import {parseString} from 'xml2js';

export default {
    addQuerysToUrl: function (url, params) {
        url += '?';
        for (let name in params) {
            url += `${name}=${params[name]}&`
        }
        return url;
    },
    xmlToJSON: function (xml) {
        return new Promise((resolve, reject) => {
            parseString(xml, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    error: function (res, msg) {
        return function (err) {
            console.log(err);
            res.json({
                err: true,
                msg
            });
        }
    }
}
