// Pari e Dispari
// L'utente sceglie pari o dispari

var pariDispari = document.getElementById("evenOdd");
var selectedIndex = pariDispari.selectedIndex;
var valoreSelezionato = pariDispari.options[selectedIndex];
console.log(valoreSelezionato);

// e inserisce un numero da 1 a 5.
let numeroUtente = parseInt(prompt("scegli un numero da 1 a 5!"));
console.log(numeroUtente);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
function tiraDadi() {
  let dado1 = numeroUtente;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice").innerHTML = dado1 + " , " + dado2;
  return dado1 + dado2;
}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function risultato() {
  let resto = tiraDadi() % 2;
  if ((pariSelezionato == resto) == 0) {
    document.getElementById("evenodd").innerHTML = "PARI";
  } else {
    document.getElementById("evenodd").innerHTML = "DISPARI";
  }
  return;
}

/************************************************************
 *
 *                      correzione
 *
 ************************************************************/

// ON LOAD
// utente sceglie pari o dispari
const userChoice = prompt("scrivi 'pari' o 'dispari'");
if (userChoice != "pari" && userChoice != "dispari") {
  userChoice = "pari";
  alert = "ho scelto pari per te!";
}

// l'utente sceglie un numero
let userNumber = parseInt(prompt("scegli un numero da 1 a 5!"));

// generiamo il numero random

const pcNumber = generateRandomNumber(1, 5);

// somma 2 numeri

let gameTotal = userNumber + pcNumber;

// stabiliamo somma pari o dispari
let userWon = false;
if (isEven(gameTotal)) {
  if (userChoice == "pari") console.log("hai vinto!");
  userWon = true;
} else {
  if (userChoice == "dispari") console.log("hai vinto!");
  userWon = true;
}

if (userWon) {
  console.log("hai vinto!");
} else {
  console.log("hai perso!");
}

// FUNCTIONS

// Funzione che genera i numeri
/** @param {int} min valore minimo generato */
/** @param {int} max valore massimo generato */
/** @return {int} numero randomico generato tra min e max */
//

function generateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

// numero pari o dispari
/** @param {int} num valore da verificare  */
/** @param {boolean} pari o dispari */
//

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}
