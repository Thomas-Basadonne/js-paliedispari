// Palidroma
// Chiedere all'utente di inserire una parola
let parola = prompt("inserisci una parola");
// Creare una funzione per capire se la parola inserita è palindroma
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
  let ans = controlloPalindroma(str);
  //true or not
  if (ans == true) {
    console.log("è palindroma!");
  } else {
    console.log("non è palindroma!");
  }
}
// test variabile
// let test = "pietro";
// parolaPalindroma(test);

parolaPalindroma(parola);
