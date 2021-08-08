const menu = document.getElementsByClassName("menu")[0];
const main = document.getElementsByTagName("main")[0];
const nav = document.getElementsByTagName("nav")[0];
const navChildren = nav.children;

document.addEventListener("click", e => {
  if(e.target.nodeName === "I"){

    if(e.target.classList[1] === "fa-bars"){
      menu.classList.add("rotate");
      main.classList.add("rotate-container");
      for(let i=0; i < 3; i++){
        navChildren[i].classList.add("translate");
      }
    }else{
      menu.classList.remove('rotate');
      main.classList.remove("rotate-container");
      for(let i=0; i < 3; i++){
        navChildren[i].classList.remove("translate");
      }
    }
  }
 
})