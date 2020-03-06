import LinkedList from '../OSSL/LinkedList'
import { hashCode } from './hashCode'
export default class Hashtable<K, V> {

  private _size: number = 0;
  private tableSize: number = 16
  private container: Array<LinkedList<[K, V]>> = new Array<LinkedList<[K, V]>>(this.tableSize)

  empty(): Boolean {
    return this._size == 0
  }

  has(key: K): Boolean {
    if(!this.empty()){
      let index = this.getIndex(key)    
      if (this.container[index] === undefined){
        return false
      }
      let list: LinkedList<[K, V]> = this.container[index]
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

  // TODO: Refactor to something better
  put(key: K, value: V): V {
    if (key == null || value == null){
      throw new Error('NullPointerException')
    }
    let item : [K, V] = [key, value]
    let index = this.getIndex(key)
    let list : LinkedList<[K, V]> = new LinkedList<[K, V]>()
    if (this.container[index] === undefined){     
      list.add(item)      
    } else {      
      let list = this.container[index]
      if (this.has(key)){
        let oldItems: [K,V][] = list.toArray()      
        for (let i = 0; i < oldItems.length; ++i){
          let oldItem: [K, V] = oldItems[i]
          if (key === oldItem[0]){
            list.remove(oldItem)
          }
        }
      }
      list.add(item)      
    }    
    this.container[index] = list
    this._size++
    return value
  }

  private getIndex(key : K): number {
    return hashCode(key) % this.tableSize
  }

  // TODO: Refactor to something better
  remove(key: K): V {
    if (this.empty()){
      throw new Error('EmptyHashtableException')
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

}