var monBouton = document.getElementById("mon-bouton");

monBouton.addEventListener("click", function() {
  window.location.href = "index.html";
});


// Optionnel : Ajouter une classe "active" au lien actif
var liens = document.querySelectorAll(".nav-item a");

for (var i = 0; i < liens.length; i++) {
  liens[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const button = document.getElementById("button");

button.addEventListener("click", function() {
	alert("Vous avez cliqué sur le bouton incroyable !");
});