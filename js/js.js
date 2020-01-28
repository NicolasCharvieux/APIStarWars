//todo      Fonction principale :


var b = document.getElementById("affiche");
b.addEventListener("click", function() { star() });
var nextlink = " "
var previouslink = " "

function star() {
    fetch('https://swapi.co/api/people/')
        .then(
            function(response) {
                // console.log(response)
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
                    document.getElementById("tableau")
                        // document.getElementById("liste").innerHTML += "<p>" + data.results[i].name + "</p>"
                    p.addEventListener("click", function() { detail(data.results[i].url) });
                    document.getElementById("liste").appendChild(p)
                }
            }
        )
}


//todo      Fonction boutton "suivant" :


var page = 1
document.getElementById("sui").addEventListener("click", function() { affichages() });

function affichages() {
    page++
    fetch(nextlink)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                document.getElementById("liste").innerHTML = " "
                nextlink = data.next
                previouslink = data.previous
                for (let i = 0; i <= 9; i++) {
                    var p = document.createElement("span")
                    p.innerHTML = data.results[i].name + " Voir les détails ►"
                        //p.innerHTML = '<span onclick="detail(1)"> tetst </span>';
                    document.getElementById("tableau")
                        // document.getElementById("liste").innerHTML += "<p>" + data.results[i].name + "</p>"
                    p.addEventListener("click", function() { detail(data.results[i].url) });
                    document.getElementById("liste").appendChild(p)
                }
            }
        )
}


//todo      Fonction boutton "précédent" :


var page = 1
document.getElementById("pre").addEventListener("click", function() { affichagep() });

function affichagep() {
    page--
    fetch(previouslink)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                document.getElementById("liste").innerHTML = " "
                nextlink = data.next
                previouslink = data.previous
                for (let i = 0; i <= 9; i++) {
                    var p = document.createElement("span")
                    p.innerHTML = data.results[i].name + " Voir les détails ►"
                        //p.innerHTML = '<span onclick="detail(1)"> tetst </span>';
                    document.getElementById("tableau")
                        // document.getElementById("liste").innerHTML += "<p>" + data.results[i].name + "</p>"
                    p.addEventListener("click", function() { detail(data.results[i].url) });
                    document.getElementById("liste").appendChild(p)
                }
            }
        )
}


//todo      Fonction affichage des détails des Personnages :


function detail(nom) {
    fetch(nom)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                document.getElementById("param").innerHTML = " "
                document.getElementById("param").innerHTML += "<h2>NOM</h2><p>" + data.name + "</p><br>"
                document.getElementById("param").innerHTML += "<h2>HAUTEUR</h2><p>" + data.height + "</p><br>"
                document.getElementById("param").innerHTML += "<h2>POIDS</h2><p>" + data.mass + "</p><br>"
                document.getElementById("param").innerHTML += "<h2>COULEUR DE CHEVEUX</h2><p>" + data.hair_color + "</p><br>"
                document.getElementById("param").innerHTML += "<h2>COULEUR DE VÊTEMENT</h2><p>" + data.skin_color + "</p><br>"
                document.getElementById("param").innerHTML += "<h2>COULEUR DES YEUX</h2><p>" + data.eye_color + "</p><br>"
                document.getElementById("param").innerHTML += "<h2>ANNÉE DE NAISSANCE</h2><p>" + data.birth_year + "</p><br>"
                document.getElementById("param").innerHTML += "<h2>GENRE</h2><p>" + data.gender + "</p><br>"
            }
        )
}