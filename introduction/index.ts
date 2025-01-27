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
/*
Note : if you have all the elements in the array as just one type, primite or created by yourself typescript
will automatically assign the type in it, but I do prefer to specify the type to maintain the code well written
*/
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

//Literal Types

let myName : "Ryan" = "Ryan"
const myName2 = "Ryan"

/*
Typescript will put the type as the exactly value that is being assigned in the variable, maybe in some case
this will be interesting to use because you will need a value that never changes or something like a const,
so it's important to stay with this in mind
*/
