const _tools = require('./../../index');

test('keepDecimal1', function() {
    expect(_tools.keepDecimal(0.1901)).toEqual(0.19);
});

test('keepDecimal2', function() {
    expect(_tools.keepDecimal(0.1950)).toEqual(0.2);
});

test('keepDecimal3', function() {
    expect(_tools.keepDecimal(0.1949)).toEqual(0.19);
});

test('keepDecimalStr', function() {
    expect(_tools.keepDecimal('alj')).toBe(false);
});

test('keepDecimalNull', function() {
    expect(_tools.keepDecimal(null)).toBe(false);
});

test('formatDigital1', function() {
    expect(_tools.formatDigital(194)).toEqual('194');
});

test('formatDigital2', function() {
    expect(_tools.formatDigital(1949)).toEqual('1,949');
});

test('formatDigital3', function() {
    expect(_tools.formatDigital(10000)).toEqual('1万');
});

test('formatDigital4', function() {
    expect(_tools.formatDigital(10049)).toEqual('1万');
});

test('formatDigital5', function() {
    expect(_tools.formatDigital(10050)).toEqual('1.01万');
});

test('formatDigital5', function() {
    expect(_tools.formatDigital(100500)).toEqual('10.05万');
});

test('formatDigitalStr', function() {
    expect(_tools.formatDigital('alj')).toBe(false);
});

test('formatDigitalNull', function() {
    expect(_tools.formatDigital(null)).toEqual('NaN');
});