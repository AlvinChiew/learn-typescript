import { CollectionNumbers} from './CollectionNumbers';

interface Sortable {
  length: number;
  isLargerThanNext(index: number): boolean;
  swap(index: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const {  length } = this.collection
    // same as const length = this.collection.length

    // use Type Guard to restore uncommon methods/properties:
    // if (this.collection instanceof Array) for objects
    // if (typeof this.collection === 'string') for string, number, boolean, symbol

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if ( this.collection.isLargerThanNext(j) ) { 
          this.collection.swap(j);
        }
      }
    }
  }
}
