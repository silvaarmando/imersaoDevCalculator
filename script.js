var valueFirst = parseInt(prompt("Type first value: "))
var valueSecond = parseInt(prompt("Type second value: "))

var operation = prompt("Type 1 - Addition. 2 - Subtraction. 3 - Multiplication. 4 - Division: ")

if (operation == 1) {
  var result = valueFirst + valueSecond
  document.write("<h2>" + valueFirst + " + " + valueSecond + " = " + result + "</h2>")
} else if (operation == 2) {
  var result = valueFirst - valueSecond
  document.write("<h2>" + valueFirst + " - " + valueSecond + " = " + result + "</h2>")
} else if (operation == 3) {
  var result = valueFirst * valueSecond
  document.write("<h2>" + valueFirst + " x " + valueSecond + " = " + result + "</h2>")
} else if (operation == 4) {
  var result = valueFirst / valueSecond
  document.write("<h2>" + valueFirst + " / " + valueSecond + " = " + result + "</h2>")
}