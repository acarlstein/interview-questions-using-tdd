import { expect } from 'chai';
import Dollar from '../../src/MultiCurrency/Dollar';

describe('MultiCurrency', () => {

  it('Can we perform a multiplication?', () => {
    const five: Dollar = new Dollar(5)
    let product: Dollar = five.times(2)
    expect(product).to.be.eql(new Dollar(10))

    product = five.times(3)
    expect(product).to.be.eql(new Dollar(15))
  })

  it('Can we compare that are equals?', () => {
    expect(new Dollar(5).equals(new Dollar(5))).to.be.true
    expect(new Dollar(5).equals(new Dollar(6))).to.be.false
  })
  

})