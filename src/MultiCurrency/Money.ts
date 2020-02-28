export default class Money {
  protected amount: number

  equals (object: Object): Boolean {
    const money: Money = <Money> object
    return this.amount === money.amount
  }
}