import { expect } from 'chai';
import Stack from '../../src/stack/Stack'

describe('Stack', () => {

  let stack

  beforeEach('Stack test', () => {
    stack = new Stack()
  })

  it('A new stack', () => {
    expect(stack).to.not.be.null
  })

  it('_ is empty', () => {
    expect(stack.empty()).to.be.true
  })

  describe('An empty stack', () => {
    it('throws when queried for its top item', () => {
      expect(() => stack.peek()).to.throw(Error, 'EmptyStackException')
    })

    it('throws when popped', () => {
      expect(() => stack.pop()).to.throw(Error, 'EmptyStackException')
    })

    it('acquires no depth', () => {
      expect(stack.size()).to.eql(0)
    })
  })

  describe('A non empty stack', () => {

    it ('becomes deeper by retaining a pushed item as it tops', () => {
      stack.push(1)
      expect(stack.size()).to.eql(1)
    })

    it ('becomes deeper and we can peek its top', () => {
      stack.push(1)
      expect(stack.peek()).to.eql(1)
    })

    it('on popping revelas tops in reverse order of pushing', () => {
      stack.push(1)
      stack.push(2)
      expect(stack.pop()).to.eql(2)
      expect(stack.pop()).to.eql(1)
    })

  })

});