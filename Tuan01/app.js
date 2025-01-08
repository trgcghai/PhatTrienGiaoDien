const calculateBMI = (mass, height) => {
  return mass / (height * height);
};

console.log("Mark's BMI >> ", calculateBMI(78, 1.68));
console.log("John's BMI >> ", calculateBMI(92, 1.95));
