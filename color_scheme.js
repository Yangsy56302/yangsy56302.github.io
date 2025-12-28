document.querySelector(`meta[name="color-scheme"]`).setAttribute("content", localStorage.getItem("color-scheme"));

function setLightMode() {
    document.querySelector(`meta[name="color-scheme"]`).setAttribute("content", "light");
    localStorage.setItem("color-scheme", "light");
}

function setAutoMode() {
    document.querySelector(`meta[name="color-scheme"]`).setAttribute("content", "light dark");
    localStorage.setItem("color-scheme", "light dark");
}

function setDarkMode() {
    document.querySelector(`meta[name="color-scheme"]`).setAttribute("content", "dark");
    localStorage.setItem("color-scheme", "dark");
}

document.getElementById("setLightMode").addEventListener("click", setLightMode);
document.getElementById("setAutoMode").addEventListener("click", setAutoMode);
document.getElementById("setDarkMode").addEventListener("click", setDarkMode);