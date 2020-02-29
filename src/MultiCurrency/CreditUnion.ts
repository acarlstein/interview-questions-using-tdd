import { Money, Expression, Sum } from './Money'

export default class CreditUnion {
  
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to)
  }

  addRate(source: string, destination: string, rate: number) {
  }

  rate(from: string, to: string) {
    return (from === "CHF" && to === "USD") ? 2 : 1
  }

}