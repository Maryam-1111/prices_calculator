let ex = "23jhfdd5jhgffd10";
let re = /\d+/gi;
let result = ex.match(re);
let div = document.querySelector(".result");
let show = document.querySelector(".showing");
let sun = document.querySelector(".sunny");
let input = document.querySelector("input");
let clear = document.querySelector("img");

document.querySelector(".button").addEventListener("click", (e) => {
    div.textContent = document
        .querySelector("input")
        .value.match(re)
        .reduce((acc, curr) => +acc + +curr);
    show.textContent = document
        .querySelector("input")
        .value.match(re)
        .map((e) => `(${e})`);
    sun.classList.add("appear");
    clear.classList.add("switching");
});
clear.addEventListener("click", (e) => {
    input.value = "";
    div.innerHTML = "";
    show.innerHTML = "";
    sun.classList.remove("appear");
    clear.classList.remove("switching");
});
