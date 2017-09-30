const getFib = require('../index').getFibonacci;

const expect = require('chai').expect;

describe('Should test if we get the correct value', () => {
  it('Should return value for the 0 index', () => {
    const expected = [0, [0]];
    const results  = getFib(0);
    expect(results).to.deep.equal(expected)
  });

  it('Should return value for the 1st index', () => {
    const expected = [1, [0, 1]];
    const results  = getFib(1);
    expect(results).to.deep.equal(expected)
  });

  it('Should return value for the 10th index', () => {
    const expected = [55, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]];
    const results  = getFib(10);
    expect(results).to.deep.equal(expected)
  });

  it('Should return infinity if requested index is over 1476', () => {
    const expected = [Infinity];
    const results  = getFib(1477);
    expect(results[0]).to.deep.equal(expected[0])
  });

  it('Should return empty array if no value is requested', () => {
    const expected = [];
    const results  = getFib();
    expect(results).to.deep.equal(expected)
  });

  it('Should return empty array if string is passed in', () => {
    const expected = [];
    const results  = getFib('10');
    expect(results).to.deep.equal(expected)
  });

  it('Should return empty array if null is passed in', () => {
    const expected = [];
    const results  = getFib(null);
    expect(results).to.deep.equal(expected)
  });

  it('Should return empty array if NAN is passed in', () => {
    const expected = [];
    const results  = getFib(NaN);
    expect(results).to.deep.equal(expected)
  });

  it('Should return empty array if float is passed in', () => {
    const expected = [];
    const results  = getFib(1.3);
    expect(results).to.deep.equal(expected)
  });

});
