const request = require('../utils/request.js')
const linq = require('../lib/linq.min.js').linq

const URI = 'https://app.360kad.com'

class IndexController {
    getHomeLayout () {
        return request.get(`${URI}/ad/get?id=iOS.HomeV2.Layout&_rndev=104042`).then(res => res.data)
    }
    getTopScroll () {
        return request.get(`${URI}/ad/get?id=iOS.Home.BigBanner&_rndev=108097`).then(res => res.data)
    }
    getBannerIcon () {
        return request.get(`${URI}/ad/get?id=iOS.HomeV2.RoundIcon&_rndev=109951`).then(res => res.data)
    }
}

let indexController = new IndexController()
module.exports = {
    controller: indexController,
}