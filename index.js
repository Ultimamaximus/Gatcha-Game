let Rating = [
  "Uncommon",
  "Uncommon",
  "Uncommon",
  "Uncommon",
  "Rare",
  "Rare",
  "Rare",
  "Very Rare",
  "Very Rare",
  "Legendary",
];
let cyberwareRating = [
  "Uncommon",
  "Uncommon",
  "Uncommon",
  "Uncommon",
  "Rare",
  "Rare",
  "Rare",
  "Very Rare",
  "Very Rare",
];
let Category = [
  "Consumables",
  "Consumables",
  "Miscellaneous",
  "Miscellaneous",
  "Weapons",
  "Weapons",
  "Armor & Shields",
  "Armor & Shields",
  "Advanced Technology",
  "Advanced Technology",
];

//Calculates Gatcha rolls
function gatchaRoll() {
  const categoryRoll = Math.floor(Math.random() * Category.length);
  const ratingRoll = Math.floor(Math.random() * Rating.length);
  let roll = Rating[ratingRoll] + " " + Category[categoryRoll];
  if (roll === "Legendary Advanced Technology") {
    const cyberwareRoll1 = Math.floor(Math.random() * cyberwareRating.length);
    const cyberwareRoll2 = Math.floor(Math.random() * cyberwareRating.length);
    let reroll1 = cyberwareRating[cyberwareRoll1] + " " + "Advanced Technology";
    let reroll2 =
      " " + cyberwareRating[cyberwareRoll2] + " " + "Advanced Technology";
    let finalRoll = [reroll1, reroll2];
    return finalRoll;
  } else if (roll.includes("Legendary")) {
    const newRatingRoll = Math.floor(Math.random() * Rating.length);
    let newRoll = " " + Rating[newRatingRoll] + " " + Category[categoryRoll];
    let finalRoll = [roll, newRoll];
    return finalRoll;
  } else {
    return roll;
  }
}

//Utilizes the roll amount to calculate the roll result
function rollCount(count) {
  for (let i = 0; i < count; i++) {
    gatchaRoll();
    let li = document.createElement("li");
    let e = document.createTextNode(gatchaRoll());
    li.appendChild(e);
    document.getElementById("myUL").appendChild(li);
  }
}

// Displays a new list of rolls when clicking on the "Add" button
function newElement() {
  let inputValue = document.getElementById("myInput").value;
  if (isNaN(inputValue) || inputValue === "") {
    alert("Please input a number!");
  } else {
    var lis = document.querySelectorAll("#myUL li");
    for (var i = 0; (li = lis[i]); i++) {
      li.parentNode.removeChild(li);
    }
    rollCount(document.getElementById("myInput").value);
  }
  document.getElementById("myInput").value = "";
}
