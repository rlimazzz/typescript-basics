/*
A major part of software engineering is building components that not only have well-defined and consistent 
APIs, but are also reusable. Components that are capable of working on the data of today as well as 
the data of tomorrow will give you the most flexible capabilities for building up large software systems.
In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is 
generics, that is, being able to create a component that can work over a variety of types rather than a 
single one. This allows users to consume these components and use their own types.
*/

const gameScores = [1, 24, 15, 69]
const favoriteTeams = ["Lakers", "Timberwolves", "Warriors", "Mavericks", "Bulls"]
const people = [{name : "Ana", age : 32}, {name : "George", age : 19}]

function getLastItem<Type>(array: Type[]) {
    return array[array.length - 1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteTeams))
console.log(getLastItem(people))