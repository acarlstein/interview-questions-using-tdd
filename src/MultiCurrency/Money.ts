export class Money {
  protected amount: number
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
}
