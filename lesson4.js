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
["b1", {original: "humid", translated: "مرطوب"}],
["b2", {original: "dense", translated: "متراکم"}],
["b3", {original: "vanish", translated: "غیب شدن"}],
["b4", {original: "villian", translated: "آدم شرور"}],
["b5", {original: "eliminate", translated: "حذف کردن"}],
["b6", {original: "utilize", translated: "استفاده کردن"}],
["b7", {original: "vapor", translated: "بخار آب"}],
["b8", {original: "enormous", translated: "بزرگ"}],
["b9", {original: "predict", translated: "پیشبینی"}],
["b10", {original: "descend", translated: "سقوط"}],
["b11", {original: "circulate", translated: "به گردش در آوردن"}],
["b12", {original: "theory", translated: "تیوری"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});