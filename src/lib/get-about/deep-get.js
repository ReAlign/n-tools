module.exports = ((_) => {
    _.deepGet = (obj = {}, path = '', { defaVal, deepClone } = { defaVal: '', deepClone: true }) => {
        let _res = (Array.isArray(path)
                    ? path
                    : path.replace(/\[/g, '.').replace(/'|"|\]/g, '').split('.'))
                        .reduce((total, curVal) => (total || {})[curVal], obj);

        const isUndefined = _.typrOf(_res) === 'undefined';

        if(!isUndefined && deepClone) {
            _res = _.deepClone(_res);
        }

        return isUndefined ? defaVal : _res;
    };
});