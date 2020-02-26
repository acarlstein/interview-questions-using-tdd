import Set from '../OSSL/Set'
export function getPairOfSocks(pile : Array<number>) : number {
  if (pile.length === 1) {
    return 0
  }
  let countPairs : number = 0 
  let set : Set = new Set()
  for(let i = 0; i < pile.length; ++i){
    if(set.has(pile[i])){
      ++countPairs
      set.remove(pile[i])
    } else {
      set.add(pile[i])
    }
  }
  return countPairs
}