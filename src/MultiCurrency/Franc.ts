export default class Franc {
  
  private amount: number
  
  constructor(amount : number){
    this.amount = amount
  }

  times (multiplier: number) : Franc {
    return new Franc(this.amount * multiplier) 
  }

  equals (object: Object): Boolean {
    const dollar: Franc = <Franc> object
    return this.amount === dollar.amount
  }
}