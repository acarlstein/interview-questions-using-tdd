export default class Set {

  // TODO: Replace with HashMap
  private container : Array<number> = []

  empty() : Boolean {
    return this.container.length == 0
  }

  has(value: number) : Boolean {
    return this.container.indexOf(value, 0) > -1
  }

  add(value: number) : number {
    if (this.container.indexOf(value, 0) > -1){
      throw Error('NoDuplicateAllowedException')
    }
    this.container.push(value)
    return value
  }

  remove(value: number) : number {
    let index : number = this.container.indexOf(value, 0)
    if (index == -1){
      throw new Error('EmptySetException')
    }
    this.container.splice(index, 1);
    return value
  }

  size() : number {
    return this.container.length
  }

}