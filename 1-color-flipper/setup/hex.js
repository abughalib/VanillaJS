const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");



btn.addEventListener("click", ()=>{
    let generatedHex = randomHex();
    document.body.style.backgroundColor = generatedHex;
    color.textContent = generatedHex;
})
function generateRandom(){
    return Math.floor(Math.random()*hex.length);
}
function randomHex(){
    let hexNum = "#";
    for(let i = 0; i < 6; i++){
        hexNum+=hex[generateRandom()];
    }
    return hexNum;
}