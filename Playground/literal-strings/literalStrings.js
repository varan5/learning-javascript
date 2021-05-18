
// Sometimes, it is not feasible to use string concatination, as there might be many values to concat
// We can use literal strings, to make our code more organised and so the readibility of the code increases


// Let's use literal strings to print the employee infomation
const printEmployeeInformation = (data) => {
    console.log(`Employee name: ${data.name}.\n Employee age: ${data.age}`)
    console.log(`Emplyoee location: ${data.city}, ${data.country}`)
}


const emplyoeeData = {
    name: 'Tommy Vercetti',
    age: 30,
    city: 'Vice-city',
    country: 'United States',
}

printEmployeeInformation(emplyoeeData)