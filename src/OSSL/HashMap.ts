import LinkedList from './LinkedList'
import { hashCode } from './hashCode'
export default class HashMap<K, V> {

  private _size: number = 0;
  private tableSize: number = 16
  private container: Array<LinkedList<[K, V]>> = new Array<LinkedList<[K, V]>>(this.tableSize)

  empty(): Boolean {
    return this._size == 0
  }

  has(key: K): Boolean {
    if(!this.empty()){  
      let list: LinkedList<[K, V]> = this.getListFromKey(key)
      if (list === undefined){
        return false
      }      
      let items: [K,V][] = list.toArray()      
      for (let i = 0; i < items.length; ++i){
        let item: [K, V] = items[i]
        if (key === item[0]){
          return true
        }
      }
    }
    return false
  }

  private getListFromKey(key: K) : LinkedList<[K, V]> {
    return this.container[this.getIndex(key)]
  }

  // TODO: Refactor to something better
  put(key: K, value: V): V {
    if (key == null || value == null){
      throw new Error('NullPointerException')
    }
    let item : [K, V] = [key, value]
    let index = this.getIndex(key)
    let list : LinkedList<[K, V]> = this.container[index]
    if (list === undefined){     
      list = new LinkedList<[K, V]>()
    } else {      
      if (this.has(key)){
        let oldItems: [K,V][] = list.toArray()      
        for (let i = 0; i < oldItems.length; ++i){
          let oldItem: [K, V] = oldItems[i]
          if (key === oldItem[0]){
            list.remove(oldItem)
          }
        }
      }
    }    
    list.add(item)
    this.container[index] = list
    this._size++
    return value
  }

  private getIndex(key : K): number {
    if (typeof key['hashCode'] === 'function'){
      return key['hashCode'] % this.tableSize
    }
    return hashCode(key) % this.tableSize
  }

  // TODO: Refactor to something better
  remove(key: K): V {
    if (this.empty()){
      throw new Error('EmptyHashMapException')
    }
    let index = this.getIndex(key)
    let list : LinkedList<[K, V]> = this.container[index]
    if (list == undefined){
      throw new Error('NoSuchElementException')
    }
    let item: [K, V]
    let items: [K,V][] = list.toArray()      
    for (let i = 0; i < items.length; ++i){
      item = items[i]
      if (key === item[0]){
        list.remove(item)
        if(list.empty()){
          this.container[index] = undefined
        }    
        this._size--  
        return item[1]
      }
    }
    throw new Error('NoSuchElementException') 
  }

  size() : number {
    return this._size
  }

  get(key: K) : V {
    if(this.empty()){
      throw new Error('EmptyHashMapException')
    }
    let list: LinkedList<[K, V]> = this.getListFromKey(key)
    if (list === undefined){
      throw new Error('NoSuchElementException')
    }      
    let items: [K,V][] = list.toArray()      
    for (let i = 0; i < items.length; ++i){
      let item: [K, V] = items[i]
      // check for hashcode
      if (typeof key['hashCode'] === 'function'
        && typeof item[0]['hashCode'] === 'function'
        && key['hashCode'] === item[0]['hashCode']){
        return item[1]
      }else if (key === item[0]){
        return item[1]
      }
    }
    throw new Error('NoSuchElementException')
  }

}