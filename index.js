const btns = document.querySelectorAll(".btn");
const body = document.body;
btns.forEach((btn) => {
    btn.addEventListener("click",() => {
        no = btn.value;
        changeBackground(no);
    });
});
function changeBackground(no) {
    body.Classname="";
    switch(no) {
        case "red":
            body.classList.add("red");
        break;
        case "blue":
            body.classList.add("blue");
        break;
        case "yellow":
            body.classList.add("yellow");
        break;
        case "green":body.classList.add("green");
        break;
        case "purple":body.classList.add("purple");
        break;
        case "gold":
            body.classList.add("gold");
        break;
        default:
            break;
    }

}