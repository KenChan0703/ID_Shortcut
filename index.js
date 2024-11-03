const RNGbutton = document.getElementById("RNGbutton");
const RNGLabel = document.getElementById("RNGLabel");
const min = 30000000;
const max = 130000000;
let randomNum;

RNGbutton.onclick = function(){
    randomNum = Math.floor(Math.random() * max-min) + min;
    RNGLabel.textContent = randomNum;
}
