module.exports = ((_) => {
    _.arrayEquals = (x, y, options = {}) => {
        if (!x || !y) {
            return false;
        }

        if(x.length != y.length) {
            return false;
        }

        for (let i = 0, len = x.length; i < len; i++) {
            if (x[i] instanceof Array && y[i] instanceof Array) {
                if(!_.arrayEquals(x[i], y[i])) {
                    return false;
                }
            } else {
                if(options.hasOwnProperty('strictMode') && options.strictMode) {
                    if(x[i] !== y[i]) {
                        return false;
                    }
                } else {
                    if(x[i] != y[i]) {
                        return false;
                    }
                }
            }
        }

        return true;
    };
});