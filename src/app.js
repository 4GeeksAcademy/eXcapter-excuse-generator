/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#the-excuse").innerHTML = generateExcuse();

  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["The cat", "My grandma", "His phoenix", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my hand", "the keys", "the car"];
  let when = [
    "before the hike",
    "just in time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  let randomNumber = (wordArray) => {
    return Math.floor(Math.random() * wordArray.length);
  };

  let excuse = "";

  let selectWho = () => {
    return (excuse += who[randomNumber(who)] + " ");
  };

  let selectAction = () => {
    return (excuse += action[randomNumber(action)] + " ");
  };

  let selectWhat = () => {
    return (excuse += what[randomNumber(what)] + " ");
  };

  let selectWhen = () => {
    return (excuse += when[randomNumber(when)] + ".");
  };
  selectWho();
  selectAction();
  selectWhat();
  selectWhen();
  return excuse;
};
