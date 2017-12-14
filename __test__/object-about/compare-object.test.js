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

let od1 = {
    name: {
        first: 'an',
        second: 'liangjun'
    },
    age: {
        real: 23,
        order: 24
    },
    tags: ['boy', 'doubi', 'master'],
    years: {
        one: {
            key: '1994',
            name: 'birth'
        }
    }
};

let od1Copy = {
    name: {
        first: 'an',
        second: 'liangjun'
    },
    age: {
        real: 23,
        order: 24
    },
    tags: ['boy', 'doubi', 'master'],
    years: {
        one: {
            key: '1994',
            name: 'birth'
        }
    }
};

let od2 = {
    name: {
        first: 'an',
        second: 'liangjun'
    },
    age: {
        real: 23,
        order: 24
    },
    tags: ['boy', 'doubi', 'master'],
    years: {
        one: {
            key: '1994',
            name: 'birth'
        },
        two: {
            key: '1995',
            name: 'second birth'
        }
    }
};

test('compareObjectDeep1', function() {
    expect(_tools.compareObject(od1, od2)).toBe(false);
});

test('compareObjectDeep2', function() {
    expect(_tools.compareObject(od1, od1Copy)).toBe(true);
});