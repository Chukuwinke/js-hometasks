let m;
let n;

let validPrime = item => {
  let count = 2;
  while (count < item / 2 + 1) {
    if (item % count !== 0) {
      count++;
      continue;
    }
    return false;
  }
  return true;
};
let primeFinder = (m, n) => {
  let count = 0;
  for (let counter = m; counter <= n; counter++) {
    if (validPrime(counter)) {
      count++;
      console.log(counter);
    }
  }
};

do {
  m = prompt("input must be < than your next input");
  n = prompt("input must be > than your last input");
  m = Number(m);
  n = Number(n);
  if (m > n) {
    alert("not valid");
  } else {
    primeFinder(m, n);
  }
} while (m > n);