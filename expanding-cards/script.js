const d = document;
const container = d.getElementById("image-container");

container.addEventListener("click", e => {
  const current = e.target;
  const active =d.getElementsByClassName("is-click")[0];
  if (current.classList.contains("images")){
    active.classList.remove("is-click");
    current.classList.add("is-click");
  }
})