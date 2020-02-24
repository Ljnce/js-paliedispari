//Esercizio 1

var parola = prompt('inserisci parola');
var parolaReverse = giraParola(parola);

function giraParola(parola) {
    var letter = '';
    for (var i = parola.length - 1; i >= 0; i--) {
        letter += parola[i];
    }
    return letter;
}

if (parola == parolaReverse) {
    console.log('palindroma');
}else {
    console.log('non era palindroma');
}


//Esercizio 2

//Prompt vuoi un numero pari o dispari?
var pariODispari = prompt('pari o dispari?');

//Promp che numero vuoi?
var scegliUnNumero = parseInt(prompt('scegli un numero'));

//Generatore numero random
var numero = generaRandomMinMax(1, 5);
 function generaRandomMinMax(min, max) {
     var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
     return numeroRandom;
 }
 console.log(numero);


var somma = scegliUnNumero + numero;
console.log(somma);
var somma2 = pariDispari(somma);
console.log(somma2);

//Somma numero scelto + numero random
function pariDispari(num) {
    if(num % 2 == 0){
        return ('pari');
    } else {
        return ('dispari');
    }
}

if (somma2 == pariDispari) {
    console.log('hai vinto');

}else {
    console.log('hai perso');
}
