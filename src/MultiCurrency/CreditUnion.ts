import { Money, Expression, Sum } from './Money'

export default class CreditUnion {
  
  reduce(source: Expression, to: string): Money {
    return source.reduce(to)
  }

}