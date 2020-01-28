//todo      Fonction principale :


var b = document.getElementById("affiche2");
b.addEventListener("click", function() { wars() });
var nextlink = " "
var previouslink = " "

function wars() {
    fetch('https://swapi.co/api/planets/')
        .then(
            function(response) {
                console.log(response)
                return response.json();
            }
        )
        .then(
            function(data) {
                nextlink = data.next
                previouslink = data.previous
                for (let i = 0; i <= 9; i++) {
                    var p = document.createElement("span")
                    p.innerHTML = data.results[i].name + " Voir les détails ►"
                        // p.innerHTML = '<span onclick="detail(1)"> tetst </span>';
                    document.getElementById("tableau2")
                        // document.getElementById("liste").innerHTML += "<p>" + data.results[i].name + "</p>"
                    p.addEventListener("click", function() { detail(data.results[i].url) });
                    document.getElementById("liste2").appendChild(p)
                }
            }
        )
}


//todo      Fonction boutton "suivant" :


var page = 1
document.getElementById("sui2").addEventListener("click", function() { affichages2() });

function affichages2() {
    page++
    fetch(nextlink)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                document.getElementById("liste2").innerHTML = " "
                nextlink = data.next
                previouslink = data.previous
                for (let i = 0; i <= 9; i++) {
                    var p = document.createElement("span")
                    p.innerHTML = data.results[i].name + " Voir les détails ►"
                        //p.innerHTML = '<span onclick="detail(1)"> tetst </span>';
                    document.getElementById("tableau2")
                        // document.getElementById("liste").innerHTML += "<p>" + data.results[i].name + "</p>"
                    p.addEventListener("click", function() { detail(data.results[i].url) });
                    document.getElementById("liste2").appendChild(p)
                }
            }
        )
}


//todo      Fonction boutton "précédent" :


var page = 1
document.getElementById("pre2").addEventListener("click", function() { affichagep2() });

function affichagep2() {
    page--
    fetch(previouslink)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                document.getElementById("liste2").innerHTML = " "
                nextlink = data.next
                previouslink = data.previous
                for (let i = 0; i <= 9; i++) {
                    var p = document.createElement("span")
                    p.innerHTML = data.results[i].name + " Voir les détails ►"
                        //p.innerHTML = '<span onclick="detail(1)"> tetst </span>';
                    document.getElementById("tableau2")
                        // document.getElementById("liste").innerHTML += "<p>" + data.results[i].name + "</p>"
                    p.addEventListener("click", function() { detail(data.results[i].url) });
                    document.getElementById("liste2").appendChild(p)
                }
            }
        )
}


//todo      Fonction affichage des détails des Planètes :


function detail(nom2) {
    fetch(nom2)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                document.getElementById("param2").innerHTML = " "
                document.getElementById("param2").innerHTML += "<h2>NOM</h2><p>" + data.name + "</p><br>"
                document.getElementById("param2").innerHTML += "<h2>PÉRIODE DE ROTATION</h2><p>" + data.rotation_period + "</p><br>"
                document.getElementById("param2").innerHTML += "<h2>PÉRIODE ORBITAL</h2><p>" + data.orbital_period + "</p><br>"
                document.getElementById("param2").innerHTML += "<h2>DIAMETRE</h2><p>" + data.diameter + "</p><br>"
                document.getElementById("param2").innerHTML += "<h2>CLIMAT</h2><p>" + data.climate + "</p><br>"
                document.getElementById("param2").innerHTML += "<h2>GRAVITÉ</h2><p>" + data.gravity + "</p><br>"
                document.getElementById("param2").innerHTML += "<h2>TERRAIN</h2><p>" + data.terrain + "</p><br>"
                document.getElementById("param2").innerHTML += "<h2>SURFACE D'EAU</h2><p>" + data.surface_water + "</p><br>"
                document.getElementById("param2").innerHTML += "<h2>POPULATION</h2><p>" + data.population + "</p><br>"
            }
        )
}