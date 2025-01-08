// const calculateBMI = (mass, height) => {
//   return mass / (height * height);
// };

// let markBMI = calculateBMI(78, 1.68);
// let JohnBMI = calculateBMI(92, 1.95);

// console.log("Mark's BMI >> ", markBMI);
// console.log("John's BMI >> ", JohnBMI);

// if (markBMI > JohnBMI) {
//   console.log(`Mark's BMI ${markBMI} is higher than John's! ${JohnBMI}`);
// } else {
//   console.log(`John's BMI ${JohnBMI} is higher than Mark's! ${markBMI}`);
// }

const calAvgScore = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const solveChallenge3 = (dolphinsScore, koalasScore) => {
  const avgDolphinsScore = calAvgScore(...dolphinsScore);
  const avgKoalasScore = calAvgScore(...koalasScore);

  if (avgDolphinsScore < 100 && avgKoalasScore < 100)
    return `No team wins the trophy`;
  if (avgDolphinsScore < 100)
    return `Dophins's score (${avgDolphinsScore}) is not valid, Koalas win the match`;
  if (avgKoalasScore < 100)
    return `Koalas's score (${avgKoalasScore}) is not valid, Dophins win the match`;

  if (avgDolphinsScore > avgKoalasScore) {
    return `Dolpins wins (${avgDolphinsScore})`;
  } else if (avgDolphinsScore < avgKoalasScore) {
    return `Koalas wins (${avgKoalasScore})`;
  } else {
    return `Draw`;
  }
};

// test data 1
console.log("Data 1 >>>, ", solveChallenge3([96, 108, 89], [88, 91, 110]));
// test data bonus 1
console.log(
  "Data bonus 1 >>>, ",
  solveChallenge3([97, 112, 101], [109, 95, 123])
);
// test data bonus 2
console.log(
  "Data bonus 2 >>>, ",
  solveChallenge3([97, 112, 101], [109, 95, 106])
);
