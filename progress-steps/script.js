const d = document;

const [prevBtn,nextBtn] = d.getElementsByTagName("button");
const steps = d.getElementsByClassName("is-selected");


prevBtn.addEventListener("click", () => {
  if(steps.length<2){
    prevBtn.classList.add("is-disabled")
  } else {
    const prevLine = steps[steps.length-1].previousElementSibling;
    const prevMark = prevLine.nextElementSibling;
    
    nextBtn.classList.remove("is-disabled");
    nextBtn.disabled = false;

    prevLine.classList.remove("is-selected");
    prevMark.classList.remove("is-selected");

    if(steps.length===1) {
      prevBtn.classList.add("is-disabled");
      prevBtn.disabled = true;
    }
  }
})

nextBtn.addEventListener("click", () =>{
  if(steps.length>6){
    nextBtn.classList.add("is-disabled");
  } else{
    const nextLine = steps[steps.length-1].nextElementSibling;
    const nextMark = nextLine.nextElementSibling;

    nextLine.classList.add("is-selected");
    nextMark.classList.add("is-selected");

    prevBtn.classList.remove('is-disabled');
    prevBtn.disabled = false;

    if(steps.length===7) {
      nextBtn.classList.add("is-disabled");
      nextBtn.disabled = true;
    };
  }
})
