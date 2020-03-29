function newIdea() {
    document.querySelector("#modal").classList.toggle("hide");
}

function goIdea() {
    document.querySelector("button.fat").addEventListener("click", newIdea());
}

// 