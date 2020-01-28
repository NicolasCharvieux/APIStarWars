var xhr = new XMLHttpRequest();

function rechercher() {
    xhr.onload = function() {
        var name = JSON.parse(xhr.responseText).results;

        for (i = 0; i < name.length; i++) {
            var liste = document.createElement("p");
            var sec = document.getElementById("sec");
            // console.log(name[i].prenom);
            sec.insertBefore(liste, sec.firstChild);
            liste.innerHTML = name[i].name;

        }
    }
    sec.innerHTML = " ";
    var inp = document.getElementById("rec").value;
    xhr.open('GET', 'https://swapi.co/api/people/?search=' + inp);
    xhr.send();
}

var xhr = new XMLHttpRequest();

function rechercher() {
    xhr.onload = function() {
        var name = JSON.parse(xhr.responseText).results;

        for (i = 0; i < name.length; i++) {
            var liste = document.createElement("p");
            var sec = document.getElementById("sec2");
            // console.log(name[i].prenom);
            sec.insertBefore(liste, sec.firstChild);
            liste.innerHTML = name[i].name;

        }
    }
    sec.innerHTML = " ";
    var inp = document.getElementById("rec2").value;
    xhr.open('GET', 'https://swapi.co/api/planets/?search=' + inp);
    xhr.send();
}