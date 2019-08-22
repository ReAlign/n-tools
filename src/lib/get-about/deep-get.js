module.exports = ((_) => {
    _.deepGet = (obj = {}, path = '', opts = {}) => {
        const {
            defaVal = '',
            deepClone = true
        } = opts;
        let _res = (Array.isArray(path)
            ? path
            : path.replace(/\[/g, '.').replace(/'|"|\]/g, '').split('.'))
            .reduce((total, curVal) => (total || {})[curVal], obj);

        const isUndefined = _.typeOf(_res) === 'undefined';

        if(!isUndefined && deepClone) {
            _res = _.deepClone(_res);
        }

        return isUndefined ? defaVal : _res;
    };
});