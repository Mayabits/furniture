function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
    }
}

function show() {
    document.getElementById('item3').style.visibility = 'visible';
}
window.onclick = function(e) {
    if (!e.target.matches("#link1")) {
      var myImage = document.getElementById("item3");
        if (myImage.classList.contains('show')) {
          myImage.classList.remove('show');
        }
    }

function init() {
    document.addEventListener("DOMContentLoaded",init);
    }
}
