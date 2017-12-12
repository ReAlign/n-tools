module.exports = ((_) => {
    _.extend = (o1 = {}, o2 = {}, override = false) => {
        const _keys = Object.keys(o2) || [];

        _keys.forEach((k) => {
            if (o1[k] == undefined || override) {
                o1[k] = o2[k];
            }
        });

        return o1;
    };
});