let htmlOutput = document.getElementById("app");
let usedAnswer = [];
const eightBallAnswers = [
  "Det er helt sikkert!",
  "Det er bestemt slik",
  "Tvetydig svar, prøv igjen",
  "Kan ikke forutsi nå",
  "Ikke regn med det",
  "Sikre kilder sier nei",
  "Utsiktene er ikke så gode",
  "Tegnene peker i riktig retning",
];

updateView();
function updateView() {
  const answer = shake8Ball();
  htmlOutput.innerHTML = /*html*/ `
   <div class="eightball">
     <img src="images/8-ball.jpg" alt="Magic 8 ball" />
     <br/>
     <div class="random-answer">${answer}</div>
     <br />
     <button onclick="updateView()">Rist på kula</button>
   </div>
   `;
}
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
