const button = document.getElementById("button");
const expressionParagraph = document.getElementById("favorite-expression");

button.addEventListener("click", function() {
  fetch("expression.txt")
    .then(response => response.text())
    .then(data => {
      expressionParagraph.innerHTML = data;
    });
    var span = document.getElementById("favorite-expression");
  if(span.style.display == "none") {
    span.style.display = "inline";
  } else {
    span.style.display = "none";
  }
});





  




