export default class Dollar {
  
  private amount: number
  
  constructor(amount : number){
    this.amount = amount
  }

  times (multiplier: number) : Dollar {
    return new Dollar(this.amount * multiplier) 
  }

  equals (object: Object): Boolean {
    const dollar: Dollar = <Dollar> object
    return this.amount === dollar.amount
  }
}