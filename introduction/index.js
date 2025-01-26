var firstPerson = {
    name: "John Doe",
    age: 24,
    address: {
        state: "California",
        country: "United States",
    }
};
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
console.log(firstPerson);
//Syntax for arrays
var persons = new Array();
persons.push(firstPerson);
for (var i = 0; i < persons.length; i++) {
    console.log(persons[i]);
}
var numbers = [1, 2, 3, 4];
numbers.push(true);
