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
["b1", {original: "devise", translated: "اختراع کردن"}],
["b2", {original: "essential", translated: "ضروری"}],
["b3", {original: "scarce", translated: "کمیاب"}],
["b4", {original: "talent", translated: "استعداد"}],
["b5", {original: "blend", translated: "ترکیب کردن"}],
["b6", {original: "persuade", translated: "ترغیت کردن"}],
["b7", {original: "typical", translated: "معمولی"}],
["b8", {original: "minimum", translated: "حداقل"}],
["b9", {original: "annually", translated: "سالی یک بار"}],
["b10", {original: "visible", translated: "قابل مشاهده"}],
["b11", {original: "expensive", translated: "گران"}],
["b12", {original: "wholesale", translated: "به طور عمده"}],
]);
wordMap.forEach((value , id ) =>{
    const tra = document.getElementById(id);

    tra.addEventListener("click",()=>{
        tra.textContent = 
        tra.textContent === value.original ? value.translated
        : value.original;
    });
});