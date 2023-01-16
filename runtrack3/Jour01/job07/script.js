function jourtravaille(date) {
    var jour = date.getDate();
    var mois = date.getMonth() + 1;
    var annee = date.getFullYear();
    var jourSemaine = date.getDay();
    var joursFeries = [
        new Date(annee, 0, 1),
        new Date(annee, 4, 1),
        new Date(annee, 4, 8),
        new Date(annee, 6, 14),
        new Date(annee, 7, 15),
        new Date(annee, 10, 1),
        new Date(annee, 10, 11),
        new Date(annee, 11, 25)
    ];
    var jourFerie = false;
    for (var i = 0; i < joursFeries.length; i++) {
        if (joursFeries[i].getTime() === date.getTime()) {
            jourFerie = true;
        }
    }
    if (jourFerie) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié");
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, " + jour + "/" + mois + "/" + annee + " est un week-end");
    } else {
        console.log("Oui, " + jour + "/" + mois + "/" + annee + " est un jour travaillé");
    }
}

var date = new Date(2022, 11, 24);
jourtravaille(date);




