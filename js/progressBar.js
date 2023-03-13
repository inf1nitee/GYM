var elem = document.getElementById("myBar");
var width = 0;
var id = setInterval(frame, 100);
function frame() {
  if (width == 100) {
    clearInterval(id);
    window.location = "login.html";
  } else {
    width++;
    elem.style.width = width + '%';
  }
}
