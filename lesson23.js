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
["b1", {original: b1.innerText, translated: "نمایش دادن"}],
["b2", {original: b2.innerText, translated: "منطقی"}],
["b3", {original: b3.innerText, translated: "احتیاط"}],
["b4", {original: b4.innerText, translated: "منع کردن"}],
["b5", {original: b5.innerText, translated: "بیرون کشیدن"}],
["b6", {original: b6.innerText, translated: "خزنده"}],
["b7", {original: b7.innerText, translated: "جزیی"}],
["b8", {original: b8.innerText, translated: "پذیرفتن"}],
["b9", {original: b9.innerText, translated: "ادامه دادن"}],
["b10", {original: b10.innerText, translated: "به ندرت"}],
["b11", {original: b11.innerText, translated: "شجاع"}],
["b12", {original: b12.innerText, translated: "به تازگی"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});