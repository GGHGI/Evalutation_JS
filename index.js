const projet = document.querySelector("form[role=search]");
ajouter.addEventlistener("submit"),search);
function search(event){
event.preventDefault();
let recherche = document.querySelector("#Recherche").value;

// const apiurl = ``;

fetch(apiUrl)
.then(function(response)){
return response.json();
})
.then(function(data){
    const p = ;
    const n = ;
    const k = ;
    const m = ;

    document.querySelector("#code").textContent = ;

    const additives = document.querySelector("#additives");
    additives.innerHTML = "Additifs  : <br />";
    p.additives_tags.forEach((element) => {
      additives.innerHTML += `  <span class="add"> ${element.replace(
        "en:",
        ""
      )} </span> <br />`;
    });

    // nutriscore
    let nutriscore = p.nutriscore_grade;
    console.log(nutriscore);
    switch (nutriscore) {
      case "a":
      case "b":
      case "c":
      case "d":
      case "e":
        document
          .querySelector("#nutriscore")
          .setAttribute("src", `/nutriscore${nutriscore}.png`);
        break;
      default:
        document.querySelector("#nutriscore").textContent = "non noté";
    }

    // calories
    document.querySelector(".quantcal").textContent = n["energy-kcal"];
    document.querySelector(".unitescal").textContent = n["energy-kcal_unit"];

  

    let fabtext = p.manufacturing_places;
    if (fabtext) {
      document.querySelector(".lieudefabrication").textContent =
        p.manufacturing_places;
    } else {
      document.querySelector(".lieudefabrication").textContent = "pas defini";
    }




}



}
