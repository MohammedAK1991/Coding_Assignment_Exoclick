
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

const {highestOccurrence, maxSubarraySum} = require('./exercise');

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

describe('maxSubArraySum', () => {
  it('should return the correct value', () => {
    expect(maxSubarraySum([1,2,5,2,8,1,5], 4)).to.eql(17);
  })
  it('should return the correct value', () => {
    expect(maxSubarraySum([1,2,5,2,8,1,5], 2)).to.eql(10);
  })
  it('should return the highest element in an array if the value of num is 1', () => {
    expect(maxSubarraySum([4,2,1,6], 1)).to.eql(6);
  })
  it('should return null if the array is empty', () => {
    expect(maxSubarraySum([],4)).to.eql(null);
  })
});

