const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
<<<<<<< HEAD

=======
var facts = ["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice","foo","bar"];
>>>>>>> 77c141d9a0f28a6620963b0c266d106c949f88a6



function theBeatlesPlay (artist,piece){
var array = [];
for (var i = 0; i < musicians.length; i++){
   array[i] = musicians[i] + ' plays ' + instruments[i];
}
  return array;
}

<<<<<<< HEAD
function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
=======
function johnLennonFacts (fact){
  
  var i = 0;
  while (i < fact.length){
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts ;
>>>>>>> 77c141d9a0f28a6620963b0c266d106c949f88a6
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



