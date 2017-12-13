const _tools = require('./../../index');

var obj = {
    a: [
        {
            b: {
                c: 3
            }
        }
    ],
    e: {
        f: [
            {
                g: 'alj'
            },
            {
                g: 'kakaka'
            }
        ]
    }
};

test('deepGet1', function() {
    expect(_tools.deepGet(obj, 'e.f[0].g')).toEqual('alj');
});

test('deepGet2', function() {
    expect(_tools.deepGet(obj, 'e.f[1].g')).toEqual('kakaka');
});

test('deepGet3', function() {
    expect(_tools.deepGet(obj, 'e.f[2].g', '')).toEqual('');
});

test('deepGet4', function() {
    expect(_tools.deepGet(obj, 'e.f[3].g')).toEqual('');
});