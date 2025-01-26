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

console.log(firstPerson)