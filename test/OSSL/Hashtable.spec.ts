import { expect } from 'chai';
import Hashtable from '../../src/OSSL/Hashtable'

describe('Hashtable', () => {

  it('A new Hashtable', () => {
    const hashtable: Hashtable = new Hashtable()
    expect(hashtable).to.not.be.null
  })

})