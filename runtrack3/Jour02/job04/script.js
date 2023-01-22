document.getElementById("keylogger").addEventListener("focusin", function(){
  isInFocus = true;
});
document.getElementById("keylogger").addEventListener("focusout", function(){
  isInFocus = false;
});
document.onkeypress = function(e) {
e = e || window.event;
var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
if (charCode >= 97 && charCode <= 122) {
  if (document.activeElement.id == "keylogger") {
      document.getElementById("keylogger").value += String.fromCharCode(charCode);
  } else {
      document.getElementById("keylogger").value += String.fromCharCode(charCode);
  }
}
};





  




