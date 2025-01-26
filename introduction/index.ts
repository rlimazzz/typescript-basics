type Address = {
    state : string,
    country : string
}

type Person = {
    name : string,
    age : number,
    address : Address
}

let firstPerson : Person = {
    name : "John Doe", 
    age : 24,
    address : {
        state : "California",
        country: "United States",
    }
}


/*
You can add optional properties by just putting a ? sign after the name it
let firstPerson : Person = {
    name : "John Doe", 
    age : 24,
    address? : {
        state : "California",
        country: "United States",
    }
}

Now address is not needed necessarily anymore
*/


console.log(firstPerson)

//Syntax for arrays

let persons : Person[] = new Array()

persons.push(firstPerson)

for(let i : number = 0; i < persons.length;i++) {
    console.log(persons[i])
}

/*
Introducting a basic error using arrays
let numbers = [1, 2, 3, 4]

numbers.push(true)

This error happens basically because typescript automatically assigns the number type to the array of numbers
so when we try to put a value that is not a number we will get an error
*/