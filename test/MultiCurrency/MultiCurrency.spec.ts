import { expect } from 'chai';
import { Money } from '../../src/MultiCurrency/Money';

describe('MultiCurrency', () => {

  describe('Using Dollars', () => {
    it('We can perform a multiplications', () => {
      const five: Money = Money.dollar(5)
      expect(five.times(2).equals(Money.dollar(10))).to.be.true
      expect(five.times(3).equals(Money.dollar(15))).to.be.true
    })
  
    it('We can compare', () => {
      expect(Money.dollar(5).equals(Money.dollar(5))).to.be.true
      expect(Money.dollar(5).equals(Money.dollar(6))).to.be.false
    })  

  })

  describe('Using Francs', () => {
    it('We can perform multiplications', () => {
      let five: Money = Money.franc(5)
      expect(five.times(2).equals(Money.franc(10))).to.be.true
      expect(five.times(3).equals(Money.franc(15))).to.be.true
    })

    it('We can compare', () => {
      expect(Money.franc(5).equals(Money.franc(5))).to.be.true
      expect(Money.franc(5).equals(Money.franc(6))).to.be.false
    })
  })
  
  describe('Using Francs and Dollars', () => {
    it('We can compare', () => {
      expect(Money.franc(5).equals(Money.dollar(5))).to.be.false
    })

    it('We can check for currency', () => {
      expect(Money.dollar(1).currency()).to.be.eql("USD")
      expect(Money.franc(1).currency()).to.be.eql("CHF")
    })

    it('We can check for difference in class equality', () => {
      expect(new Money(10, "CHF").equals(Money.franc(10))).to.be.true
      expect(new Money(10, "USD").equals(Money.dollar(10))).to.be.true
    })
  })
  
})