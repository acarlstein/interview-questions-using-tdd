import { Money, Expression } from './Money'
import Pair from './Pair'
import Hashtable from '../OSSL/Hashtable'

export default class CreditUnion {
  
  private rates: Hashtable<Pair, Number> = new Hashtable<Pair, Number>()

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to)
  }

  addRate(from: string, to: string, rate: Number) {
    this.rates.put(new Pair(from, to), rate)
  }

  rate(from: string, to: string) : Number{
    if (from == to) return 1
    const rate : Number = <Number> this.rates.get(new Pair(from, to))
    return rate
  }

}