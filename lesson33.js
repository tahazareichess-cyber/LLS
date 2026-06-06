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
["b1", {original: b1.innerText, translated: "داوطلب"}],
["b2", {original: b2.innerText, translated: "سخنرانی"}],
["b3", {original: b3.innerText, translated: "بازداشتن"}],
["b4", {original: b4.innerText, translated: "صدای تیز"}],
["b5", {original: b5.innerText, translated: "پر از خوشحالی"}],
["b6", {original: b6.innerText, translated: "من من کردن"}],
["b7", {original: b7.innerText, translated: "ماده پرکننده"}],
["b8", {original: b8.innerText, translated: "شوخ"}],
["b9", {original: b9.innerText, translated: "سواستفاده"}],
["b10", {original: b10.innerText, translated: "نگه داشتن"}],
["b11", {original: b11.innerText, translated: "ساکت"}],
["b12", {original: b12.innerText, translated: "پیش داوری"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});