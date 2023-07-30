import { CollectionNumbers } from './CollectionNumbers';
import { CollectionCharacters } from './CollectionCharacters';
import { CollectionNodes } from './CollectionNodes';


const numbers = new CollectionNumbers([5,2,8,-5,0])
numbers.sort()
console.log(numbers)

const characters = new CollectionCharacters('qWeRt')
// const characterSorter = new Sorter(characters);
characters.sort()
console.log(characters)

const nodes = new CollectionNodes()
nodes.add(3)
nodes.add(1)
nodes.add(78)
nodes.add(-1000)
nodes.sort()
nodes.print()
// console.log(nodes)
