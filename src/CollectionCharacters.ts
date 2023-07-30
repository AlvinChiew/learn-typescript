export class CollectionCharacters {
  constructor(public collection: string) {}


  get length(): number {
    return this.collection.length
  }

  isLargerThanNext(index: number): boolean {
    return this.collection[index].toLowerCase() > this.collection[index+1].toLowerCase()
  }

  swap(index: number): void {
    const chars = this.collection.split('')

    const curr = chars[index];
    chars[index] = chars[index+1];
    chars[index+1] = curr;

    this.collection = chars.join('')
  }
}