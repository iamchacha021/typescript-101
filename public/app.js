import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('mario', 'webwork', 250)
// docTwo = new Payment('yoshi', 'plumbing', 200)
// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)
// const invOne = new Invoice('mario', 'building a website', 458)
// const invTwo = new Invoice('luigi', 'car wash', 200)
// const invThree = new Invoice('shaun', 'a suite', 2458)
// // console.log(invOne.format(), invTwo.format(), invThree.format())
// const invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.push(invThree)
// // console.log(invoices)
// invoices.forEach(inv => {
//     // console.log(
//     //     inv.amount,
//     //     inv.format()
//     // )
// })
const anchor = document.querySelector('a');
// console.log(anchor.href)
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    // let's use tuples to create an instance
    // since the instance requires a string, string and a number then
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    // now spred the values in the instance creator
    if (type.value === 'Invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.renderFunction(doc, type.value, 'start');
});
