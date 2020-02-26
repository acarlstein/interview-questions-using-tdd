import { expect } from 'chai';
import { countValleys } from '../../src/Problems/CountingValleys'
describe('Counting Valleys', () => {

  it('We have a function that we will use to obtain the slope.', () => {
    expect(typeof(countValleys)).to.be.equals('function')
  })
  
  it('The user is at sea level; therefore, there is no slope', () => {
    expect(countValleys('')).to.be.eql(0)
  })

  it('The user starts going down one step and stays there', () => {
    expect(countValleys('D')).to.be.eql(0)
  })

  it('The user goes up one step and ends at sea level, we did once valley', () => {
    expect(countValleys('DU')).to.be.eql(1)
  })

  it('The user goes deeper, cross a bump, and then returns at sea level, still only doing one valley', () => {
    expect(countValleys('DDUDUU')).to.be.eql(1)
  })

  it('The user goes up above sea level, onto the mountain and stays there, no a valley', () => {
    expect(countValleys('U')).to.be.eql(0)
  })

  it('The user thinks that went into a valley inside the mountain but its not a valley because is above the sea level', () => {
    expect(countValleys('UUDU')).to.be.eql(0)
  })

  it('The user when onto a mountain and return to sea level, no valleys encounted', () => {
    expect(countValleys('UUDD')).to.be.eql(0)
  })

  it('The user when for a walk and found a valley', () => {
    expect(countValleys('UDDDUDUU')).to.be.eql(1)
  })

  it ('The user when for a walk, again, and found a valley', () => {
    expect(countValleys('DDUUUUDD')).to.be.eql(1)
  })

  it('The user when for a walk and found a valley and found two valleys', () => {
    expect(countValleys('UDDDUDUUDDUUUUDD')).to.be.eql(2)
  })

})