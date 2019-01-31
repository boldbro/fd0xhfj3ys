function fdCalc(){
var A="";
var P="";
var r="";
var T="";
var n="";
P = parseFloat(document.getElementById("principle").value);
r = parseFloat(document.getElementById("rate").value);
t = parseFloat(document.getElementById("time").value);
n = parseFloat(document.getElementById("compound").value);
rFinal = r / 100.0;
A = Math.round(P * (Math.pow(parseFloat(1 + (rFinal/n)), (n * t))));
document.getElementById("initial-amount").textContent = P;
document.getElementById("final-amount").textContent = A;
document.getElementById("interest-amount").textContent = A - P;
} 
function mobileMenu(el, className) {
 var el = document.querySelectorAll(el);
  
  for (i = 0; i < el.length; i++) {
  
    if (el[i].classList) {
      el[i].classList.toggle(className);
    } else {
        var classes = el[i].className.split(' ');
        var existingIndex = -1;
        for (var j = classes.length; j--;) {
          if (classes[j] === className)
            existingIndex = j;
        }

        if (existingIndex >= 0)
          classes.splice(existingIndex, 1);
        else
          classes.push(className);

      el[i].className = classes.join(' ');
    }
  }
}
