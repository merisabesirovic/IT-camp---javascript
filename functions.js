const zbir = (a, b) => {
  console.log(a + b);
};
const num = 55;
// javascript moduli nam dozvoljavaju da podeslimo nas kod u odvojene fajlove
// oni se oslanjaju na dve narebe (statements):
// import
// export
// postoje dva nacina exportovanja neke funkcije, promenljive
// 1. default export
// 2. export

// export default zbir;
// export { num };
// Zadatak:
/* We have a MAP with log of the events that happened during the game. 
The VALUES are the events themselves,and the KEYS are the minutes in which each event happened a football game has 90 minutes plus some extra time)
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from 64 minutes was unfair. So remove this event from the game events log
3. Print the following string to the console: "an event happened, on average, every 9 minutes"
4. Loop over the events and log them to the console, marking whether it's in the first half or the second half (after 45 min) of the game like this:
    [FIRST HALF] 17: ⚽ GOAL
*/

const gameEvents = new Map([
  [17, "offside"],
  [17, "Goal"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow card"],
]);

// function eventsWithoutDuplicates(someMap) {
//   const array = [...someMap.entries()];
//   const events = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i[0]] !== array[j[0]]) {
//         events.push(array[i]);
//       }
//     }
//   }
//   return events;
// }
// console.log(eventsWithoutDuplicates(gameEvents));
// 1
function eventsWithoutDuplicates(someMap) {
  const array = [...someMap.entries()];
  const events = [];
  for (let i = 0; i < array.length; i++) {
    let semafor = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i][0] === array[j][0]) {
        semafor = false;
        break;
      }
    }
    if (semafor) {
      events.push(array[i]);
    }
  }
  return events;
}

const events = eventsWithoutDuplicates(gameEvents);
console.log(events);
// 2
function yellow(array) {
  return array.filter((e) => e[0] !== 64).flat();
}
const yelloww = yellow(events);
//3
console.log("an event happened, on average, every 9 minutes");

// console.log(whichHalf[(1, 2, 55, 45)]);

function half(array) {
  const rez = [];
  let half = "";
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && array[i] < 45) {
      half = "[FIRST HALF]";
    } else if (typeof array[i] === "number") {
      half = "[SECOND HALF]";
    }
    rez.push(`${half} :${array[i]},${array[i + 1]}`);
    i++;
  }
  return rez.join("\n");
}

const halfTimes = half(yelloww);
console.log(halfTimes);

// function eventsWithoutDuplicates(someMap) {
//   const events = new Map();
//   for (const [key, value] of someMap) {
//     if (!events.has(key)) {
//       events.set(key, value);
//     }
//   }
//   return events;
// }

// console.log(eventsWithoutDuplicates(gameEvents));
