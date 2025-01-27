var firstUser = {
    username: "rlimazzz",
    role: "guest"
};
/*
We can also specify a type for our function return like in typed languages we can also return string,
number, any, void(does not return anything), undefined values, something that is interesting is that you
can also use unions on functions return type
*/
function testingReturnType(user) {
    if (user.username == "rlimazzz") {
        return firstUser;
    }
    return user.username;
}
//Case of using void 
var userList = new Array();
function addUser(user) {
    userList.push(user);
}
addUser(firstUser);
for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
}
console.log(testingReturnType(firstUser));
console.log(firstUser);
var gameScores = [1, 24, 15, 69];
var favoriteTeams = ["Lakers", "Timberwolves", "Warriors", "Mavericks", "Bulls"];
var people = [{ name: "Ana", age: 32 }, { name: "George", age: 19 }];
function getLastItem(array) {
    return array[array.length - 1];
}
console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteTeams));
console.log(getLastItem(people));
