/*Lag din egen Magic 8 Ball der man får et tilfeldig råd av den magiske,
  overdimensjonerte åtteballen.
  Ekstra: Gjør det slik at man aldri kan få det samme rådet etter hverandre.
 Bruk MVC, variabler, arrays og random for å løse oppgaven.*/

//Model
let htmlOutput = document.getElementById("app");

let eightBallAnswers = [
  "Det er helt sikkert!",
  "Det er bestemt slik",
  "Tvetydig svar, prøv igjen",
  "Kan ikke forutsi nå",
  "Ikke regn med det",
  "Sikre kilder sier nei",
  "Utsiktene er ikke så gode",
  "Tegnene peker i riktig retning",
];

let usedAnswer = [];
