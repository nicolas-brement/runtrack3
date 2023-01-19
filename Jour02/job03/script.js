let button = document.getElementById("button");
let compteur = document.getElementById("compteur");
let count = 0;

button.addEventListener("click", addone);

function addone() {
  count++;
  compteur.innerHTML = count;
}



  




