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
["b1", {original: "approach", translated: "نزدیک شدن"}],
["b2", {original: "undoubtedly", translated: "بی شک"}],
["b3", {original: "neglect", translated: "بی توجهی"}],
["b4", {original: "detect", translated: "تشخیص دادن"}],
["b5", {original: "popular", translated: "محبوب"}],
["b6", {original: "defect", translated: "ایراد"}],
["b7", {original: "thorough", translated: "از میان"}],
["b8", {original: "decieve", translated: "فریب دادن"}],
["b9", {original: "employee", translated: "کارمند"}],
["b10", {original: "clients", translated: "مشتری"}],
["b11", {original: "defrauding", translated: "فریب دادن"}],
["b12", {original: "comprehensive", translated: "جامع"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});