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
["b1", {original: "bachelor", translated: "مجرد"}],
["b2", {original: "keen", translated: "تیز"}],
["b3", {original: "unaccustomed", translated: "غیر معمولی"}],
["b4", {original: "tact", translated: "تدبیر"}],
["b5", {original: "abandon", translated: "ترک کردن"}],
["b6", {original: "gallant", translated: "شجاع"}],
["b7", {original: "qualify", translated: "واجب شرایظ"}],
["b8", {original: "hardshitp", translated: "سختی"}],
["b9", {original: "vacant", translated: "خالی"}],
["b10", {original: "oath", translated: "سوگند"}],
["b11", {original: "jealous", translated: "حسود"}],
["b12", {original: "data", translated: "اطلاعات"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});
