document.getElementById("menu-button").onclick = function() {
    document.getElementById("menu-container").classList.add('active');
};
document.getElementById("menu-close").onclick = function() {
    document.getElementById("menu-container").classList.remove('active');
};