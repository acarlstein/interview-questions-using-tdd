import { expect } from 'chai';
import Hashtable from '../../src/OSSL/Hashtable'
import { hashCode } from '../../src/OSSL/Hashtable'

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

    it('_ can remove an element using the key', () => {
      expect(hashtable.put('2', 2)).to.be.eql(2)
      expect(hashtable.put('3', 3)).to.be.eql(3)
      expect(hashtable.size()).to.be.eql(3)
      expect(hashtable.remove('2')).to.be.eql(2)
      expect(hashtable.size()).to.be.eql(2)
    })

    it('_ throw when trying to remove an item that does not exists', () => {
      expect(() => hashtable.remove('3')).to.throw(Error, 'NoSuchElementException')
    })

  })

  describe('Hashing', () => {

    it('_ can be used to obtain a positive index', () => {
      let bucket: number = 16

      let str: string = "123"      
      expect(hashCode(str) % bucket).to.be.greaterThan(-1)

      let value: number = 123
      expect(hashCode(value) % bucket).to.be.greaterThan(-1)
      
      let object: Object = {"abc": "123"}
      expect(hashCode(object) % bucket).to.be.greaterThan(-1)
    })

    it('_ we get a hash number from a string', () => {
      let str: string = "ABC"
      expect(hashCode(str)).to.be.greaterThan(-1)
      expect(hashCode(str)).to.be.eql(33401666)
    })

    it('_ we get a hash number from a number', () => {
      let value: number = 123
      expect(hashCode(value)).to.be.greaterThan(-1)
      expect(hashCode(value)).to.be.eql(48690)
    })

    it('_ we get a hash number from an object', () => {
      let object: Object = {"abc": "123"}
      expect(hashCode(object)).to.be.greaterThan(-1)
      expect(hashCode(object)).to.be.eql(391630146)
    })

  })

  describe('Can perform synchronize operations', () => {

  })

})