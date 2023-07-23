// js object methods
const obj = {
  obj_name: 'Danny',
  age: 99,
  gender: 'male'
}
const {obj_name, age, gender} = obj

function ageGroup(str: string, age: number){
  const group: string = age > 50 ? 'old': 'young'
  return `${str[0]} is ${group} at ${age} years old`
}
// const bio = ageGroup`Danny is ${obj.age}`

console.log(
  Object.keys(obj),
  Object.values(obj),
  Object.entries(obj),
  {...obj, age: 51, obj_name: 'Tom'},
  `${obj_name} is a ${gender} and ${age} years old.`,
  
)


// js array methods
const arr = [1, 2, 3, 4]

console.log(
  arr.filter(i => i > 2),
  arr.map(i => i + 1),
  arr.reduce((acc, val) => acc + val),
  arr.some((function(i){ return i > 3})),
  arr.every((function(i){ return i > 3})),
  arr.find(i => i == 3),
  arr.includes(3),
  [0, ...arr, 0]
  );
  
arr.forEach((function(i){i > 2 ? console.log(i) : null}));



// console
// const jack = {name: 'jack', age: 20, gender: 'male'}
// const rose = {name: 'rose', age: 19, gender: 'female'}
// const tony = {name: 'jack', age: 31, gender: 'male'}

// console.log('%c Friends', 'color: orange; font-weight: bold;')
// console.log({ jack, rose, tony })

// console.table([jack, rose, tony])


// console.time('lopper')
// let i = 0;
// while (i < 100000000) { i++; };
// console.timeEnd('lo pper')

// const runOnce = () => console.trace('here');

// runOnce();
// runOnce();
