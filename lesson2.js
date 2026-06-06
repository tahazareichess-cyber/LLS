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
["b1", {original: "frigid", translated: "خیلی سرد"}],
["b2", {original: "dismal", translated: "تاریک"}],
["b3", {original: "concealed", translated: "پنهان کردن"}],
["b4", {original: "inhabit", translated: "زندگی کردن"}],
["b5", {original: "numb", translated: "بی حس"}],
["b6", {original: "peril", translated: "خطرناک"}],
["b7", {original: "shriek", translated: "جیغ زدن"}],
["b8", {original: "corpse", translated: "جنازه"}],
["b9", {original: "reclined", translated: "دراز شدن"}],
["b10", {original: "wager", translated: "شرط بندی"}],
["b11", {original: "sinister", translated: "شیطانی"}],
["b12", {original: "tempt", translated: "متقاعد کردن"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});