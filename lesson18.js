const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const b10 = document.getElementById("b10");
const b11 = document.getElementById("b11");
const b12 = document.getElementById("b12");
const wordMap = new Map([
["b1", {original: "manipulating", translated: "دستکاری"}],
["b2", {original: "horrid", translated: "مهیب"}],
["b3", {original: "tragedy", translated: "اتفاق بد"}],
["b4", {original: "glanced", translated: "نگاه کوتاه"}],
["b5", {original: "budget", translated: "بودجه"}],
["b6", {original: "nimble", translated: "چابک"}],
["b7", {original: "ingenious", translated: "باهوش"}],
["b8", {original: "economical", translated: "اقتصادی"}],
["b9", {original: "reckless", translated: "خودسر"}],
["b10", {original: "pedestrian", translated: "عابر پیاده"}],
["b11", {original: "rave", translated: "غوغا"}],
["b12", {original: "lubricate", translated: "روغن کاری"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});