module.exports = ((_) => {
    _.merge = (obj1 = {}, obj2 = {}) => {
        const type1 = _.typeOf(obj1);
        const type2 = _.typeOf(obj2);
        // let len;

        if (type1 !== type2) {
            return obj2;
        }

        switch(type2) {
            case 'object':
                for (let i in obj2) {
                    if (obj2.hasOwnProperty(i)) {
                        obj1[i] = _.merge(obj1[i], obj2[i]);
                    }
                }
                break;
            case 'array':
                for (let i = 0, lens = obj2.length; i < lens; i++) {
                    obj1[i] = _.merge(obj1[i], obj2[i]);
                }
                obj1.length = obj2.length;
                break;
            default:
                return obj2;
        }
        return obj1;
    };
});