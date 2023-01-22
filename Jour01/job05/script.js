function afficherJoursSemaines() {
    const joursSemaines = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

    for(i = 0; typeof(joursSemaines[i]) != "undefined" ; i++) {
        console.log(joursSemaines[i]);
    }
}

console.log(afficherJoursSemaines()); 