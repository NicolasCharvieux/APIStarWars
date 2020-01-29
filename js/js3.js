//!    Liste déroulante pour les personnages

var xhr = new XMLHttpRequest();

function rechercher() {
    xhr.onload = function() {
        var name = JSON.parse(xhr.responseText).results;

        for (i = 0; i < name.length; i++) {
            var liste = document.createElement("p");
            liste.setAttribute("onclick","detail('"+name[i].name+"','"+name[i].height+"','"+name[i].mass+"','"+name[i].gender+"');");
            var sec = document.getElementById("sec");
            sec.insertBefore(liste, sec.firstChild);
            liste.innerHTML = name[i].name;

        }
    }
    sec.innerHTML = " ";
    var inp = document.getElementById("rec").value;
    xhr.open('GET', 'https://swapi.co/api/people/?search=' + inp);
    xhr.send();
}

function detail(o,p,q,r) {
    var parents = document.getElementById("param3");
    var n = document.createElement("p");
    n.innerHTML += "<h2>NOM</h2><p>" + o + "</p><br>";
    var haut = document.createElement("p");
    haut.innerHTML += "<h2>HAUTEUR</h2><p>" + p + "</p><br>";
    var poids = document.createElement("p");
    poids.innerHTML += "<h2>POIDS</h2><p>" + q + "</p><br>";
    var genre = document.createElement("p");
    genre.innerHTML += "<h2>GENRE</h2><p>" + r + "</p><br>";
    document.getElementById("param3").innerHTML = " "
    parents.appendChild(n);
    parents.appendChild(haut);
    parents.appendChild(poids);
    parents.appendChild(genre);
}



//!    Liste déroulante pour les planètes

var xhr = new XMLHttpRequest();

function recherchez() {
    xhr.onload = function() {
        var name = JSON.parse(xhr.responseText).results;

        for (i = 0; i < 9; i++) {
            // var ij = name[i].name
            var list = document.createElement("p");
            list.setAttribute("onclick","detaille('"+name[i].name+"','"+name[i].climate+"','"+name[i].diameter+"');")
            var sect = document.getElementById("sect");
            sect.insertBefore(list, sect.firstChild);
            list.innerHTML = name[i].name;
        }
    }
    sect.innerHTML = " ";
    var inp = document.getElementById("rech").value;
    xhr.open('GET', 'https://swapi.co/api/planets/?search=' + inp);
    xhr.send();
}

function detaille(x,y,z) {
    var parents = document.getElementById("param3");
    var nom = document.createElement("p");
    nom.innerHTML += "<h2>NOM</h2><p>" + x + "</p><br>";
    var temp = document.createElement("p");
    temp.innerHTML += "<h2>CLIMAT</h2><p>" + y + "</p><br>";
    var diams = document.createElement("p");
    diams.innerHTML += "<h2>DIAMETRE</h2><p>" + z + "</p><br>";
    document.getElementById("param3").innerHTML = " "
    parents.appendChild(nom);
    parents.appendChild(temp);
    parents.appendChild(diams);
}