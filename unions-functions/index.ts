type User = {
    username : string,
    /*
    This is called union, we can have only specific data inside it, in this case we can have only 
    guest, member and admin, otherwise we will get some errors
    */
    role : "guest" | "member" | "admin" 
}

let firstUser : User = {
    username : "rlimazzz",
    role: "guest"
}

/*
We can also specify a type for our function return like in typed languages we can also return string,
number, any, void(does not return anything), undefined values, something that is interesting is that you
can also use unions on functions return type
*/
function testingReturnType(user : User) : string | User{
    if(user.username == "rlimazzz") {
        return firstUser
    }
    return user.username
}

//Case of using void 
let userList : User[] = new Array()
function addUser(user : User) : void {
    userList.push(user)
}

addUser(firstUser)
for(let i : number = 0;i < userList.length;i++) {
    console.log(userList[i])
}

console.log(testingReturnType(firstUser))

console.log(firstUser)