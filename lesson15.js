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
["b1", {original: "expand", translated: "گسترش"}],
["b2", {original: "mature", translated: "بالغ"}],
["b3", {original: "alter", translated: "تغییر دادن"}],
["b4", {original: "revise", translated: "اصلاح نمودن"}],
["b5", {original: "casual", translated: "معمولی"}],
["b6", {original: "pursue", translated: "دنبال کردن"}],
["b7", {original: "fortunate", translated: "از شانس خوب"}],
["b8", {original: "pledge", translated: "قول"}],
["b9", {original: "pioneer", translated: "پیشرو"}],
["b10", {original: "innovative", translated: "خلاق"}],
["b11", {original: "unanimous", translated: "هم رای"}],
["b12", {original: "sacred", translated: "مقدس"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});