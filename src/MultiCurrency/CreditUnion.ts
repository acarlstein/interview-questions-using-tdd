import { Money, Expression } from './Money'
import Pair from './Pair'
import Hashtable from '../OSSL/Hashtable'

export default class CreditUnion {
  
  private rates: Hashtable<Pair, number> = new Hashtable<Pair, number>()

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to)
  }

  addRate(from: string, to: string, rate: number) {
    this.rates.put(new Pair(from, to), rate)
  }

  rate(from: string, to: string) : number{
    if (from == to) return 1
    const rate : number = <number> this.rates.get(new Pair(from, to))
    return rate
  }

}