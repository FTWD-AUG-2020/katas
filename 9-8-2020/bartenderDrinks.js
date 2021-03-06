// Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
//  "Programmer"	 "Hipster Craft Beer"
//  "Bike Gang Member"	"Moonshine"
//  "Politician"	"Your tax dollars"
//  "Rapper"	"Cristal"
//  *anything else*	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".

//https://www.codewars.com/kata/568dc014440f03b13900001d

//Solution 1
function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}

//Solution 2 using array of obj (Sebastian's solution)
let list = [
  { name: "jabroni", drink: "Patron Tequila" },
  { name: "school counselor", drink: "Anything with Alcohol" },
  { name: "programmer", drink: "Hipster Craft Beer" },
  { name: "bike gang member", drink: "Moonshine" },
  { name: "politician", drink: "Your tax dollars" },
  { name: "rapper", drink: "Cristal" },
];
let result = list.find((profession) => profession.name === param.toLowerCase());
return result === undefined ? "Beer" : result.drink;

//Solution 3 using object
function getDrinkByProfession(param) {
  var list = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
  };
  return list[param.toLowerCase()] || "Beer";
}
