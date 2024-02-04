// 로그인

const loginForm = document.querySelector(".form_login");
const loginInput = document.querySelector(".form_login input");
const userName = document.querySelector(".user_name");
let you = localStorage.getItem("name");

function saveId(e) {
  e.preventDefault();
  let name = loginInput.value;
  localStorage.setItem("name", name);
  loginInput.value = "";
}
function handlelogin(e){
  saveId(e);
  const id = localStorage.getItem("name");
  if (id != "" || id != null) {
    userName.innerHTML = `${you}님의 투두리스트 입니다.`;
    loginForm.className = "hidden";
  }
}


loginForm.addEventListener("submit", handlelogin);

