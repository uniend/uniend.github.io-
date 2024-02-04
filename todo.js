// 투두리스트 입니다.

//  입력값을 저장하는 함수 -- > 저장시 개별 id 필요
//  화면에 그리는 함수
//  기존 데이터를 가져오고, 화면에 그릴 수 있도록 하는 함수 --> 배열을 채운 후 에 그릴 수 있도록 복사해주기

const todoForm = document.querySelector(".form_todo");
const todoInput = document.querySelector(".form_todo input");
const todoList = document.querySelector(".form_todolist");

//로컬리스트에 저장되는 역할,
let todos = [];

function deletelist(e) {
  const li = e.target.parentElement;
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  localStorage.setItem("todos", JSON.stringify(todos)); // 로컬스토리지를 업데이트 해줌으로써 화면을 뿌려줄떄 새롱룬 데이터로 뿌려주게 함
  li.remove();
}

function paintTodo(newtodo) {
  const li = document.createElement("li");
  todoList.append(li);
  li.id = `${newtodo.id}`;
  console.log(li);
  const span = document.createElement("span");
  li.append(span);
  span.innerHTML = `${newtodo.todo}`;
  const btn = document.createElement("button");
  btn.innerHTML = "삭제";
  btn.className = "btnR";
  li.append(btn);
  btn.addEventListener("click", deletelist);
}

function handleAddTodo(e) {
  e.preventDefault();
  let todo = todoInput.value;
  todoInput.value = "";
  const newtodo = {
    todo,
    id: Date.now(),
  };
  todos.push(newtodo);
  paintTodo(newtodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

todoForm.addEventListener("submit", handleAddTodo);

// 화면에 뿌려주기

const getTodo = localStorage.getItem("todos");
if (getTodo != null) {
  const ArrayGetTodo = JSON.parse(getTodo);
  todos = ArrayGetTodo; // todo배열에 기존거 복제해서 로컬에 저장 : 복사하지않은면 로컬스토리지가초기화되서 기존건 사라진 로컬스토리지가 화면에 뿌려진다.
  ArrayGetTodo.forEach(paintTodo); // 각 요소를 프린트함수에 전달
}
