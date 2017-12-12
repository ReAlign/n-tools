const _tools = require('./../../index');

let o1 = {
    name: 'realign'
};

let o2 = {
    age: 12
};

let o3 = {
    name: 'realign',
    age: 12
};

let o4 = {
    tag: 'boy',
    age: 12
};

let o5 = {
    name: 'realign',
    tag: 'boy',
    age: 12
};

test('merge1', function() {
    expect(_tools.merge(o1, o2)).toEqual(o3);
});

test('merge1', function() {
    expect(_tools.merge(o1, o4)).toEqual(o5);
});