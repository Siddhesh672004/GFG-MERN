function checkPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let n = parseInt(prompt("Enter a number"));

for (let i = 2; i < n; i++) {
  let isPrime = checkPrime(i);

  if (isPrime) {
    console.log(i);
  }
}
