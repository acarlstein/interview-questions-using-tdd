import { expect } from 'chai';
import HashMap from '../../src/OSSL/HashMap'


describe('HashMap', () => {
  let hashMap: HashMap<string, number>

  beforeEach('Before each test', () => {
    hashMap = new HashMap<string, number>()
  })

  it('A new HashMap', () => {
    expect(hashMap).to.not.be.null
  })

  it('_ is empty', () => {
    expect(hashMap.empty()).to.be.true
  })

  describe('HashMap is empty', () => {

    it('_ has no items', () => {
      expect(hashMap.has('1')).to.be.false
    })

    it('_ can have an item', () => {
      expect(hashMap.put('1', 1)).to.be.eql(1)
      expect(hashMap.empty()).to.be.false
    })

    it('_ allows the null values', () => {
      expect(hashMap.put('1', null)).to.be.eql(null)
      expect(hashMap.has('1')).to.be.true
      expect(hashMap.remove('1')).to.be.eql(null)    
    })

    it('_ allows the null value as a key', () => {
      expect(hashMap.put(null, 1)).to.be.eql(1)
      expect(hashMap.has(null)).to.be.true
      expect(hashMap.remove(null)).to.be.eql(1)       
    })

    it('_ replace value when using same key', () => {
      expect(hashMap.put(null, 1)).to.be.eql(1)
     
      let originalSize = hashMap.size()
      expect(hashMap.put(null, 2)).to.be.eql(2)
      expect(hashMap.size()).to.be.eql(originalSize)
     
      expect(hashMap.remove(null)).to.be.eql(2) 
    })

    it('_ throws when trying to remove an item that does not exist', () => {
      expect(() => hashMap.remove('1')).to.throw(Error, 'EmptyHashMapException')
    })

    it('_ throws when trying to get an item that does not exists', () => {
      expect(() => hashMap.get('1')).to.throw(Error, 'EmptyHashMapException')
    })

  })

  describe('An non empty HashMap', () => {

    beforeEach('Before each test', () => {
      hashMap.put('1', 1)
    })

    it('_ has at least one element', () => {
      expect(hashMap.size()).to.be.eql(1)
      expect(hashMap.empty()).to.be.false
    })

    it('_ can tell us if it has the element', () => {
      expect(hashMap.has('1')).to.be.true
    })

    it('_ can have another element', () => {
      expect(hashMap.put('2', 2)).to.be.eql(2)
      expect(hashMap.size()).to.be.eql(2)
    })

    it('_ can remove an element using the key', () => {
      expect(hashMap.put('2', 2)).to.be.eql(2)
      expect(hashMap.put('3', 3)).to.be.eql(3)
      expect(hashMap.size()).to.be.eql(3)
      expect(hashMap.remove('2')).to.be.eql(2)
      expect(hashMap.size()).to.be.eql(2)
    })

    it('_ throw when trying to remove an item that does not exists', () => {
      expect(() => hashMap.remove('3')).to.throw(Error, 'NoSuchElementException')
    })

    it('_ throw when trying to remove an item that does not exists', () => {
      expect(() => hashMap.get('3')).to.throw(Error, 'NoSuchElementException')
    })

    it('_ can get an element using the key', () => {
      expect(hashMap.put('2', 2)).to.be.eql(2)
      expect(hashMap.put('3', 3)).to.be.eql(3)
      expect(hashMap.get('2')).to.be.eql(2)
    })

  })

})