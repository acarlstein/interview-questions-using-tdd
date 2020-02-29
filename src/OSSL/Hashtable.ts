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
  let strValue: string = ''
  if (typeof value == "string") {
    strValue = value
  } 

  let hashValue: number = 0
  const chars = strValue.split('');
  chars.forEach((char, index) => {
    /* s.charCodeAt(0) * 31n-1 + s.charCodeAt(1) * 31n-2 + ... + s.charCodeAt(n-1) */
    hashValue += char.charCodeAt(0) * Math.pow(31, strValue.length - index)
  })
  console.log(hashValue)

  return hashValue
}