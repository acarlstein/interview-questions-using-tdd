export class Money {
  protected amount: number
  protected _currency: string

  constructor(amount: number, currency: string){
    this.amount = amount
    this._currency = currency
  }

  static Dollar(amount: number) : Dollar {
    return new Dollar(amount, "USD")
  }

  static Franc(amount: number): Franc {
    return new Franc(amount, "CHF")
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

export class Dollar extends Money{
  
  constructor(amount : number, currency: string){
    super(amount, currency)
  }

}

export class Franc extends Money {

  constructor(amount : number, currency: string){
    super(amount, currency)
  }

}