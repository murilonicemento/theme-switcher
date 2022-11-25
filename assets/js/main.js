const button = document.querySelector("label");

button.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    const ball = document.querySelector("label span img");
    if(document.body.classList.contains("dark")){
        ball.style.marginLeft = "10px";
    }else {
        ball.style.marginLeft = "140px";
    }
})