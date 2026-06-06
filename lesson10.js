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
["b1", {original: "excel", translated: "برتری داشتن"}],
["b2", {original: "feminine", translated: "زنانه"}],
["b3", {original: "flexible", translated: "منعطف"}],
["b4", {original: "tendency", translated: "تمایل"}],
["b5", {original: "dread", translated: "ترس"}],
["b6", {original: "masculine", translated: "مردانه"}],
["b7", {original: "compete", translated: "رقابت"}],
["b8", {original: "victorious", translated: "پیروز"}],
["b9", {original: "numerous", translated: "بیشمار"}],
["b10", {original: "menaces", translated: "تمدیدکردن"}],
["b11", {original: "underestimates", translated: "دست کم گرفتن"}],
["b12", {original: "mount", translated: "برگزار کردن"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});