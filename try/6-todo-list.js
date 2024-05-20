const todoList = [];

let divElement = document.querySelector(".js-div");

function renderHtmlElement() {
  let result = "";
  for (let i = 0; i < todoList.length; i++) {
    result += `
    <p>
      <span>"${todoList[i].name}"</span> <span class = "date-span">${todoList[i].duDate}</span>
      <button class = "del-btn" onclick = "
        todoList.splice(${i}, 1);
        renderHtmlElement();
      ">Delete</button>
    </p>
    `;
  }

  divElement.innerHTML = result;
}

function addTodo() {
  const inputElement = document.querySelector(".js-input");
  const dateElement = document.querySelector(".date");
  todoList.push({
    name: inputElement.value,
    duDate: dateElement.value,
  });
  inputElement.value = "";
  renderHtmlElement();
}
