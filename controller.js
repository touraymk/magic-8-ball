/*Lag din egen Magic 8 Ball der man får et tilfeldig råd av den magiske,
  overdimensjonerte åtteballen.
  Ekstra: Gjør det slik at man aldri kan få det samme rådet etter hverandre.
 Bruk MVC, variabler, arrays og random for å løse oppgaven.*/

//Funksjon som svarer på ja/nei spørsmål når et svar er gitt fjernes det.
function shake8Ball() {
  if (usedAnswer.length === eightBallAnswers.length) {
    return `<b style="color: red;">Alle svarene er brukt opp!</b>`;
  }

  let randomIndex;
  let answer;

  do {
    randomIndex = Math.floor(Math.random() * eightBallAnswers.length);
    answer = eightBallAnswers[randomIndex];
  } while (usedAnswer.includes(answer));

  usedAnswer.push(answer);
  return answer;
}
