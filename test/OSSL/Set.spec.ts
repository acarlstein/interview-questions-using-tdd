import { expect } from 'chai';
import Set from '../../src/OSSL/Set'

describe('Set', () => {
  
  let set

  beforeEach('Before each test', () => {
    set = new Set()
  })

  it('A new Set', () => {  
    expect(set).to.not.be.null
  })

  it('_ is empty', () => {
    expect(set.empty()).to.be.true
  })

  describe('An empty stack', () => {

    it('_ has no items', () => {
      expect(set.has(1)).to.be.false
    })

    it('_ can have an item', () => {
      expect(set.add(1)).to.be.eql(1)
      expect(set.empty()).to.be.false
    })

    it('_ throws when trying to remove an item that does not exist', () => {
      expect(() => set.remove(1)).to.throw(Error, 'EmptySetException')
    })

  })

  describe('An non empty stack', () => {

    beforeEach('Before each test', () => {
      set.add(1)
    })

    it('_ has at least one element', () => {
      expect(set.size()).to.be.eql(1)
    })

    it('_ can only have unique items', () => {
      expect(() => set.add(1)).to.throw(Error, 'NoDuplicateAllowedException')
    })

    it('_ can remove an item', () => {
      set.add(2)
      set.add(3)
      expect(set.size()).to.be.eql(3)
      expect(set.remove(2)).to.be.eql(2)
      expect(set.size()).to.be.eql(2)
    })

    it('_ found an item between other items', () => {
      set.add(2)
      set.add(3)
      set.add(4)
      expect(set.has(2)).to.be.true
    })

  })

})