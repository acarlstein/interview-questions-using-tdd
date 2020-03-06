import { expect } from 'chai';
import { hashCode } from '../../src/OSSL/hashCode'

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