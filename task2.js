
let weight = 57;
let height = 5.5 * 0.3048;
let BMI = weight / (height * height)

console.log(BMI)

if (BMI < 18.5){
    console.log("you are Underweight.")
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log("you are Normal.")
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log("you are Overweight.")
}
else {
    console.log("you are Obese.")
}
