/*
 - variable
 - prompt 
 - console.log 
 - document
*/

// Chiedi all'utente il suo nome
const user_name = prompt('Inserisci il tuo nome');
console.log(user_name);

// Chiedi all'utente il suo cognome
const user_surname = prompt('Inserisci il tuo cognome');
console.log(user_surname);

// Chiedi all'utente il suo colore preferito
const user_color = prompt('Inserisci il tuo colore preferito');
console.log(user_color);

// Salva la password dell'utente e loggala in console
const user_pass =  `${user_name + user_surname + user_color} + 23`;
console.log(user_pass);

// Scrivi sulla pagina la password dell'utente
document.getElementById('password').innerHTML = `Ciao, questa è la tua password! ${user_name + user_surname + user_color + 23}`;
