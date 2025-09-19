let count = 0;
const counterEle = document.getElementById("counter");

function updateDisplay(){
    counterEle.innerText = count;

    if(count>0)counterEle.style.color = "green";
    else if(count<0)counterEle.style.color = "red";
    else counterEle.style.color = "white";
}

function increase(){
    count++;
    updateDisplay()
}

function decrease(){
    count--;
    updateDisplay()
}

function reset(){
    count = 0;
    updateDisplay();
}