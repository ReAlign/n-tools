module.exports = ((_) => {
    _.deepGet = (obj = {}, path = '', defaVal = '') =>
        (Array.isArray(path)
            ? path
            : path.replace(/\[/g, '.').replace(/\]/g, '').split('.'))
            .reduce((o, k) => (o || {})[k], obj) || defaVal;

});