/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let dominio = [".com", ".org", ".net", ".io"];
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < noun.length; j++) {
    for (let p = 0; p < adj.length; p++) {
      for (let r = 0; r < dominio.length; r++) {
        let resultado = pronoun[i] + noun[j] + adj[p] + dominio[r];
        console.log(resultado);
      }
    }
  }
}
