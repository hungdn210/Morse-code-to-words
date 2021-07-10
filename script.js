
var data;
var wordsText = "", morseText = "", wordsData= "", letter = {};

function random(x) {
  return Math.floor(Math.random() * x);
}

function setUpValue() {
  morseText = "";
}

function start() {
  setUpValue();
  data = new Data();
  data.setUpMorseCode();
}