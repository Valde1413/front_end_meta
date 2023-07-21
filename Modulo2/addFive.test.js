const {default: TestRunner} = require('jest-runner'); 
const addfive = require('./addFive');
const { test } = require('node:test');

test('returns the number plus 5', () => {
    expect(addfive(1)).toBe(6);
    });

