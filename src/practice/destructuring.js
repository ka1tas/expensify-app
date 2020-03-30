
// const person = {
//     name:'Saikat',
//     age: 23,
//     location :{
//         city: 'Kolkata',
//         temp : 30
//     }
// }
//
// const {name , age  } = person;
//
// console.log(`${name} is ${age} and lives in ${person.location.city}.`)

const books = {
    title : "Game Of Thrones",
    author : " G R R Martin",
    publisher : {
   //     name: " Penguine"
    }
}

const {title , author , publisher} = books;
const {name: publisherName = 'Self Published'} = publisher;

console.log(`${title} written by ${author} is published by ${publisherName}.`)