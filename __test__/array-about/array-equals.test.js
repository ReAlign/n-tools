const _tools = require('./../../index');

const arr0 = [1, 2, 3, 4, 5];
const arr00 = [1, 2, 3, 4, 6];
const arr1 = [1, 2, 3, 4, 5];
const arr11 = [1, 2, 3, 5, 4];
const arr2 = ['1', 2, 3, 4, 5];
const arr3 = [1, 2, 3];

test('arrayEqualsNormal', function() {
    expect(_tools.arrayEquals(arr0, arr1)).toBe(true);
});

test('arrayEqualsNormal01', function() {
    expect(_tools.arrayEquals(arr0, arr1)).toBe(true);
});

test('arrayEqualsNormal00', function() {
    expect(_tools.arrayEquals(arr0, arr00)).toBe(false);
});

test('arrayEqualsNormal11', function() {
    expect(_tools.arrayEquals(arr0, arr11)).toBe(false);
});

test('arrayEqualsNormal11KeepOrderFalse', function() {
    expect(_tools.arrayEquals(arr0, arr11, {keepOrder: false})).toBe(true);
});

test('arrayEqualsNormal2', function() {
    expect(_tools.arrayEquals(arr0, arr2)).toBe(true);
});

test('arrayEqualsNormal3', function() {
    expect(_tools.arrayEquals(arr0, arr3)).toBe(false);
});

test('arrayEqualsStrictMode', function() {
    expect(_tools.arrayEquals(arr0, arr1, {strictMode: true})).toBe(true);
});

test('arrayEqualsStrictMode2', function() {
    expect(_tools.arrayEquals(arr0, arr2, {strictMode: true})).toBe(false);
});

const arr4 = null;
const arr5 = null;

test('arrayEqualsNull', function() {
    expect(_tools.arrayEquals(arr4, arr5)).toBe(false);
});

const arr6 = [[1], [1, 2]];
const arr7 = [[1], [1, 2]];
const arr8 = [[1], [1, 2, 3]];

test('arrayEqualsNull', function() {
    expect(_tools.arrayEquals(arr4, arr5)).toBe(false);
});

test('arrayEqualsDeep', function() {
    expect(_tools.arrayEquals(arr6, arr7)).toBe(true);
});

test('arrayEqualsDeep2', function() {
    expect(_tools.arrayEquals(arr6, arr8)).toBe(false);
});