const icon=document.querySelector(".fa-bars");
const ul=document.querySelector("ul");
icon.addEventListener("click",()=>{
  ul.classList.toggle("result");
})

let count=3;

const img=document.createElement('img');
const image=document.querySelector("#image");

// right arrow;
const rightarrow=document.getElementById("right");
rightarrow.addEventListener("click",()=>{
  count++;
  if(count>7)
  {
    count=3;
  }
  
  image.src=`./image${count}.jpg`;
 })
//left arrow;
const leftarrow=document.getElementById("left");
leftarrow.addEventListener("click",()=>{
  count--;
  if(count<3)
  {
    count=7;
  }
  image.src=`./image${count}.jpg`;
})


