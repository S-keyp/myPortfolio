// Code JavaScript pour désactiver les soumissions de formulaires s'il y a des champs non valides
(function () {
  "use strict";

  // Récupérez tous les formulaires auxquels nous voulons appliquer des styles de validation Bootstrap personnalisés
  let forms = document.querySelectorAll(".needs-validation");

  // Boucle sur les champs et empêche la soumission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Masquer les champs spécifiques et les afficher le moment venu
function showDiv(select) {
  if (select.value == 1 || select.value == 2) {
    document.getElementById("hidden_entreprise").style.display = "flex";
    document.getElementById("hidden_particulier").style.display = "none";
  } else {
    document.getElementById("hidden_entreprise").style.display = "none";
    document.getElementById("hidden_particulier").style.display = "flex";
  }
}
