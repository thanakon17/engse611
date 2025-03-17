document.addEventListener("DOMContentLoaded", function () {
    const mainDiv = document.getElementById("main");
    
    if (mainDiv) {
        const paragraphs = mainDiv.getElementsByTagName("p");
        
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.fontSize = "24px";
            paragraphs[i].style.color = "red";
        }
    }

    if (mainDiv) {
        const paragraphs = mainDiv.getElementsByTagName("p");
        for (let i = 0; i < paragraphs.length; i++) {
            if (paragraphs[i].textContent.includes("Llamas and Chickens!")) {
                paragraphs[i].style.color = "red";
            }
        }
    }

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert("clicked!");
        });
    });
});