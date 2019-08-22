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

var cObj = {
    g: 'alj'
};

test('deepGet1', function() {
    expect(_tools.deepGet(obj, 'e.f[0].g')).toEqual('alj');
});

test('deepGet2', function() {
    expect(_tools.deepGet(obj, 'e.f[1].g')).toEqual('kakaka');
});

test('deepGet3', function() {
    expect(_tools.deepGet(obj, 'e.f[2].g', {defaVal: ''})).toEqual(undefined);
});

test('deepGet4', function() {
    expect(_tools.deepGet(obj, 'e.f[3].g')).toEqual(undefined);
});

test('deepGet5', function() {
    expect(_tools.deepGet(obj, 'e.f[0]')).toEqual(cObj);
});