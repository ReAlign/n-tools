module.exports = ((_) => {
    _.deepGet = (obj = {}, path = '', { defaVal, deepClone } = { defaVal: '', deepClone: true }) => {
        let _res = (Array.isArray(path)
                    ? path
                    : path.replace(/\[/g, '.').replace(/'|"|\]/g, '').split('.'))
                        .reduce((total, curVal) => (total || {})[curVal], obj);

        if(deepClone) {
            _res = _.deepClone(_res);
        }

        return _res || defaVal;
    };
});