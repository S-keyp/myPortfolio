function init() {
    let req = new XMLHttpRequest(); 
    req.open("GET", "https://digicode.cleverapps.io/json/pays/pollution");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200){  
            let data = JSON.parse(req.responseText); 
            initialiserDonnees(data);           
        }
    }
    req.send();
}

function initialiserDonnees(data){
    let title = document.getElementById("titre");
    title.innerHTML = `Pays les plus polluants pour le ${data.polluant} (en ${data.unite}) en ${data.annee}`;

    let corps = document.getElementById("corps");
    for (let i = 0; i < data.pays.length; i++) {
        let tdDrappeau = document.createElement("td");
        let img = document.createElement("img"); 
        let tdNom = document.createElement("td");
        let tdValeur = document.createElement("td");
        let tdPourcentage = document.createElement("td");
        let tr = document.createElement("tr");
        img.src=`https://www.countryflags.io/${data.pays[i].code}/flat/32.png`
        tdDrappeau.appendChild(img);
        tdNom.innerHTML = data.pays[i].nom;
        tdValeur.innerHTML = data.pays[i].valeur;
        tdPourcentage.innerHTML = data.pays[i].pourcentage;
        tr.appendChild(tdDrappeau);
        tr.appendChild(tdNom);
        tr.appendChild(tdValeur);
        tr.appendChild(tdPourcentage);
        corps.appendChild(tr);
    }
}
