import { expect } from 'chai';
import Dollar from '../../src/MultiCurrency/Dollar';
import Franc from '../../src/MultiCurrency/Franc';

describe('MultiCurrency', () => {

  describe('Using Dollars', () => {
    it('We can perform a multiplications', () => {
      const five: Dollar = new Dollar(5)
      let product: Dollar = five.times(2)
      expect(product).to.be.eql(new Dollar(10))
  
      product = five.times(3)
      expect(product).to.be.eql(new Dollar(15))
    })
  
    it('We can compare', () => {
      expect(new Dollar(5).equals(new Dollar(5))).to.be.true
      expect(new Dollar(5).equals(new Dollar(6))).to.be.false
    })  
  })

  describe('Using Francs', () => {
    it('We can perform multiplications', () => {
      let five: Franc = new Franc(5)
      expect(five.times(2)).to.be.eql(new Franc(10))
      expect(five.times(3)).to.be.eql(new Franc(15))
    })

    it('We can compare', () => {
      expect(new Franc(5).equals(new Franc(5))).to.be.true
      expect(new Franc(5).equals(new Franc(6))).to.be.false
    })
  })
  
  describe('Using Francs and Dollars', () => {
    it('We can compare', () => {
      expect(new Franc(5).equals(new Dollar(5))).to.be.false
    })
  })
})