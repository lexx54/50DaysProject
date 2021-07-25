const logo = document.getElementsByClassName("group__logo")[0];
const input = document.getElementsByClassName("group__input")[0];

logo.addEventListener("click", e => {
  input.classList.toggle("show");
})