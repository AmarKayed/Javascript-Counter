const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const value = document.querySelector(".value");

let score = 0;
function color(score){
    if(score<0)
        value.style.color = "red";
    else if(score == 0)
        value.style.color = "black";
    else
        value.style.color = "green";
}
decrease.addEventListener("click",()=>{
    score--;
    value.innerHTML = score;
    color(score);
});

reset.addEventListener("click",()=>{
    score = 0;
    value.innerHTML = score;
    color(score);
});

increase.addEventListener("click",()=>{
    score++;
    value.innerHTML = score;
    color(score);
});