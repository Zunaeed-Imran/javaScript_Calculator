let num = prompt("Enter 1st number: ");
let num2 = prompt("Enter 2nd number: ");
let symbol = prompt("Enter symbol: ");
num = Number(num);
num2 = Number(num2);

if (symbol == "+") {
  document.write(num + num2);
}
else if (symbol == "-") {
  document.write(num - num2);
}  
else if (symbol == "*") {
  document.write(num * num2);
}
else if (symbol == "/") {
  document.write(num / num2);
}
else {
  document.write("Invalid Symbol! !!");
}