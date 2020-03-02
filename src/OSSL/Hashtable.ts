export default class Hashtable<K, V> {

  private container: Array<[K, V]> = []

  empty(): Boolean {
    return this.container.length == 0
  }

  has(key: K): Boolean {
    for(let item of this.container){
      let [itemKey, itemValue] = item
      if (key === itemKey){
        return true
      }
    }
    return false
  }

  put(key: K, value: V): V {
    let item : [K, V] = [key, value]
    this.container.push(item)
    return value
  }
  
  remove(key: K): V {
    throw new Error('EmptyHashtableException')
  }

  size() : number {
    return this.container.length
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