import { expect } from 'chai';
import HashMap from '../../src/OSSL/HashMap'


describe('HashMap', () => {
  let HashMap: HashMap<string, number> = new HashMap<string, number>()

  beforeEach('Before each test', () => {
    HashMap = new HashMap()
  })

  it('A new HashMap', () => {
    expect(HashMap).to.not.be.null
  })

  it('_ is empty', () => {
    expect(HashMap.empty()).to.be.true
  })

  describe('HashMap is empty', () => {

    it('_ has no items', () => {
      expect(HashMap.has('1')).to.be.false
    })

    it('_ can have an item', () => {
      expect(HashMap.put('1', 1)).to.be.eql(1)
      expect(HashMap.empty()).to.be.false
    })

    it('_ throws when trying to use a null value as a key or value', () => {
      expect(() => HashMap.put('1', null)).to.throw(Error, 'NullPointerException')
      expect(() => HashMap.put(null, 1)).to.throw(Error, 'NullPointerException')
    })

    it('_ throws when trying to remove an item that does not exist', () => {
      expect(() => HashMap.remove('1')).to.throw(Error, 'EmptyHashMapException')
    })

    it('_ throws when trying to get an item that does not exists', () => {
      expect(() => HashMap.get('1')).to.throw(Error, 'EmptyHashMapException')
    })

  })

  describe('An non empty HashMap', () => {

    beforeEach('Before each test', () => {
      HashMap.put('1', 1)
    })

    it('_ has at least one element', () => {
      expect(HashMap.size()).to.be.eql(1)
      expect(HashMap.empty()).to.be.false
    })

    it('_ can tell us if it has the element', () => {
      expect(HashMap.has('1')).to.be.true
    })

    it('_ can have another element', () => {
      expect(HashMap.put('2', 2)).to.be.eql(2)
      expect(HashMap.size()).to.be.eql(2)
    })

    it('_ can remove an element using the key', () => {
      expect(HashMap.put('2', 2)).to.be.eql(2)
      expect(HashMap.put('3', 3)).to.be.eql(3)
      expect(HashMap.size()).to.be.eql(3)
      expect(HashMap.remove('2')).to.be.eql(2)
      expect(HashMap.size()).to.be.eql(2)
    })

    it('_ throw when trying to remove an item that does not exists', () => {
      expect(() => HashMap.remove('3')).to.throw(Error, 'NoSuchElementException')
    })

    it('_ throw when trying to remove an item that does not exists', () => {
      expect(() => HashMap.get('3')).to.throw(Error, 'NoSuchElementException')
    })

    it('_ can get an element using the key', () => {
      expect(HashMap.put('2', 2)).to.be.eql(2)
      expect(HashMap.put('3', 3)).to.be.eql(3)
      expect(HashMap.get('2')).to.be.eql(2)
    })

  })

})