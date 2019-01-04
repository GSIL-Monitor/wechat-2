const Promise = require('../lib/promise.min.js').Promise

class Request {
    getApi (url, params) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: `${url}`,
                data: Object.assign({}, params),
                header: { 'Content-Type': 'application/json'},
                success: resolve,
                fail: reject
            })
        })
    }
}

let request = new Request();

module.exports = {
    get: request.getApi
}