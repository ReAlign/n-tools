module.exports = ((_) => {
    _.arrayEquals = (x, y, { strictMode, keepOrder } = { strictMode: false, keepOrder: true }) => {
        if (!x || !y) {
            return false;
        }

        if(x.length != y.length) {
            return false;
        }

        let _x = _.deepClone(x);
        let _y = _.deepClone(y);

        // 内容
        if(!keepOrder) {
            _x.sort();
            _y.sort();
        }

        for (let i = 0, len = _x.length; i < len; i++) {
            if (_x[i] instanceof Array && _y[i] instanceof Array) {
                /*eslint-disable*/
                if(!_.arrayEquals(_x[i], _y[i], { strictMode: strictMode, keepOrder: keepOrder })) {
                    return false;
                }
                /*eslint-enable*/
            } else {
                if(strictMode) {
                    if(_x[i] !== _y[i]) {
                        return false;
                    }
                } else {
                    if(_x[i] != _y[i]) {
                        return false;
                    }
                }
            }
        }

        return true;
    };
});