function osszesOszto(a) {
    var osztok = [];
    for (var i = 1; i <= a; i++) {
        if (a % i == 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szamTomb) {
    var parosDb = 0;
    for (var i = 0; i < szamTomb.length; i++) {
        if (szamTomb[i] % 2 == 0) {
            parosDb++;
        }
    }
    return parosDb;
}
function fuggvenyhivasPalindrom(fn) {
    var tartalom = fn();
    var tartalomVisszafele = tartalom.split('').reverse().join('');
    var palindromE = true;
    if (tartalom !== tartalomVisszafele) {
        palindromE = false;
    }
    return palindromE;
}
/*function fuggvenyhivasPalindrom(fn:() => string):boolean{
    var tartalom:string = fn();
    var palindromE:boolean = true;

    for(var i:number = 0; i < tartalom.length; i++){
        if(tartalom[i] != tartalom[tartalom.length - 1 - i]){
            palindromE = false;
        }
    }
    return palindromE;
}*/ 
