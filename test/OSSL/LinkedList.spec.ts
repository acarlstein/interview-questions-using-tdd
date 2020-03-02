import { expect } from 'chai';
import LinkedList from '../../src/OSSL/LinkedList'

describe('LinkedList', () => {
  let linkedList: LinkedList<String>  

  beforeEach('Before each test', ()=> {
    linkedList = new LinkedList<String>()
  })

  it('A new LinkedList', () => {
    expect(linkedList).to.not.be.null
  })

  it('_ is empty', () => {
    expect(linkedList.empty()).to.be.true
  })

  describe('An empty LinkedList', () => {
    it('_ has no items', () => {
      expect(linkedList.size()).to.be.eql(0)
    })

    it('_ can have an item', () => {
      expect(linkedList.add('A')).to.be.eql('A')
      expect(linkedList.empty()).to.be.false
      expect(linkedList.size()).to.be.eql(1)
    })

    it('_ throws when trying to remove an item that does not exist', () => {
      expect(() => linkedList.remove('A')).to.throw(Error, 'EmptyLinkedListException')
    })

  })

  describe('A non empty LinkedList', () => {

    beforeEach('Before each test', () => {
      linkedList.add('A')
    })

    it('_ has at least one element', () => {
      expect(linkedList.size()).to.be.eql(1)
    })

    it('_ can have more than one element in consecutive order', () => {
      linkedList.add('B')
      expect(linkedList.size()).to.be.eql(2)
      expect(linkedList.toArray()).to.be.eql(['A', 'B'])
    })

    it('_ allows to find a value', () => {
      linkedList.add('B')
      linkedList.add('C')
      expect(linkedList.has('B')).to.be.true
    })

    it('_ throws when trying to remove an non-existent element', () => {
      expect(() => linkedList.remove('B')).to.throw(Error, 'NoSuchElementException')
    })

    it('_ allows to remove an element at the end of the list', () => {
      linkedList.add('B')
      linkedList.add('C')
      expect(linkedList.remove('C')).to.be.eql('C')
      expect(linkedList.toArray()).to.be.eql(['A', 'B'])
    })
    
  })

})