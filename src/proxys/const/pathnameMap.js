const ProxyMap = new Map();
ProxyMap.set('/douban/v2/movie/in_theaters', 'http://api.douban.com/v2/movie/in_theaters')
    .set('/douban/v2/movie/top250', 'http://api.douban.com/v2/movie/top250')
    .set('/douban/v2/movie/search', 'http://api.douban.com/v2/movie/search')
    .set('/douban/v2/movie/subject', 'http://api.douban.com/v2/movie/subject')
    .set("/", 'http://api.douban.com/v2/movie/in_theaters');
module.exports = ProxyMap