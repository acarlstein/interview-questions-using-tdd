export default class Hashtable<K, V> {

  private _size: number = 0;
  private tableSize: number = 16
  private container: Array<[K, V]> = new Array<[K, V]>(this.tableSize)

  empty(): Boolean {
    return this._size == 0
  }

  has(key: K): Boolean {
    if(!this.empty()){
      let index = this.getIndex(key)    
      let [itemKey, itemValue] = this.container[index]
      if (key === itemKey){
        return true
      }  
    }
    return false
  }

  put(key: K, value: V): V {
    if (key == null || value == null){
      throw new Error('NullPointerException')
    }
    let item : [K, V] = [key, value]
    let index = this.getIndex(key)
    this.container[index] = item
    this._size++
    return value
  }

  private getIndex(key : K): number {
    return hashCode(key) % this.tableSize
  }

  remove(key: K): V {
    if (this.empty()){
      throw new Error('EmptyHashtableException')
    }
    let index = this.getIndex(key)
    if (this.container[index] == undefined || 
        this.container[index][0] != key){
      throw new Error('NoSuchElementException')
    }
    let itemValue = this.container[index][1]
    this.container[index] = undefined
    this._size--  
    return itemValue
  }

  size() : number {
    return this._size
  }

}

export function hashCode(value: any) : number {
  let hashValue: number = 0
  value = JSON.stringify(value)
  for(let i = 0; i < value.length; ++i){
    hashValue = ((hashValue << 5) - hashValue) + value.charCodeAt(i) & 0xFFFFFFFF
  }      
  return Math.abs(hashValue)
}