const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var facts = ["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice","foo","bar"];

function theBeatlesPlay (artist,piece){
var array = [];
for (var i = 0; i < musicians.length; i++){
   musicians[0] = artist;
   instruments[0] = piece;
   array[0] = musicians[0] + ' plays ' + instruments[0];
}
  return array;
}

function johnLennonFacts (fact){
  var i = 0;
  while (i < fact.length){
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var repeat = [];
  var i = 0;
  do {
    repeat[i] = "I love the Beatles!";
    i++;
    number++;
  }
  while (number < 15);
  return repeat;
}



