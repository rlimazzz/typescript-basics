/*
Partials constructs a type with all properties of the type set to optional
*/
/*
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});

console.log(todo2)

*/

/* 
Omit constructs a type by picking all properties from Type and then removing Keys 
(string literal or union of string literals). The opposite of Pick.
*/

interface Enterprise {
    name : string,
    description : string,
    category: string
}

//With omit we can ignore some properties that are necessary in our interface
type previewEnterprise = Omit<Enterprise, "description">

const enterpriseTest : previewEnterprise = {
    name: "Ryan Corporation",
    category: "Finance"
}

console.log(enterpriseTest)

//You can use unions too

type previewEnterprise2 = Omit<Enterprise, "description" | "category">

const enterpriseTest2 : previewEnterprise2 = {
    name: "Ryan Corporation"
}

console.log(enterpriseTest2)