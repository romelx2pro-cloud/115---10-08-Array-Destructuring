// const raceResults = [
//   'Eliud Kipchoge',
//   'Feyisa Lelisa',
//   'Galen Rupp',
//   'Ghirmay Ghebreslassie',
//   'Alphonce Simbu',
//   'Jared Ward'
// ];

// // The old way:
// // const gold = raceResults[0]
// // const silver = raceResults[1]
// // const bronze = raceResults[2]

// // Using Destructuring:
// const [gold, silver, bronze] = raceResults;
// gold; //'Eliud Kipchoge'
// silver; //'Feyisa Lelisa'
// bronze; //'Galen Rupp'

// const [first, , , fourth] = raceResults;
// first; //'Eliud Kipchoge'
// fourth; //'Ghirmay Ghebreslassie'

// const [winner, ...others] = raceResults;
// winner; //'Eliud Kipchoge'
// others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]
const rr = ["x", "y", "z", "a", "s", "d", "f"];
// const [g, s, b, ...r] = rr;
const [g, , b, ...r] = rr;
console.log(g);
// console.log(s);
console.log(b);
console.log(r);
