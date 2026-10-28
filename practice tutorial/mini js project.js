let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = Number(prompt("Enter second number:"));
let result;
if (operator === "+") result = num1 + num2;
else if (operator === "-") result = num1 - num2;
else if (operator === "*") result = num1 * num2;
else if (operator === "/") result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
else result = "Invalid operator";
console.log("Result:", result);

for (let i = 1; i <= 50; i++) {
if (i % 15 === 0) console.log("FizzBuzz");
else if (i % 3 === 0) console.log("Fizz");
else if (i % 5 === 0) console.log("Buzz");
else console.log(i);
}