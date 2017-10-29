module.exports = (function (_) {
    _.deepGet = (obj = {}, path = '', defaVal = '') => {
        return (!Array.isArray(path)
                ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
                : path)
                .reduce((o, k) => (o || {})[k], obj) || defaVal;
    }
});