const _tools = require('./../../index');

let o1 = {
    name: 'realign',
    age: 12
};

let o2 = {
    name: 'realign',
    age: 12
};

let o3 = {
    name: 'realign',
    tag: 'boy',
    age: 12
};

let o4 = {
    name: 'realign'
};

test('compareObjectSimple1', function() {
    expect(_tools.compareObject(1, 1)).toBe(true);
});

test('compareObjectSimple2', function() {
    expect(_tools.compareObject('1', '1')).toBe(true);
});

test('compareObjectSimple3', function() {
    expect(_tools.compareObject('1', 2)).toBe(false);
});

test('compareObjectObject1', function() {
    expect(_tools.compareObject(o1, o2)).toBe(true);
});

test('compareObjectObject2', function() {
    expect(_tools.compareObject(o1, o3)).toBe(false);
});

test('compareObjectObject3', function() {
    expect(_tools.compareObject(o1, o4)).toBe(false);
});