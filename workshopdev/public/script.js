function newIdea() {
    document.querySelector("#modal").classList.toggle("hide");
    document.querySelector("body").classList.toggle("hideScroll");
    document.querySelector("#modal").classList.toggle("addScroll");
}

function goIdea() {
    document.querySelector("button.fat").addEventListener("click", newIdea());
}
