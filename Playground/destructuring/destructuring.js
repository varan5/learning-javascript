
const person = {
    firstName: 'Micheal',
    lastName: 'Dave',
    city: 'NYC',
}

// Accessing person(object) data without destructuring
console.log(person.firstName) 
console.log(person.lastName) 
console.log(person.city) 

// Accessing person(object) data with destructuring

const { firstName, lastName, city } = person