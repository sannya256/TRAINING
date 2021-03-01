document.write("Hello, world!");
//all statements end with ;
// variables in js
var name = "Sandra";
var age = 32;
var male = true; // Notice all lowercase true

//conditions - selections

  if (condition) {
    // block of code to run when first condition is true
  }
  else if (condition) {
    // block of code to run when second condition is true
  }
  else {
    // block of code to run when both conditions are false
  }

  // switch - checks the value of the variable and runs the right code

  switch (age) {
    case 40:
      // block of code to run when age == 40
      break;
    case 42:
      // block of code to run when age == 42
         break;
    default:
      // block of code to run when otherwise
  }

  //Loops - iterations
  // js runs 3 "for loops"
  //1. across a range of numbers
  for (var i = 0; i < 10; i++) { //for (initialisation; condition; post statement)
    // block of code to run 10 times
  } //1-- decrements, 1++ increaments

  //2. for (var of collection)
  var names = ["Kevin", "Amitave", "Sandra"];
for (var name of names) {
  document.write(names + "<br>");
} //  <br> inserting new line in html

// while loop
while (condition) {
    // block of code to run while condition is true.
  }

  // do...while loop
  do {
    // block of code to run.
  }
  while (condition);

  //functions

  function myfunction(parameters) {
    // code to execute
    return value;
  }