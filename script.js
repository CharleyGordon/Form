const form = document.querySelector("form");
const password = document.querySelector('input[type="password"]');
const register = document.querySelector(".register");
const inputs = Array.from(register.querySelectorAll("input"));
const indicators = Array.from(document.querySelectorAll(".indicator"));
const hidePassword = function (target, indicator) {
  if (target.type !== "password") return;
  let text = indicator.textContent;
  text = text.replace(/./g, "*");
  indicator.textContent = text;
};
inputs.forEach((input, index) => {
  indicators[index].textContent = input.value;
  hidePassword(input, indicators[index]);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let parent = password.parentElement.parentElement;
  parent.dataset.state = "invalid";
  if (checkPassword(password, parent)) {
    parent.dataset.state = "valid";
    form.submit();
  }
});
const updateText = function (e) {
  const span = e.target.parentElement.querySelector(".indicator");
  span.textContent = e.target.value;
  hidePassword(e.target, span);
};
function checkPassword(input, parent) {
  const nextinput = document.getElementById("password-check");
  // debugger;
  if (input.value === nextinput.value) {
    input.title = "";
    return true;
  }
  input.title = "please make sure password match in both cases";
  input.focus();
  return false;
}
inputs.forEach((input) => {
  input.addEventListener("input", updateText);
  input.addEventListener("ready", updateText);
});
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// })
