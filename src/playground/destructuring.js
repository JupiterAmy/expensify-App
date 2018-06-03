const person = {
    name: 'Amritansh',
    age: 26,
    location: {
        city: 'Kolkata',
        temp: 35
    }
};

const {age, name} = person;
console.log(`${name} is ${age}`);

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'penguin'
    }
};

const {name: publisherName = 'self-published'} = book.publisher;
console.log(publisherName);

const arr = ['Amrit', '26'];

const [ages, names] = arr;

console.log(`${names} is ${ages}`);

