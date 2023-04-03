let dsiplayBox = document.querySelector(".display");
function showdisplay (event) {
    const x = event.target.innerHTML;
    if(dsiplayBox.innerHTML == 0) {
        return dsiplayBox.innerHTML = x ;
    }
    return dsiplayBox.innerHTML += x ;
}
function calculate () {
     let result = dsiplayBox.innerHTML;
    dsiplayBox.innerText = eval(result);
};

function clear () {
    let clearAll = dsiplayBox.innerHTML;
    dsiplayBox.innerText = 0;
}
function clearLast () {
    let clear = dsiplayBox.innerHTML;
    if (clear.length === 1){
        dsiplayBox.innerText = 0;
    }else {
        dsiplayBox.innerText = clear.substring (0, clear.length - 1);
    }
}

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", clear);
document.querySelector(".clear-last").addEventListener("click", clearLast);
let list = document.querySelectorAll(".show-display")
list.forEach(item => {
    item.addEventListener("click", showdisplay)
});






