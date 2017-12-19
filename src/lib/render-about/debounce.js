/**
 * 空闲控制函数， fn仅执行一次
 * @param func{Function}     传入的函数
 * @param wait{Number}       时间间隔
 * @param immediate{Object}  如果想忽略开始边界上的调用则传入 {leading:false},
 *                           如果想忽略结束边界上的调用则传入 {trailing:false},
 * @returns {Function}       返回调用函数
 */

module.exports = ((_) => {
    _.debounce = function(func, wait, immediate) {
        let timeout, args, context, timestamp, result;

        let now = () => new Date().getTime();

        let later = () => {
            let last = now() - timestamp;
            if (last < wait && last > 0) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    if(!timeout) {
                        context = args = null;
                    }
                }
            }
        };

        return (...args) => {
            context = this;
            timestamp = now();
            let callNow = immediate && !timeout;
            if(!timeout) {
                timeout = setTimeout(later, wait);
            }

            if(callNow) {
                result = func.apply(context, args);
                context = args = null;
            }
            return result;
        };
    };
});