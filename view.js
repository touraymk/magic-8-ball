/*Lag din egen Magic 8 Ball der man får et tilfeldig råd av den magiske,
  overdimensjonerte åtteballen.
  Ekstra: Gjør det slik at man aldri kan få det samme rådet etter hverandre.
 Bruk MVC, variabler, arrays og random for å løse oppgaven.*/

updateView();
function updateView() {
  const answer = shake8Ball();
  htmlOutput.innerHTML = /*html*/ `
   <div class="eightball">
     <img src="../images/8-ball.jpg" alt="Magic 8 ball" />
     <br/>
     <div class="random-answer">${answer}</div>
     <br />
     <button onclick="updateView()">Rist på kula</button>
   </div>
   `;
}
