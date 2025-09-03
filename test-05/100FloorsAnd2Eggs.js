function binomial(n, k) {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let res = 1;
  for (let i = 1; i <= k; i++) {
    res = res * (n - i + 1) / i;
  }
  return res;
}

function F(eggs, drops) {
  let sum = 0;
  for (let i = 1; i <= eggs; i++) {
    sum += binomial(drops, i);
  }
  return sum;
}

function numberOfDrops(totalFloors, numberOfEggs) {
  let dropsNumber = 0;
  while (true) {
    dropsNumber++;
    if (F(numberOfEggs, dropsNumber) >= totalFloors) return dropsNumber;
  }
}

console.log("worst number of drops:", numberOfDrops(100, 2)); // 14
