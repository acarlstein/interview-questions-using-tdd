import { expect } from 'chai';
import Dollar from '../../src/MultiCurrency/Dollar';

describe('MultiCurrency', () => {

  it('Can we perform a multiplication', () => {
    const five: Dollar = new Dollar(5)
    let product: Dollar = five.times(2)
    expect(product.amount).to.be.eql(10)

    product = five.times(3)
    expect(product.amount).to.be.eql(15)
  })

})