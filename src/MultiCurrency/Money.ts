import CreditUnion from './CreditUnion'
export interface Expression {
  reduce(creditUnion: CreditUnion, to: string): Money
}

export class Money implements Expression{
  public amount: number
  protected _currency: string

  constructor(amount: number, currency: string){
    this.amount = amount
    this._currency = currency
  }

  static dollar(amount: number) : Money {
    return new Money(amount, "USD")
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF")
  }

  getClass(): any {
    return  (<any>this).constructor.name
  }

  equals (object: Object): Boolean {
    const money: Money = <Money> object
    return this.amount === money.amount 
          && this.currency() == money.currency()
  }

  times (multiplier: number) : Money {
    return new Money(this.amount * multiplier, this._currency)
  }

  currency(): string{
    return this._currency
  }

  toString(): string {
    return this.amount + " " + this._currency
  }

  plus(addend: Money): Expression {
    return new Sum(this, addend)
  }

  reduce(creditUnion: CreditUnion, to: string): Money {
    const rate = creditUnion.rate(this._currency, to) 
    return new Money(this.amount / rate, to)
  }

}

export class Sum implements Expression {
  augend: Expression
  addend: Expression
  
  constructor(augend: Expression, addend: Expression){
    this.augend = augend
    this.addend = addend
  }

  reduce(creditUnion: CreditUnion, to: string): Money {
    let amount: number = this.augend.reduce(creditUnion, to).amount
    amount += this.addend.reduce(creditUnion, to).amount
    return new Money(amount, to)
  }
}