export class CollectionNumbers {
  constructor(public collection: number[]) {}

  get length(): number {
    return this.collection.length
  }

  isLargerThanNext(index: number): boolean {
    return this.collection[index] > this.collection[index +1]
  }

  swap(index: number): void {
    const curr = this.collection[index];
    this.collection[index] = this.collection[index+1]
    this.collection[index+1] = curr;
  }
}
