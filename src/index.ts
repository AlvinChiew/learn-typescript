// import axios from 'axios';
import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';


const rootUrl = 'http://localhost:3000/users/';

const user = User.buildUser({name: "John", age: 16});

user.on('change', () => { console.log('user info is changed')});
user.set({age:17});

console.log(user.get('name'));
console.log(user.get('age'));

user.on('event', () => { console.log('EVENT 1')});
user.on('event', () => { console.log('EVENT 2')});
user.on('save', () => { console.log('SAVE 1')});

user.trigger('event');

// axios.post(rootUrl, {name: 'James',age: 21})
// axios.get('{rootUrl}/1`)
const user2 = User.buildUser({id: 1});
user2.fetch();
setTimeout(() => {
  console.log(user2.get('name'));
}, 1000)

const user3 = User.buildUser({name: 'Rose', age: 15, id: 2});
user3.on('save', () => { console.log('user info is saved')});
user3.save();


const userCollection = User.buildUserCollection()
userCollection.fetch();
console.log(userCollection.models);
