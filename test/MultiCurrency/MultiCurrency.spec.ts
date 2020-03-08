import { expect } from 'chai';
import { Money, Expression, Sum } from '../../src/MultiCurrency/Money';
import CreditUnion from '../../src/MultiCurrency/CreditUnion'

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

  describe('Making operations with a Credit Union',  () => {

    it('We can perform additions', () => {
      const five: Money = Money.dollar(5)
      const sum: Expression = five.plus(five)
      const creditUnion: CreditUnion = new CreditUnion()
      const reduced: Money = creditUnion.reduce(sum, "USD")
      expect(reduced.equals(Money.dollar(10))).to.be.true
    })

    it('We woud like to perform additions using a real expression', () => {
      const five: Money = Money.dollar(5)
      const result: Expression = five.plus(five)
      const sum: Sum = <Sum> result
      expect(sum.augend).to.be.eql(five)
      expect(sum.addend).to.be.eql(five)
    })

    it('We would like the Credit Union to be able to perform reductions', () =>{
      const augend: Money = Money.dollar(3)
      const addend: Money = Money.dollar(4)
      const sum: Expression = new Sum(augend, addend)
      const creditUnion: CreditUnion = new CreditUnion()
      const result: Money = creditUnion.reduce(sum, "USD")
      expect(result.equals(Money.dollar(7))).to.be.true
    })

    it('We can reduce the money', () => {
      const creditUnion: CreditUnion = new CreditUnion()
      const result: Money = creditUnion.reduce(Money.dollar(1), "USD")
      expect(result.equals(Money.dollar(1))).to.be.true
    })

    it('We can perform mixed currencies additions ', () => {
      const fiveDollars: Expression = Money.dollar(5)
      const tenFrancs: Expression = Money.franc(10)
      const creditUnion: CreditUnion = new CreditUnion()
      creditUnion.addRate("CHF", "USD", 2)
      const result: Money = creditUnion.reduce(fiveDollars.plus(tenFrancs), "USD")
      expect(result).to.be.eql(Money.dollar(10))
      expect(result.equals(Money.dollar(10))).to.be.true
    })

  })

  describe('We can perform changing operations such as ', () => {

    let creditUnion: CreditUnion

    beforeEach('Before each test', () => {
      creditUnion = new CreditUnion()
    })

    it('_ if rate of itself is 1', () => {
      expect(creditUnion.rate("USD", "USD")).to.be.eql(1)
    })
    
    it('_ reduce money with different currency', () => {
      creditUnion.addRate("CHF", "USD", 2)
      const result: Money = creditUnion.reduce(Money.franc(2), "USD")
      expect(result.equals(Money.dollar(1))).to.be.true
    })
  })
  
  describe('Summation', () => {
    it('_ can do addition', () => {
      const fiveDollars: Expression = Money.dollar(5)
      const tenFrancs: Expression = Money.franc(10)
      const sum: Expression = new Sum(fiveDollars, tenFrancs).plus(fiveDollars)
      const creditUnion: CreditUnion = new CreditUnion()
      creditUnion.addRate("CHF", "USD", 2)
      const result: Money = creditUnion.reduce(sum, "USD")
      expect(result).to.eql(Money.dollar(15))
    })

    it('_ can do multiplication', () => {
      const fiveDollars: Expression = Money.dollar(5)
      const tenFrancs: Expression = Money.franc(10)
      const sum: Expression = new Sum(fiveDollars, tenFrancs).times(2)
      const creditUnion: CreditUnion = new CreditUnion()
      creditUnion.addRate("CHF", "USD", 2)
      const result: Money = creditUnion.reduce(sum, "USD")
      expect(result).to.be.eql(Money.dollar(20))
    })

    it('_ can do addition in the same currency', () => {
      const sum: Expression = Money.dollar(5).plus(Money.dollar(5))
      const creditUnion: CreditUnion = new CreditUnion()
      const result: Money = creditUnion.reduce(sum, "USD")
      expect(result).to.be.eql(Money.dollar(10))
    })

  })
})