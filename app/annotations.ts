const truth: boolean = false;

// array
const truths: boolean[] = [true, false];
const cars: string[][] = [['toyota'], ['honda']];
const dates: (Date | string)[] =  [new Date()];
dates.push('2023-01-01');
console.log(dates);

// tuple
// useful to handle csv
type Drink = [string, boolean, number]
const drink1: [string, boolean, number] = ['brown', true, 1 ];
const drink2: Drink = ['brown', true, 1 ];

// object
const now: Date = new Date();
const carSpecs = {
  horsepower: 400,
  weight: 1200
}

// class
class Color {
  r: number;
  g: number;
  b: number;

  constructor(r:number,g:number,b:number=0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

const color: Color = new Color(0,0);

// literal
const coords: {x: number; y: number} = {
  x: 0,
  y: 20
}

// function
// - arrow function
const log: (i: number) => void = (i: number) => {
  console.log(i);
}
const log2 = (i: number): void => {
  console.log(i);
}
// - named function
function add(x: number, y: number): number {
  return x + y;
}
// - anonymous function
const substract = function(x: number, y: number): number { return x - y; };
const throwError = (message: string): never => { throw new Error(message); };

// destructuring prams
const forecast_today = {
  date: new Date(),
  weather: 'sunny'
}
const logWeather = (forecast: {date: Date, weather: string}): void => {
  console.log(forecast.date, forecast.weather); 
};
console.log(logWeather(forecast_today));

const profile = {
  person_name: 'Alvin',
  person_age: 28,
  coords: {
    x: 0,
    y: 1 
  },
  setAge(age: number): void {
    this.age = age;
  }
}
const {person_name, person_age}: {person_name: string; person_age:number} = profile;
const {coords: {x, y}}:{coords: {x:number; y:number}} = profile;



// WHEN to use annotation
// - Function that returns `any` type
const json = '{"x":0,"y":1}'
const coords_json: {x: number; y: number} = JSON.parse(json)
console.log(coords_json);
// - Variable declaration without initialization
let found_word: boolean;
let words = ['red', 'green', 'blue']
for (let i = 0; i < words.length; i++) {
  found_word = words[i] === 'green' ? true : false
  console.log(found_word)
}
// - Variable with unfixed type (tho it's bad practice)
const numbers = [-10, -1, 9, -22]
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  numberAboveZero = numbers[i] > 0 ? numbers[i] : false
  console.log(numberAboveZero);
}

