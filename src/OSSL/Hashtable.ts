export default class Hashtable<K, V> {

  private _size: number = 0;
  private tableSize: number = 16
  private container: Array<[K, V]> = new Array<[K, V]>(this.tableSize)

  empty(): Boolean {
    return this._size == 0
  }

  has(key: K): Boolean {
    for(let i = 0; i < this._size; ++i){
      let [itemKey, itemValue] = this.container[i]
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
    this.container[this._size] = item
    this._size++
    return value
  }
  
  remove(key: K): V {
    throw new Error('EmptyHashtableException')
  }

  size() : number {
    return this._size
  }

}

export function hash(value: any) : number {
  let hashValue: number = 0
  value = JSON.stringify(value)
  for(let i = 0; i < value.length; ++i){
    hashValue += value.charCodeAt(i) * Math.pow(31, value.length - i)
  }      
  return hashValue
}