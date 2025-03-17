document.addEventListener("DOMContentLoaded", function () {
    const mainDiv = document.getElementById("main");
    
    const paragraphs = mainDiv.getElementsByTagName("p");
    
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontSize = "24px";
        paragraphs[i].style.color = "red";
    }

    for (let i = 0; i < paragraphs.length; i++) {
        if (paragraphs[i].textContent.includes("Llamas and Chickens!")) {
            paragraphs[i].style.color = "red";
        }
    }
});
