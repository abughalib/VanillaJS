const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');
const color = document.querySelector(".color");

let i = 0;

btn.addEventListener("click", ()=>{

    const randNum = getRandomNumber();
    document.body.style.backgroundColor = colors[randNum];
    color.textContent = colors[randNum];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}