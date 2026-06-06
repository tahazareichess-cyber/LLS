function copyText() {
    const textElement = document.getElementById("emailtaha");
    const text = textElement.innerText;
    const btn = document.getElementById("copyEmail");
    navigator.clipboard.writeText(text).then(() => {
        btn.innerText = "done";
        btn.classList.add("success");
        setTimeout(()=>{
            btn.innerText= "copytext";
            btn.classList.remove("success");
        },3000);
    }).catch(err => {
        console.error("error",err);
        alert("error")
    });
}
function copyText2() {
    const textElement = document.getElementById("phonetaha");
    const text = textElement.innerText;
    const btn = document.getElementById("copyNumber1");
    navigator.clipboard.writeText(text).then(() => {
        btn.innerText = "done";
        btn.classList.add("success");
        setTimeout(()=>{
            btn.innerText= "copytext";
            btn.classList.remove("success");
        },3000);
    }).catch(err => {
        console.error("error",err);
        alert("error")
    });
}
function copyText3() {
    const textElement = document.getElementById("phoneetaha");
    const text = textElement.innerText;
    const btn = document.getElementById("copyNumber2");
    navigator.clipboard.writeText(text).then(() => {
        btn.innerText = "done";
        btn.classList.add("success");
        setTimeout(()=>{
            btn.innerText= "copytext";
            btn.classList.remove("success");
        },3000);
    }).catch(err => {
        console.error("error",err);
        alert("error")
    });
}
