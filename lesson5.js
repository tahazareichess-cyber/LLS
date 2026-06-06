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
["b1", {original: "majority", translated: "اکثریت"}],
["b2", {original: "tradition", translated: "رسم"}],
["b3", {original: "rural", translated: "روستایی"}],
["b4", {original: "debate", translated: "بحث"}],
["b5", {original: "topic", translated: "موضوع"}],
["b6", {original: "assembled", translated: "سرهم کردن"}],
["b7", {original: "campus", translated: "محوطه دانشگاه"}],
["b8", {original: "explore", translated: "کاوش"}],
["b9", {original: "probe", translated: "جست جو"}],
["b10", {original: "evades", translated: "فرار از دشمن"}],
["b11", {original: "burden", translated: "بار کردن"}],
["b12", {original: "reform", translated: "اصلاح کردن"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});