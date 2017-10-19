module.exports = (function (_) {
    _.keepDecimal = (num = 0, prec = 2) => {
        num = parseFloat(num);
        if (isNaN(num) || isNaN(prec)) {
            console.error('Parameter is not digital, please check it!');
            return false;
        }
        // toFixed() 保证精度
        return Math.round((num * Math.pow(10, prec)).toFixed(prec)) / Math.pow(10, prec);
    },

    _.formatDigital = (val = 0) => {
        if (isNaN(val)) {
            console.error('Parameter is not digital, please check it!');
            return false;
        }

        return val >= 10000 ? `${ct.keepDecimal(val / 10000)}万` : parseInt(val).toLocaleString();
    }
});