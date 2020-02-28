export default class Money {
  protected amount: number

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
}