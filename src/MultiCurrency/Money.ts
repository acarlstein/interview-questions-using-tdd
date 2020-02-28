export abstract class Money {
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
    console.log(this.getClass())
    console.log(money.getClass())
    return this.amount === money.amount 
          && this.getClass() == money.getClass()
  }

  abstract times(multiplier: number): Money

  currency(): string{
    return this._currency
  }
}

export class Dollar extends Money{
  
  constructor(amount : number, currency: string){
    super(amount, currency)
  }

  times (multiplier: number) : Dollar {
    return Money.Dollar(this.amount * multiplier)
  }

}

export class Franc extends Money {

  constructor(amount : number, currency: string){
    super(amount, currency)
  }

  times (multiplier: number) : Franc {
    return Money.Franc(this.amount * multiplier) 
  }
}