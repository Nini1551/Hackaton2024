"use strict";

let matchs = [
  { joueur1: "nathan", joueur2: "Lemaire", score: "21-2", temps: 8 },
  { joueur1: "Argaba", joueur2: "xxxxx", score: "24-7", temps: 5 },
  { joueur1: "William", joueur2: "yyyy", score: "17-0", temps: 3 },
  // Add more matches as needed...
];

function onload() {
  createTbody(matchs);
}

function createTbody(liste) {
  let tbody = document.getElementById("score-body");
  let ajout = "";
  for (let match of liste) {
    ajout += `
        <tr class="score-row">
        <td class="player-cell">${match.joueur1}</td>
        <td class="player-cell">${match.joueur2}</td>
        <td class="score-cell">${match.score}</td>
        <td class="time-cell">${match.temps} minutes</td>
        </tr>
        `;
  }
  tbody.innerHTML = ajout;
}
