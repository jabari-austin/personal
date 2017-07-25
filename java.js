var navToggle = document.getElementById('nav-toggle');
var nav = document.getElementById('navbar');

navToggle.addEventListener('click',function(){
  nav.classList.toggle('mobile-nav-hidden');
});


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}