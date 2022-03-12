// practice

console.log('test');

const name = 'smitee'; // string
const favNumber = 11; // number
const isCool = true; // boolean

// array (like a js list)
const myGroceries = ['eggs', 'oat milk', 'blah'];

console.log(`blah blah ${myGroceries}`);

// tip: use ` not '

const indexNumber = Math.random() * myGroceries.length - 1;

// console.log(`i need ${myGroceries.length} items, the most imp is ${myGroceries[1]}`);

// note: arrays start at 0 and not 1

const listElement = document.querySelector('.grocery-list')
// listElement.innerHTML = `bloop`;

myGroceries.forEach((item, i) => {
    console.log(item, i);
    listElement.innerHTML += `<li>i am number ${i + 1} and i am ${item}</li>`;
});

// note: forEach is built into js

// note: += will list the whole array

// tip: you can add a class to innerHTML and style it in css! e.g. 
// listElement.innerHTML += `<li class="items">${i + 1}. ${item}</li>`;

const me = {
    name: 'smitee',
    isCute: true,
    interests: ['space', 'motion graphics'],
};

// note: followed by , not ;

console.log(me.interests[1])

// note: to use individual elements, need to use . after "me"
// e.g. console.log(me.interests) for individual, console.log(me) for everything

const people = [
    {
        name: 'smitee',
        age: 19,
        isCool: true
    },
{
        name: 'erin',
        age: 21,
        isCool: false,
    },
]

const peopleElement = document.querySelector('.people');
people.forEach(person => {
    // false ? 'if yes show this' : 'if not show this';

    peopleElement.innerHTML +=  `
    <div class="idk">
    <p class="age">${person.age} years old</p>
    <h3 class="title">${person.name} </h3>
    <p class="cool">${person.isCool ? 'i am cool B)' : 'i am not cool :('}</p>
    </div >`;
});

fetch('https://www.google.com')
    .then(res => res.json())
    .then(data => {
        console.log('test');
    })

const toDoList = document.querySelector('.to-do-list');