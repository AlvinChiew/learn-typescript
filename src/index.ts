import { Sorter } from './Sorter';
import { CollectionNumbers } from './CollectionNumbers';
import { CollectionCharacters } from './CollectionCharacters';
import { CollectionNodes } from './CollectionNodes';


const numbers = new CollectionNumbers([5,2,8,-5,0])
const numberSorter = new Sorter(numbers);
numberSorter.sort()
console.log(numbers.collection)

const characters = new CollectionCharacters('qWeRt')
const characterSorter = new Sorter(characters);
characterSorter.sort()
console.log(characters.collection)

const nodes = new CollectionNodes()
nodes.add(3)
nodes.add(1)
nodes.add(78)
nodes.add(-1000)
const nodeSorter = new Sorter(nodes);
nodeSorter.sort()
nodes.print()
