import axios from 'axios';
import { User } from './models/User';

const user = new User({name: "John", age: 16});
user.set({age:17});

user.on('change', () => { console.log('CHANGE 1')});
user.on('change', () => { console.log('CHANGE 2')});
user.on('save', () => { console.log('SAVE 1')});

console.log(user.get('name'));
console.log(user.get('age'));

user.trigger('change');

// axios.post('http://localhost:3000/users', {name: 'James',age: 21})
axios.get('http://localhost:3000/users/1')
