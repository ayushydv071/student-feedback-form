const { test } = require('node:test');
const assert = require('node:assert/strict');
const { isNietEmail } = require('../validation.js');

test('accepts a valid NIET student email', () => {
    assert.equal(isNietEmail('student@niet.co.in'), true);
});

test('accepts NIET email addresses case-insensitively', () => {
    assert.equal(isNietEmail('STUDENT@NIET.CO.IN'), true);
});

test('rejects a Gmail address', () => {
    assert.equal(isNietEmail('student@gmail.com'), false);
});

test('rejects a Yahoo address', () => {
    assert.equal(isNietEmail('student@yahoo.com'), false);
});

test('rejects a different NIET domain', () => {
    assert.equal(isNietEmail('student@niet.ac.in'), false);
});

test('rejects an address with extra text after the domain', () => {
    assert.equal(isNietEmail('student@niet.co.in.fake'), false);
});

test('rejects an invalid email', () => {
    assert.equal(isNietEmail('invalid email'), false);
});
