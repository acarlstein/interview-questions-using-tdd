export default class LinkedList<T extends any | null> {
  private _size: number = 0
  private root: LinkNode<T> | null = null

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
      let current: LinkNode<T> = this.root
      while(current.next != null){
        current = current.next
      }
      current.next = this.createNode(value)
    }
    this._size++
    return value
  }

  private createNode(value: T): LinkNode<T> | null {
    return new LinkNode<T>(value)
  }

  toArray(): Array<T | null> {
    let array: Array<T | null> = new Array() 
    let current: LinkNode<T> | null = this.root
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

  remove(value: T): T {
    if(this.root == null){
      throw new Error('EmptyLinkedListException')
    }
    let wasFound: Boolean = false
    let parent: LinkNode<T> = null
    let current: LinkNode<T> = this.root
    while (!wasFound){
      if (current.value == value){
        wasFound = true
        break
      }      
      if (current.next == null){
        break
      }else{
        parent = current
        current = current.next
      }
    }

    if(wasFound){
      if (current == this.root){
        this.root = current.next
      } else if (current.next == null){
        parent.next = null
      } else {
        parent.next = current.next
      }
      delete current.value
      current = undefined
    } else {
      throw new Error('NoSuchElementException')
    }
    this._size--
    return value
  }

}

class LinkNode<T extends any | null> {
  value: T | null
  next: LinkNode<T> | null
  constructor(value: T){
    this.value = value
    this.next = null
  }
}