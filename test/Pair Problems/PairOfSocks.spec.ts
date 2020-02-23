import { expect } from 'chai';
import { getPairOfSocks } from '../../src/Pair Problems/PairOfSocks'

describe('Pair of Socks', () => {

  it('We have a function tell us how many the pair of socks is in a pile', () => {
    expect(typeof(getPairOfSocks)).to.be.equals('function')
  })

  describe('In an empty pile of socks', () => {

    it ('_ no pair was found', () => {
      let pileOfSocks : Array<number> = []
      expect(getPairOfSocks(pileOfSocks)).to.eql(0)      
    })

  })

  describe('In an non-empty pile of socks', () => {
    
    it('_ we cannot find a pair if there is only one sock', () => {
      expect(getPairOfSocks([1])).to.eql(0)
    })

    it('_ we cannot find a pair of socks', () => {
      expect(getPairOfSocks([1,2])).to.eql(0)
    })

  })

})