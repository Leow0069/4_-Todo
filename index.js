let todoItems = [];

function addtodo(text) {
const todo = {
    text: text,
    checked: false,
    id: Date.now(),
    };

    todoItems.push(todo);
};

addtodo("TEST");
console.log (todoItems);

// const todo2 = {
//     text1: "test2",
//     checked: false,
//     id: Date.now(),
// };

// todoItems.push(todo2);
// console.log(todoItems);

const form = document.querySelector(".js-form");
form.addEventListener = ("submit", event=> {
    event.preventDefault();

    const input = document.querySelector(".js-todo-input");

    const text = input.value.trim();
    if(text !== "") {
        addTodo(text);
        input.value="";
        input.focus();
    }
});


function renderTodo (todo) {
    
    const list = document.querySelector(".js-todo-list");

    const node = document.createElement("li");

    list.append(node);

}

