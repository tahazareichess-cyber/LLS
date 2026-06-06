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
["b1", {original: "postpone", translated: "به تعویق انداختن"}],
["b2", {original: "capsule", translated: "کپسول"}],
["b3", {original: "torrent", translated: "تند اب"}],
["b4", {original: "consent", translated: "رضابت"}],
["b5", {original: "uniqe", translated: "خاص"}],
["b6", {original: "preserve", translated: "حفظ کردن"}],
["b7", {original: "resented", translated: "آزرده خاطر"}],
["b8", {original: "denounced", translated: "متهم کردن"}],
["b9", {original: "massive", translated: "خیلی بزرگ"}],
["b10", {original: "unforeseen", translated: "پیشبینی نشده"}],
["b11", {original: "gloomy", translated: "غم افزا"}],
["b12", {original: "molest", translated: "تجاوز کردن"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});