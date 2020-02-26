export function countValleys(measurements : string) : number {
  let slope: number = 0
  let levelFromSeaLevel = 0
  for(let character of measurements.toUpperCase()){
    levelFromSeaLevel += (character === 'D') ? 1 : -1
    if (levelFromSeaLevel === 0 && character === 'U'){
      ++slope
    }
  }
  return slope
}