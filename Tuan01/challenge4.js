const calTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const solveChallenge4 = (bill) => {
  const tip = calTip(bill);

  console.log(
    `The bill was ${bill}, the tip was ${tip}, the total value ${bill + tip}`
  );
};

console.log("Test 1 >>");
solveChallenge4(275);
console.log("Test 2 >>");
solveChallenge4(40);
console.log("Test 3 >>");
solveChallenge4(430);
