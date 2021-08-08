const body = document.getElementsByTagName("body")[0];
const counter = document.createElement("div");
const footer = document.getElementsByTagName("footer")[0];
const background = getComputedStyle(body);
let number = 0;
let blurness = 100;
const increaseCounter = () => {
  counter.innerText = `${number}%`;
  footer.style.opacity = `${number/100}`;
  body.appendChild(counter);
}
const removeBlur = () => {
  body.style.backdropFilter = `blur(${blurness}px)`;
  counter.style.opacity = `${blurness/100}`
}
counter.classList.add("blurry__counter");
const timer = setInterval(()=>{
  number++;
  blurness--;
  increaseCounter();
  removeBlur();
  if(number>=100) clearInterval(timer);
},50)



