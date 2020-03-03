import { expect } from 'chai';
import Hashtable from '../../src/OSSL/Hashtable'
import { hash } from '../../src/OSSL/Hashtable'

describe('Hashtable', () => {
  let hashtable: Hashtable<string, number> = new Hashtable<string, number>()

  beforeEach('Before each test', () => {
    hashtable = new Hashtable()
  })

  it('A new Hashtable', () => {
    expect(hashtable).to.not.be.null
  })

  it('_ is empty', () => {
    expect(hashtable.empty()).to.be.true
  })

  describe('Hashtable is empty', () => {

    it('_ has no items', () => {
      expect(hashtable.has('1')).to.be.false
    })

    it('_ can have an item', () => {
      expect(hashtable.put('1', 1)).to.be.eql(1)
      expect(hashtable.empty()).to.be.false
    })

    it('_ throws when trying to use a null value as a key or value', () => {
      expect(() => hashtable.put('1', null)).to.throw(Error, 'NullPointerException')
      expect(() => hashtable.put(null, 1)).to.throw(Error, 'NullPointerException')
    })

    it('_ throws when trying to remove an item that does not exist', () => {
      expect(() => hashtable.remove('1')).to.throw(Error, 'EmptyHashtableException')
    })

  })

  describe('An non empty Hashtable', () => {

    beforeEach('Before each test', () => {
      hashtable.put('1', 1)
    })

    it('_ has at least one element', () => {
      expect(hashtable.size()).to.be.eql(1)
      expect(hashtable.empty()).to.be.false
    })

    it('_ can tell us if it has the element', () => {
      expect(hashtable.has('1')).to.be.true
    })

    it('_ can have another element', () => {
      expect(hashtable.put('2', 2)).to.be.eql(2)
      expect(hashtable.size()).to.be.eql(2)
    })

  })

  describe('Hashing', () => {
    it('_ we get a hash number from a string', () => {
      let str: string = "ABC"
      expect(hash(str)).to.be.greaterThan(0)
      expect(hash(str)).to.be.eql(1035451646)
    })

    it('_ we get a hash number from a number', () => {
      let value: number = 123
      expect(hash(value)).to.be.greaterThan(0)
      expect(hash(value)).to.be.eql(1509390)
    })

    it('_ we get a hash number from an object', () => {
      let object: Object = {"abc": "123"}
      expect(hash(object)).to.be.greaterThan(0)
      expect(hash(object)).to.be.eql(3.032686323213873e+21)
    })

  })

  describe('Can perform synchronize operations', () => {

  })

})