const _tools = require('./../../index');

test('debounce1', function() {
    expect(() => {
        let a = () => {
            let vals = 0;
            let _count = 0;

            let _s = (val, c) => {
                setTimeout((val) => {
                    val++;
                    c++;
                    if(c < 4) {
                        _s(val);
                    } else {
                        return val;
                    }
                }, 100);
            };

            _s(vals, _count);
        };

        return _tools.debounce(a, 500);
    }).toEqual(300);
});