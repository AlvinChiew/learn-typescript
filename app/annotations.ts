const truth: boolean = false;

// array
const truths: boolean[] = [true, false];
const cars: string[][] = [['toyota'], ['honda']];
const dates: (Date | string)[] =  [new Date()];
dates.push('2023-01-01');
// console.log(dates);

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
class Vehicle {
  constructor(public color: string) {}

  // method 
  protected honk(): string {
    return 'chuu chuu'
  }

  private drive(): string {
    return 'vroom'
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string){ super(color)}

  public honk(): string {
    return 'vroom'
  }

  private rev(): string{
    return `reving...`
  }

  start_engine(): string {
    return this.rev()
  }
}

const train = new Vehicle('White');
const civic = new Car(4, 'White');
// console.log(train.honk());
// console.log(train.drive());
console.log(civic.honk());
// console.log(civic.drive());
console.log(civic.start_engine());

class Color {
  r: number;
  g: number;
  b: number;

  constructor(r:number,g:number,b:number=100) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  // method 
  print_color(): string {
    return `${this.r} ${this.g} ${this.b}`
  }
}

const color: Color = new Color(0,0);
// console.log(color.print_color());

// literal
const coords: {x: number; y: number} = {
  x: 0,
  y: 20
}

// function
// - arrow function
const log: (i: number) => void = (i: number) => {
  // console.log(i);
}
const log2 = (i: number): void => {
  // console.log(i);
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
  // console.log(forecast.date, forecast.weather); 
};
// console.log(logWeather(forecast_today));

const profile = {
  person_name: 'Alvin',
  person_age: 28,
  coords: {
    x: 0,
    y: 1 
  },
  setAge(person_age: number): void {
    this.person_age = person_age;
  }
}
const {person_name, person_age}: {person_name: string; person_age:number} = profile;
const {coords: {x, y}}:{coords: {x:number; y:number}} = profile;



// WHEN to use annotation
// - Function that returns `any` type
const json = '{"x":0,"y":1}'
const coords_json: {x: number; y: number} = JSON.parse(json)
// console.log(coords_json);
// - Variable declaration without initialization
let found_word: boolean;
let words = ['red', 'green', 'blue']
for (let i = 0; i < words.length; i++) {
  found_word = words[i] === 'green' ? true : false
  // console.log(found_word)
}
// - Variable with unfixed type (tho it's bad practice)
const numbers = [-10, -1, 9, -22]
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  numberAboveZero = numbers[i] > 0 ? numbers[i] : false
  // console.log(numberAboveZero);
}

// Interface
interface Reportable {
  summary(): string;
}

function report_summary(item: Reportable){
  console.log(item.summary());
}

const Civic = {
  name: 'civic',
  year: 2000,
  is_broken: false,
  summary(): string {
    return `this is ${this.name}. It is made in ${this.year} and is it broken? ${this.is_broken}`
  }
}

const Coke = {
  name: 'coke',
  is_carbonated: true,
  summary(): string {
    return `this is ${this.name} and is it carbonated? ${this.is_carbonated}`
  }
}

// report_summary(Civic);
// report_summary(Coke);
