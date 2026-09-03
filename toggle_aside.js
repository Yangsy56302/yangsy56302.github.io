const aside = document.querySelector("aside");
aside.style.display = "none";

function toggleAside() {
    const current = aside.style.display;
    if (current == "flex") {
        aside.style.display = "none";
    } else {
        aside.style.display = "flex";
    }
}

document.getElementById("toggleAside").addEventListener("click", toggleAside);