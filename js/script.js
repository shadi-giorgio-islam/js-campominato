// Il computer deve generare 16 numeri casuali tra 1 e 100. In seguito deve chiedere all’utente di inserire un
// numero alla volta, sempre compreso tra 1 e 100. Se il numero è presente nella lista dei numeri generati,
// la partita termina, altrimenti si continua chiedendo
// all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo
// possibile di numeri consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// EASY CAMPO MINATO
var numero;
var userInput;
var numeriCampo = [];
var numeriBombe = [];
var numeriInput = [];
// contatore campo
var n = 1;
// contatore bombe
var k = 0;
// contatore input utente
var p = 0;
// SELEZIONE DIFFICOLTA
var difficolta = parseInt(prompt('Inserisci 0 per difficoltà 0, 1 per difficoltà 1, 2 per difficoltà 2'));
document.getElementById('difficolta').innerHTML = 'HAI SCELTO DIFFICOLTA ' + difficolta; 
// NUMERI BOMBE
for (var i = 0; i < 16; i++) {
  numero = generaRandom(1, 100);
  if (numeriBombe.includes(numero) == false){
    numeriBombe.push(numero);
  }
  else {
    i--;
  }
}
numeriBombe.sort(function(a, b) {
  return a - b;
});
console.log(numeriBombe);
// NUMERI INPUT UTENTE
for (var q = 0; q < 84; q++) {
  userInput = parseInt(prompt('Inserisci numero'));
  if (numeriBombe.includes(userInput) == false) {
    numeriInput.push(userInput);
  }
  else {
    document.getElementById('esito').innerHTML = 'Hai perso con ' + q + ' tentativi';
    break;
  }
}
numeriInput.sort(function(a, b) {
  return a - b;
});
console.log(numeriInput);
// MATRICE CAMPO
switch (difficolta) {
  case 0:
    for (var z = 0; z < 10; z++) {
      document.getElementById('campo').innerHTML += '<br>';
      for (var j = 0; j < 10; j++) {
        if (n == numeriBombe[k]) {
          k++;
          document.getElementById('campo').innerHTML += '<span>💣</span>';
        }
        else if (n == numeriInput[p]) {
          p++;
          document.getElementById('campo').innerHTML += '<span>😀</span>';
        }
        else {
          document.getElementById('campo').innerHTML += '<span>⬜</span>';
        }
        n++;
        }
    }
    break;
    case 1:
      for (var z = 0; z < 8; z++) {
        document.getElementById('campo').innerHTML += '<br>';
        for (var j = 0; j < 10; j++) {
          if (n == numeriBombe[k]) {
            k++;
            document.getElementById('campo').innerHTML += '<span>💣</span>';
          }
          else if (n == numeriInput[p]) {
            p++;
            document.getElementById('campo').innerHTML += '<span>😀</span>';
          }
          else {
            document.getElementById('campo').innerHTML += '<span>⬜</span>';
          }
          n++;
          }
      }
      break;
      case 2:
        for (var z = 0; z < 5; z++) {
          document.getElementById('campo').innerHTML += '<br>';
          for (var j = 0; j < 10; j++) {
            if (n == numeriBombe[k]) {
              k++;
              document.getElementById('campo').innerHTML += '<span>💣</span>';
            }
            else if (n == numeriInput[p]) {
              p++;
              document.getElementById('campo').innerHTML += '<span>😀</span>';
            }
            else {
              document.getElementById('campo').innerHTML += '<span>⬜</span>';
            }
            n++;
            }
        }
        break;
}

// ****FUNZIONI****

function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
