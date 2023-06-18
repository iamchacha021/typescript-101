"use strict";
const char = 'luigi';
// console.log(char)
const inputs = document.querySelectorAll('input');
// console.log(inputs)
inputs.forEach(input => {
    // console.log(input)
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
// console.log(circ(7))
const names = ['shaun', 'jp,', 'rex'];
// names.push('yobi')
// names.push(56)
// names[0] = 'luigi'
// names[1]= 46
const jina = ['ty', 56, [67]];
jina.push(6);
let ninja = {
    name: 'shaun',
    belt: 'black',
    age: 30
};
ninja = {
    name: 'yoshi',
    belt: 'white',
    age: 40
};
// console.log(ninja)
let char1;
char1 = 'joy';
char1 = 9;
char1 = 'mike';
// console.log(char1)
let arr1 = [];
// arr1.push('jane')
arr1.push(false);
arr1.push(45);
arr1.unshift('mercy');
// console.log(arr1)
let ninja1;
ninja1 = {
    name: 'mario',
    age: 36
};
let ninja2;
ninja2 = {
    name: 'luigi',
    belt: 'blue',
    age: 45
};
let age = 25;
// console.log(age)
age = false;
// console.log(age)
age = "yoshi";
// console.log(age)
let arr2 = [];
arr2.push(25);
// console.log(arr2)
arr2.push(true);
// console.log(arr2)
arr2.push(['mary', 'joseph', 45]);
// console.log(arr2)
let ninja3;
ninja3 = {
    name: 25,
    belt: false,
    age: [34, "yoshi", "june"]
};
// console.log(ninja3)
const add = (a, b, c = 5, d) => {
    // console.log(a+b)
    // console.log(c)
    // console.log(d)
};
add(5, 17, 56, 'hello');
const greet = (user) => {
    // console.log(`${user.name} of id ${user.uid} is greeting you`)
};
greet({ name: 'jane', uid: 'ty56' });
let sum1;
sum1 = (num1, num2) => {
    // console.log(num1 + num2)
};
sum1(893, 13);
let logDetails;
logDetails = (ninja) => {
    return `${ninja.name} is ${ninja.age} years old`;
};
let result = logDetails({ name: 'chelsea', age: 34 });
console.log(result);
// classes
// class Invoice {
//     readonly client: string
//     private details: string
//     public amount: number
//     constructor(a: string, b:string, c: number){
//         this.client = a
//         this.details = b
//         this.amount = c
//     }
//     format(){
//         return `${this.client} owes $${this.amount} for ${this.details}`
//     }
// }
// shortcut
class Invoiced {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOned = new Invoiced('mario', 'building a website', 458);
const invTwod = new Invoiced('luigi', 'car wash', 200);
const invThreed = new Invoiced('shaun', 'a suite', 2458);
// console.log(invOned.format(), invTwod.format(), invThreed.format())
const invoiceds = [];
invoiceds.push(invOned);
invoiceds.push(invTwod);
invoiceds.push(invThreed);
// console.log(invoiceds)
invoiceds.forEach(inv => {
    // console.log(
    //     inv.amount,
    //     inv.format()
    // )
});
const me = {
    name: 'joker',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`hi ${me.name} you spent${amount}`);
        return amount;
    }
};
const greetPerson = (person) => {
    // console.log(`Hi ${person.name}! You are ${person.age} years old!`)
};
greetPerson(me);
// generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ name: 'jp', age: 43 });
let doc2 = addUID({ age: 40, skill: 'karate', name: 'yujo' });
// console.log(doc1, doc2)
// enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["DIRECTOR"] = 2] = "DIRECTOR";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
    ResourceType[ResourceType["LEAD"] = 4] = "LEAD";
})(ResourceType || (ResourceType = {}));
const doc3 = {
    uid: Math.floor(Math.random() * 23),
    resourceName: ResourceType.BOOK,
    data: 'Reading a lot of books'
};
const doc4 = {
    uid: Math.floor(Math.random() * 57),
    resourceName: ResourceType.DIRECTOR,
    data: { name: 'luigi', age: 56 }
};
const doc5 = {
    uid: Math.floor(Math.random() * 79),
    resourceName: ResourceType.AUTHOR,
    data: ['gas', 'ndege', 'salmon']
};
// console.log(doc3, doc4, doc5)
// tuples
let tup;
tup = ['grace', 40, true];
console.log(tup);
