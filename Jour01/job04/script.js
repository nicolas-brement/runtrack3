function bisextile(annee) {
    if(annee % 4 == 0 && annee % 100 != 0) {
        return true;
    }else if(annee % 400 == 0) {
        return true;
    }else {
        return false;
    }
}

console.log(bisextile(2022));