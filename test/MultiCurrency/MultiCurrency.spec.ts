import { expect } from 'chai';
import { Money, Dollar, Franc } from '../../src/MultiCurrency/Money';

describe('MultiCurrency', () => {

  describe('Using Dollars', () => {
    it('We can perform a multiplications', () => {
      const five: Money = Money.Dollar(5)
      expect(five.times(2).equals(Money.Dollar(10))).to.be.true
      expect(five.times(3).equals(Money.Dollar(15))).to.be.true
    })
  
    it('We can compare', () => {
      expect(Money.Dollar(5).equals(Money.Dollar(5))).to.be.true
      expect(Money.Dollar(5).equals(Money.Dollar(6))).to.be.false
    })  
  })

  describe('Using Francs', () => {
    it('We can perform multiplications', () => {
      let five: Franc = Money.Franc(5)
      expect(five.times(2).equals(Money.Franc(10))).to.be.true
      expect(five.times(3).equals(Money.Franc(15))).to.be.true
    })

    it('We can compare', () => {
      expect(Money.Franc(5).equals(Money.Franc(5))).to.be.true
      expect(Money.Franc(5).equals(Money.Franc(6))).to.be.false
    })
  })
  
  describe('Using Francs and Dollars', () => {
    it('We can compare', () => {
      expect(Money.Franc(5).equals(Money.Dollar(5))).to.be.false
    })

    it('We can check for currency', () => {
      expect(Money.Dollar(1).currency()).to.be.eql("USD")
      expect(Money.Franc(1).currency()).to.be.eql("CHF")
    })

    it('We can check for difference in class equality', () => {
      expect(new Money(10, "CHF").equals(new Franc(10, "CHF"))).to.be.true
      expect(new Money(10, "USD").equals(new Dollar(10, "USD"))).to.be.true
    })
  })
  
})