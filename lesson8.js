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
["b1", {original: "variety", translated: "تنوع"}],
["b2", {original: "survived", translated: "زنده ماند"}],
["b3", {original: "bulky", translated: "حجیم"}],
["b4", {original: "exaggerating", translated: "اغراق کردن"}],
["b5", {original: "weird", translated: "عجیب"}],
["b6", {original: "amateur", translated: "غیر جرفه ای"}],
["b7", {original: "reluctant", translated: "بی میل"}],
["b8", {original: "obvious", translated: "مشخص"}],
["b9", {original: "medicore", translated: "نمیدونم"}],
["b10", {original: "valid", translated: "معتبر"}],
["b11", {original: "security", translated: "بخش امنیت"}],
["b12", {original: "prominent", translated: "برجسته"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});