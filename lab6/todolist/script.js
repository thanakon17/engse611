const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");


let todos = [];


function DeleteTodo(id) {
 // console.log(id)
 const isConfirmed = window.confirm("Do you want to delete this task?");

 if(isConfirmed) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
 }
}


function addTodo() {
 const todoText = todoInput.value.trim();

 if (todoText.length === 0) {
  alert("Please input Text");
  return;
 } if (todoText.length > 50) {
  alert("Your Text is Over 50 character!!")
  return;
 }


 if (todoText.length > 0) {
   const todo = {
     id: Date.now(),
     text: todoText,
     completed: false,
   };

   todos.push(todo);
   todoInput.value = " ";
   renderTodos();
 }
 // console.log("Ni hao");
}


function toggleCompleted(id) {
 todos = todos.map((todo) => {
   if ((todo. id === id)) {
     todo.completed = !todo.completed;
   }
   return todo;
 });

 renderTodos();
}


function renderTodos() {
 todoList.innerHTML = "";
 todos.forEach((todo) => {
   const todoItem = document.createElement("li");

   //TodoCheckBox
   const checkBox = document.createElement("input");
   checkBox.type = "checkbox";
   checkBox.checked = todo.completed;
   checkBox.addEventListener("change", () => toggleCompleted(todo.id));

   //TodoText
   const todoText = document.createElement("span");
   todoText.textContent = todo.text;
   todoText.style.marginLeft = "10px"

   if (todo.completed) {
       todoText.style.textDecoration = "line-through";
       todoText.style.color = "#181C14";
   }
   if (todo.completed) {
    todoItem.classList.add("Completed");
  }

  //TodoDeleteButton
   const todoDeleteButton = document.createElement("button");
   todoDeleteButton.textContent = "Delete";
   todoDeleteButton.classList.add("delete-button");
   todoDeleteButton.addEventListener("click", () => DeleteTodo(todo.id));


   todoItem.addEventListener("click", () => toggleCompleted(todo.id));

   
   todoItem.appendChild(checkBox);
   todoItem.appendChild(todoText);
   todoItem.appendChild(todoDeleteButton);
   todoList.appendChild(todoItem);
 });
}


form.addEventListener("submit", (event) => {
 event.preventDefault();
 addTodo();
});


renderTodos();