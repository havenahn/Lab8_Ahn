// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//test1 phone number validatiom
test('Phone number 1: Valid', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('Phone number 2: Valid', () => {
    expect(functions.isPhoneNumber('111-222-3333')).toBe(true);
});
test('Phone number 3: Invalid', () => {
    expect(functions.isPhoneNumber('1a1-22b-cd33')).toBe(false);
});
test('Phone number 4: Invalid', () => {
    expect(functions.isPhoneNumber('1112223333')).toBe(false);
});

//test 2 email validation
test('Email 1: Valid', () => {
    expect(functions.isEmail('havenahn@gmail.com')).toBe(true);
});
test('Email 2: Valid', () => {
    expect(functions.isEmail('zahn@ucsd.edu')).toBe(true);
});
test('Email 3: Invalid', () => {
    expect(functions.isEmail('havenahn')).toBe(false);
});
test('Email 4: Invalid', () => {
    expect(functions.isEmail('havenahn@gmailcom')).toBe(false);
});

//test3 strongpassword validatiom
test('Password 1: Strong', () => {
    expect(functions.isStrongPassword('a_bcD123')).toBe(true);
});
test('Password 2: Strong', () => {
    expect(functions.isStrongPassword('ABCD_EFGHI')).toBe(true);
});
test('Password 3: Weak', () => {
    expect(functions.isStrongPassword('1abcde')).toBe(false);
});
test('Password 4: Weak', () => {
    expect(functions.isStrongPassword('passwordlongerthanfifteenletters')).toBe(false);
});

//test 4 date validation
test('Date 1: Valid', () => {
    expect(functions.isDate('10/23/1999')).toBe(true);
});
test('Date 2: Valid', () => {
    expect(functions.isDate('6/3/2010')).toBe(true);
});
test('Date 3: Invalid', () => {
    expect(functions.isDate('10/1999')).toBe(false);
});
test('Date 4: Invalid', () => {
    expect(functions.isDate('6/3/10')).toBe(false);
});

//test 5 hexvalidation
test('Hex 1: Valid', () => {
    expect(functions.isHexColor('#ffffff')).toBe(true);
});
test('Hex 2: Valid', () => {
    expect(functions.isHexColor('#076')).toBe(true);
});
test('Hex 3: Invalid', () => {
    expect(functions.isHexColor('#ggg')).toBe(false);
});
test('Hex 3: Invalid', () => {
    expect(functions.isHexColor('#f0293')).toBe(false);
});