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
["b1", {original: "century", translated: "قرن"}],
["b2", {original: "vicinity", translated: "در نزدیکی"}],
["b3", {original: "lack", translated: "کمبود"}],
["b4", {original: "undeniable", translated: "انکار نا پذیر"}],
["b5", {original: "challenges", translated: "چالش"}],
["b6", {original: "resist", translated: "مقاومت"}],
["b7", {original: "concludes", translated: "نتیجه گرفتن"}],
["b8", {original: "rage", translated: "خشم"}],
["b9", {original: "ignored", translated: "نادیده گرفتن"}],
["b10", {original: "document", translated: "سند"}],
["b11", {original: "source", translated: "منبع "}],
["b12", {original: "miniature", translated: "کوتاه"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});