var yr = 2100;

if (yr % 100 === 0) {
  if (yr % 400 === 0) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }
} else if (yr % 4 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a leap year");
}
