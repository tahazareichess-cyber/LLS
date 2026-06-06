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
["b1", {original: "uneasy", translated: "مضطرب"}],
["b2", {original: "caculate", translated: "حساب کردن"}],
["b3", {original: "appropriate", translated: "مناسب"}],
["b4", {original: "ban", translated: "توقیف"}],
["b5", {original: "panic", translated: "وحشت"}],
["b6", {original: "abundant", translated: "فراوان"}],
["b7", {original: "absorb", translated: "جذب کردن"}],
["b8", {original: "morsel", translated: "لقمه کوچک"}],
["b9", {original: "threat", translated: "تهدید"}],
["b10", {original: "harvest", translated: "برداشت"}],
["b11", {original: "estimate", translated: "بر آورد"}],
["b12", {original: "quota", translated: "سهمیه"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});