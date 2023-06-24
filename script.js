let countEl = document.getElementById("count-el");
let count = 0;
 increment = ()=> {
    count++;
    countEl.innerText= count;
}

let saveEl = document.getElementById("save-el");
save = () => {
    let countStr = " "+count + " - ";
    saveEl.innerText+= countStr;
    count = 0;
countEl.innerText= count;
}
