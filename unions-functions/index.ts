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

//We can also specify a type for our function return like in typed languages
function testingReturnType(user : User) : string {
    return user.username
}

console.log(testingReturnType(firstUser))

console.log(firstUser)