export default class Stack {

  private container : Array<number> = []

  empty() : Boolean {
    return this.container.length == 0;
  }

  peek() : number {
    if (this.empty()){
      throw new Error('EmptyStackException')
    }
    return this.container[0]
  }

  pop() : number {
    if (this.empty()){
      throw new Error('EmptyStackException')
    }
    return this.container.pop()
  }

  size() : number {
    return this.container.length
  }

  push(value: number) {
    this.container.push(value)
  }

}