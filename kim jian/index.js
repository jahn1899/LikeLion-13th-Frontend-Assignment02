const todos = []; 

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    todos.push({ text: todoText, completed: false }); 
    todoInput.value = '';
    renderTodo();
  }
}

function renderTodo() {
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    const span = document.createElement('span');
    span.textContent = todo.text;

    if (todo.completed) {
      span.classList.add('completed');
    }

    checkbox.addEventListener('change', function() {
      todos[index].completed = checkbox.checked;
      renderTodo();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    todoList.appendChild(li);
  });
}

addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});
