import axios from 'axios';
import { User } from './models/User';

const user = new User({name: "John", age: 16});

user.on('change', () => { console.log('user info is changed')});
user.set({age:17});

console.log(user.get('name'));
console.log(user.get('age'));

user.on('event', () => { console.log('EVENT 1')});
user.on('event', () => { console.log('EVENT 2')});
user.on('save', () => { console.log('SAVE 1')});

user.trigger('event');

// axios.post('http://localhost:3000/users', {name: 'James',age: 21})
axios.get('http://localhost:3000/users/1')
const user2 = new User({id: 1});
user2.fetch();
setTimeout(() => {
  console.log(user2.get('name'));
}, 1000)

const user3 = new User({name: 'Rose', age: 15, id: 2});
user3.on('save', () => { console.log('user info is saved')});
user3.save();
