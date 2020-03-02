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
    }else{
      let newNode = this.createNode(value)
      let current: LinkNode<T> = this.root
      while(current.next != null){
        current = current.next
      }
      current.next = newNode 
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
    let wasFound: Boolean = false
    let parent = null
    let current = this.root
    while (current.next != null && current.value != value){
      parent = current
      current = current.next
    }
    if (current.value == value && current.next == null){
      parent.next = current.next
      current = null
      wasFound = true
    }
    if (!wasFound){
      throw new Error('NoSuchElementException')
    }
    return value
  }

  toArray(): Array<T> {
    let array: Array<T> = new Array() 
    let current: LinkNode<T> = this.root
    for(let current = this.root; current != null; current = current.next){
      array.push(current.value)      
    }     
    return array
  }

  has(value: T): Boolean {
    let wasFound: Boolean = false
    for(let current = this.root; current != null; current = current.next){
      if (current.value == value){
        wasFound = true
      }
    }
    return wasFound
  }

}

class LinkNode<T> {
  value: T
  next: LinkNode<T>
  constructor(value: T){
    this.value = value
    this.next = null
  }
}