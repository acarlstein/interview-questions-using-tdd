export abstract class Money {
  protected amount: number

  static Dollar(amount: number) : Dollar {
    return new Dollar(amount)
  }

  static Franc(amount: number): Franc {
    return new Franc(amount)
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
}

export class Dollar extends Money{
  
  constructor(amount : number){
    super()
    this.amount = amount
  }

  times (multiplier: number) : Dollar {
    return new Dollar(this.amount * multiplier) 
  }
}

export class Franc extends Money {
  
  constructor(amount : number){
    super()
    this.amount = amount
  }

  times (multiplier: number) : Franc {
    return new Franc(this.amount * multiplier) 
  }
}