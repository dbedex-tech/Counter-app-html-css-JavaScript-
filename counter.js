const initialCount=
document.querySelector(".start span")
const increase=
document.querySelector(".increase_btn")
const decrease=
document.querySelector(".decrease_btn")
const reset=
document.querySelector(".reset_btn")
let count=0;
function countUpdate() {
  initialCount.textContent=count;
}
increase.addEventListener("click", () => {count++;
  countUpdate();}
)
decrease.addEventListener("click", () => {
if(
  initialCount.innerText != 0){
  count--;
  countUpdate();
}} 
)
reset.addEventListener("click", () => {count=0;
  countUpdate();
} )
