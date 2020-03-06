export function hashCode(value: any) : number {
  let hashValue: number = 0
  value = JSON.stringify(value)
  for(let i = 0; i < value.length; ++i){
    hashValue = ((hashValue << 5) - hashValue) + value.charCodeAt(i) & 0xFFFFFFFF
  }      
  return Math.abs(hashValue)
}