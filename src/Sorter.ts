export abstract class Sorter {
  abstract isLargerThanNext(index:number): boolean;
  abstract swap(index:number): void
  abstract length: number;


  sort(): void {
    const {  length } = this
    // same as const length = this.collection.length

    // use Type Guard to restore uncommon methods/properties:
    // if (this.collection instanceof Array) for objects
    // if (typeof this.collection === 'string') for string, number, boolean, symbol

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if ( this.isLargerThanNext(j) ) { 
          this.swap(j);
        }
      }
    }
  }
}
