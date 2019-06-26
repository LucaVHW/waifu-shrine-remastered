function add(x,b){
 var d = document.getElementById(x);
 d.className += " is-hidden";
 var b = document.getElementById(b);
 b.classList.remove("is-hidden");
}
function remove(x){
  var b = document.getElementById(b);
  b.className += " is-hidden";
 var d = document.getElementById(x);
 d.classList.remove("is-hidden");
}
