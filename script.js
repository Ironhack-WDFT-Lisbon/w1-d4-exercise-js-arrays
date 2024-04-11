console.log("Ready to go! 🚀");

// ------------------------------
// Iteration 1
// ------------------------------
const raceResults = ["Helen", "John", "Peter", "Merry"];
// raceResults.forEach(function (elem, index) {
//   console.log(elem + " finished the race in " + (index + 1) + " position!");
// });

// raceResults.forEach((elem, index) =>
//   console.log(elem + " finished the race in " + (index + 1) + " position!")
// );

// ------------------------------
// Iteration 2
// ------------------------------
const students = ["John", "Peter", "Merry"];

// Add a new student to the array
// students.push("Helen");
// console.log(students);

// Remove Peter from the array
// const index = students.indexOf("Peter");
// students.splice(index, 1);
// console.log(students);

// ------------------------------
// Iteration 3
// ------------------------------
const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

// Create a function that counts the words in a string
function countWords(string) {
  return string.split(" ").length;
}

console.log(countWords(content));
