// Palidroma
// Chiedere all'utente di inserire una parola
let parola = prompt("inserisci una parola");
/**
 *
 * @param {string} word parametro che contiene la parola da verificare
 * @param {string|false} ritorna vero se la parola è palindroma altrimenti falso
 *
 *
 * Creare una funzione per capire se la parola inserita è palindroma
 */
function controlloPalindroma(str) {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = str[i]; //forward character
    let y = str[j - i]; //backward character
    if (x != y) {
      // return false if string not match
      return false;
    }
  }
  /// return true if string is palindrome
  return true;
}

//function that print output if string is palindrome
function parolaPalindroma(str) {
  // variable vera se la stringa è palindroma
  let result = controlloPalindroma(str);
  //true or not
  if (result == true) {
    console.log("è palindroma!");
  } else {
    console.log("non è palindroma!");
  }
}
// test variabile
// let test = "pietro";
// parolaPalindroma(test);

parolaPalindroma(parola);

/***************************************************
 *
 *              correzione
 *
 **************************************************/
const userWord = prompt("inserisci parola");

if (isPalindrome(userWord)) {
  console.log("è palindroma");
} else {
  console.log("non è palindroma");
}

function isPalindrome(word) {
  let reverseWord = "";
  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    console.log(currentLetter);

    reverseWord = currentLetter + reverseWord;
    console.log(currentLetter);
  }
  console.log(reverseWord);

  if (word == reverseWord) {
    return "true";
  }
}
