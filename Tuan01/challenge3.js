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

console.log("Data 1 >>>, ", solveChallenge3([96, 108, 89], [88, 91, 110]));
console.log(
  "Data bonus 1 >>>, ",
  solveChallenge3([97, 112, 101], [109, 95, 123])
);
console.log(
  "Data bonus 2 >>>, ",
  solveChallenge3([97, 112, 101], [109, 95, 106])
);
