const d = document;

const buttons = d.getElementsByTagName("button");

console.log(buttons)


for( let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click",e=>{
    if (e.target.id === "prev"){
      console.log("para atras")
    } else if (e.target.id ==="next"){
      console.log("para adelante")
    }
  })

}
