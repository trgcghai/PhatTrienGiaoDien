// challenge 1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDolphins1 = calcAverage(44, 23, 71);
// const avgKoalas1 = calcAverage(65, 54, 49);

// const avgDolphins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins!");
//   }
// };
// console.log("test 1 >>");
// checkWinner(avgDolphins1, avgKoalas1);
// console.log("test 2 >>");
// checkWinner(avgDolphins2, avgKoalas2);

// challenge 2
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log("Test calTip with bill 100 >> ", calcTip(100));

// const bills = [125, 555, 44];
// const tips = bills.map(calcTip);
// const total = bills.map((bill, index) => bill + tips[index]);

// console.log("bills arrays >>", bills);
// console.log("tips array >>", tips);
// console.log("total array >>", total);

// challenge 3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
} else {
  console.log(
    `${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`
  );
}
