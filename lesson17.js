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
["b1", {original: "appeal", translated: "جالب"}],
["b2", {original: "addict", translated: "معتاد"}],
["b3", {original: "wary", translated: "بسیار محتاط"}],
["b4", {original: "aware", translated: "آگاه"}],
["b5", {original: "harsh", translated: "زننده"}],
["b6", {original: "quantity", translated: "کمیت"}],
["b7", {original: "avoid", translated: "دوری"}],
["b8", {original: "misfortune", translated: "بد شانسی"}],
["b9", {original: "nourish", translated: "تغذیه"}],
["b10", {original: "wretched", translated: "بدبخت"}],
["b11", {original: "opt", translated: "انتخاب کردن"}],
["b12", {original: "keg", translated: "بشکه کوچک"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});