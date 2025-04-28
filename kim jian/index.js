// index.js

const todos = []; // 배열 선언

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// 할 일 추가 함수
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    todos.push({ text: todoText, completed: false }); // 객체 형태로 저장
    todoInput.value = '';
    renderTodo();
  }
}

// 할 일 출력 함수
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

    // 체크박스 상태 변경 시 completed 토글
    checkbox.addEventListener('change', function() {
      todos[index].completed = checkbox.checked;
      renderTodo();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    todoList.appendChild(li);
  });
}

// 버튼 클릭 이벤트
addBtn.addEventListener('click', addTodo);

// 엔터 키로 추가
todoInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});
