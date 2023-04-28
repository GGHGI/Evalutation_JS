const exo = document.querySelector("form[role=search]");

const apiUrl = "https://geo.api.gouv.fr/communes?codePostal=";
const format = "&format=json&fields=nom";

const postal = document.querySelector("#postal");
const listeVilles = document.querySelector("#listevilles");
const effacerBtn = document.querySelector("#effacer");

exo.addEventListener("submit", function (event) {
  event.preventDefault();
});

effacerBtn.addEventListener("click", function () {
  postal.value = "";
  listeVilles.innerHTML = "";
});

postal.addEventListener("input", function () {
  const postalV = this.value;
  if (postalV.length === 5) {
    const url = apiUrl + postalV + format;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        listeVilles.innerHTML = "";
        data.forEach(function (value, index) {
          const option = document.createElement("option");
          option.value = value.nom;

          if (index == 0) {
            document.querySelector("#ville").setAttribute("value", value.nom);
          }

          listeVilles.appendChild(option);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    listeVilles.innerHTML = "";
  }
});
