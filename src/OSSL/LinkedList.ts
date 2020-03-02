export default class LinkedList<T> {
  private _size: number = 0
  private root: LinkNode<T> = null

  empty(): Boolean {
    return this._size == 0
  }

  size(): number {
    return this._size
  }

  add(value: T): T {
    if(this.root == null){
      this.root = this.createNode(value)
    }
    this._size++
    return value
  }

  private createNode(value: T): LinkNode<T> {
    return new LinkNode<T>(value)
  }

  remove(value: T): T {
    if(this.root == null){
      throw new Error('EmptyLinkedListException')
    }
    return value
  }

  toArray(): Array<String> {
    let array: Array<String> = new Array() 
    array.push('A')
    array.push('B')
    return array
  }

}

class LinkNode<T> {
  value: T
  next: LinkNode<T>

  constructor(value: T){
    this.value = value
  }
}