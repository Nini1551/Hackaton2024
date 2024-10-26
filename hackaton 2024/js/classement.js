"use strict";

let matchs = [
  { joueur1: "Nathan", joueur2: "Lemaire", score: "21-2", temps: 8 },
  { joueur1: "Yves", joueur2: "Delvigne", score: "24-7", temps: 5 },
  { joueur1: "Jonathan", joueur2: "Noel", score: "17-0", temps: 3 },
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

function tri(colonne) {
  const nomDeColonne = colonne.id;
  matchs.sort((a, b) => {
    if (nomDeColonne === "joueur1" || nomDeColonne === "joueur2") {
      return a[nomDeColonne]
        .toLowerCase()
        .localeCompare(b[nomDeColonne].toLowerCase());
    }
    if (nomDeColonne === "score") {
      const [scoreA] = a.score.split("-").map(Number);
      const [scoreB] = b.score.split("-").map(Number);
      return scoreA - scoreB;
    }
    if (nomDeColonne === "temps") {
      return a.temps - b.temps;
    }
    return 0;
  });
  createTbody(matchs);
}
