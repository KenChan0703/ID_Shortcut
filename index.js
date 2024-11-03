const RNGbutton = document.getElementById("RNGbutton");
const RNGLabel = document.getElementById("RNGLabel");
const min = 30000000;
const max = 200000000;
let randomNum;

RNGbutton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    RNGLabel.textContent = randomNum;
}
