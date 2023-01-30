// Chiedo all'utente il nome
let firstName
firstName = prompt("Qual è il tuo nome?")
console.log(firstName)
// Chiedo all'utente il cognome
let lastName
lastName = prompt("E il tuo cognome?")
console.log(lastName)
// Chiedo all'utente il colore preferito
let color
color = prompt("Qual è il tuo colore preferito?")
console.log(color)
// Chiedo all'utente un numero
let number
number = prompt("Ora dimmi un numero")
console.log(number)
// Ora concateno le variabili
let password
password = firstName + lastName + color + number
console.log(firstName + lastName + color + number)
// Sostituisco l'h1 nell'html
document.getElementById("password").innerHTML = password