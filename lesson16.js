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
["b1", {original: "slender", translated: "باریک"}],
["b2", {original: "surpass", translated: "بهتر"}],
["b3", {original: "accurate", translated: "دقیق"}],
["b4", {original: "grateful", translated: "قدردان"}],
["b5", {original: "confident", translated: "با اعتماد به نفس"}],
["b6", {original: "cautious", translated: "محتاط"}],
["b7", {original: "doubt", translated: "شک"}],
["b8", {original: "penetrate", translated: "نفوذ"}],
["b9", {original: "vast", translated: "خیلی بزرگ"}],
["b10", {original: "capacity", translated: "ظرفیت"}],
["b11", {original: "microscope", translated: "میکروسکوپ"}],
["b12", {original: "pierce", translated: "عبورکردن"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});