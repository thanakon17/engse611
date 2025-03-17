const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function DeleteTodo(id) {
  // console.log(id)
  const isConfirmed = window.confirm("Do you want to delete this task?")

  if (isConfirmed) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
  }
}

function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText.length === 0) {
    alert ("Please Input In Your Task");
    return;
  }

  if (todoText.length > 50) {
    alert ("your have text an over 50 character");
    return;
  }

  if (todoText.length > 0) {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    todos.push(todo);

    todoInput.value = "";

    renderTodos();
  }
  // console.log("Ni hao");
}

function toggleCompleted(id) {
  todos = todos.map((todo) => {
    if ((todo.id === id)) {
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
    const todoText = document.createElement("span");
    const todoDeleteButton = document.createElement("button");

    todoText.textContent = todo.text;
    if (todo.completed) {
      todoText.style.textDecoration = "line-through";
      todoText.style.color = "#181C14";
      todoText.style.marginLeft = "20px";
    } else {
      todoText.style.textDecoration = "none";
      todoText.style.color = "#000000";
      todoText.style.marginLeft = "20px";
    }

    const checkBox = document.createElement("input");
    checkBox.type = "CheckBox";
    checkBox.id = `todo-${todo.id}`;
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", () => toggleCompleted(todo.id))

    todoDeleteButton.textContent = "Delete";
    todoDeleteButton.addEventListener("click", () => DeleteTodo(todo.id))

    if (todo.completed) {
      todoItem.classList.add("Completed");
    }

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