export interface Expression {
  reduce(to: string): Money
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

  reduce(to: string): Money {
    return this
  }
}

export class Sum implements Expression {
  augend: Money
  addend: Money
  
  constructor(augend: Money, addend: Money){
    this.augend = augend
    this.addend = addend
  }

  reduce(to: string): Money {
    const amount: number = this.augend.amount + this.addend.amount
    return new Money(amount, to)
  }
}