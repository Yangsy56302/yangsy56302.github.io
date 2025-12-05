function reloadCSS() {
    for (let element of document.querySelectorAll(`link[type="text/css"]`)) {
        var newElement = element.cloneNode(true);
        newElement.href += '?reload=' + new Date().getTime();
        element.parentNode.replaceChild(newElement, element);
    }
}

document.getElementById("reloadCSS").addEventListener("click", reloadCSS);