function navShow(){
    document.getElementById("nav-menu").style.display = "block";
    document.getElementById("empty-div").style.width = "100%";
    document.getElementById("empty-div").style.height = "500vh";
    document.getElementById("empty-div").style.position = "absolute";
    document.getElementById("empty-div").style.display = "block";
}
function navHide(){
    document.getElementById("nav-menu").style.display = "none";
    document.getElementById("empty-div").style.display = "none";
}