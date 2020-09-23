
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

const highestOccurrence = require('./exercise');

describe('highestOccurrence', () => {

  it('should return the correct value', () => {
    expect(highestOccurrence([2, 3, 2, 3, 2, 3, 4])).to.eql([2, 3]);
  })
  it('should return an array when there is more than one highest occuring element', () => {
    expect(highestOccurrence([2, 3, 2, 3, 2, 3, 4])).to.eql([2, 3]);
  })
  it('should work on an array of strings as well', () => {
    expect(highestOccurrence(['a', 'b', 'c', 'a', 'a', 'a', 'a'])).to.eql(['a']);
  })
  it('should work on an array of strings & numbers', () => {
    expect(highestOccurrence(['a', 'a', 2, 2, 2, 'a', 4])).to.eql([2, 'a']);
  })

});

