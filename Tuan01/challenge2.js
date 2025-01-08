const calculateBMI = (mass, height) => {
  return mass / (height * height);
};

let markBMI = calculateBMI(78, 1.68);
let JohnBMI = calculateBMI(92, 1.95);

console.log("Mark's BMI >> ", markBMI);
console.log("John's BMI >> ", JohnBMI);

if (markBMI > JohnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's! ${JohnBMI}`);
} else {
  console.log(`John's BMI ${JohnBMI} is higher than Mark's! ${markBMI}`);
}
