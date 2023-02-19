var result = 5;
var resultTD = document.querySelector(".td-result");
var resultTemp = document.querySelector(".temp-result");

var clearButton = document.getElementById("clearButton");
var negation = document.getElementById("negation");
var percent = document.getElementById("percentage");
var division = document.getElementById("divison");
var multi = document.getElementById("multi");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var equal = document.getElementById("equal");
var comma = document.getElementById("comma");

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");

var firstNumber;
var secondNumber;

document.addEventListener("keydown", function(event) {
  if (event.key == "Backspace") {
    resultTD.textContent = resultTD.textContent.substring(0, resultTD.textContent.length - 1);
    if (resultTD.textContent.length == 0) {
      resultTD.textContent = "0";
    }
  }
  else if (event.key == "Escape") {
    resultTD.textContent = "0";
    resultTemp.textContent = "";
    firstNumber = undefined;
    secondNumber = undefined;
    clearButton.style.boxShadow = "inset 0px 0px 0px 1px rgba(0, 102, 102, .7)";
    clearButton.style.borderRadius = "10px";
    clearButton.style.color = "rgb(255, 255, 255, 1)";
    setTimeout(function() {
      clearButton.style.boxShadow = "none";
      clearButton.style.color = "rgba(255, 255, 255, .6)";
    }, 150);
  }
});

clearButton.addEventListener("click", function() {
  resultTD.textContent = "0";
  resultTemp.textContent = "";
  firstNumber = undefined;
  secondNumber = undefined;
});

negation.addEventListener("click", function() {
  resultTD.textContent = resultTD  * -1;
});

minus.addEventListener("click", function() {
  if (firstNumber == undefined) {
    firstNumber = Number(resultTD.textContent);
    resultTD.textContent = "-";
    resultTemp.textContent = firstNumber;
    checkLength();
  }

  else if (firstNumber != undefined && secondNumber == undefined && resultTD.textContent[0] == "-") {
    secondNumber = Number(resultTD.textContent.substring(1));
    resultTemp.textContent = firstNumber - secondNumber;
    checkLength();
    resultTD.textContent = "-";
    firstNumber -= secondNumber;
  }
  
  else if (firstNumber != undefined && secondNumber != undefined && resultTD.textContent[0] == "+") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber += secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "-";
  }

  else if (firstNumber != undefined && secondNumber != undefined) {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber -= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "-";
  }

  else if (firstNumber != undefined && resultTD.textContent[0] == "+") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber += secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "-";
  }
  else if (firstNumber != undefined && resultTD.textContent[0] == "*") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber *= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "-";
  }
  else if (firstNumber != undefined && secondNumber == undefined && resultTD.textContent[0] == "*") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber *= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "-";
  }
});

plus.addEventListener("click", function() {
  if (firstNumber == undefined) {
    firstNumber = Number(resultTD.textContent);
    resultTD.textContent = "+";
    resultTemp.textContent = firstNumber;
    checkLength();
  } 
  
  else if (firstNumber != undefined && secondNumber == undefined && resultTD.textContent[0] == "+") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber += secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "+";
  }

  else if (firstNumber != undefined && secondNumber != undefined && resultTD.textContent[0] == "-") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber -= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "+";
  }

  else if (firstNumber != undefined && secondNumber != undefined) {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber += secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "+";
  }

  else if (firstNumber != undefined && resultTD.textContent[0] == "-") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber -= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "+";
  }
  else if (firstNumber != undefined && resultTD.textContent[0] == "*") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber *= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "+";
  }
  else if (firstNumber != undefined && secondNumber == undefined && resultTD.textContent[0] == "*") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber *= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "+";
  }
});

multi.addEventListener("click", function() {
  if (firstNumber == undefined) {
    firstNumber = Number(resultTD.textContent);
    resultTD.textContent = "*";
    resultTemp.textContent = firstNumber;
    checkLength();
  }
  else if (firstNumber != undefined && secondNumber == undefined && resultTD.textContent[0] == "*") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber *= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "*";
  }
  else if (firstNumber != undefined && secondNumber != undefined && resultTD.textContent[0] == "+") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber += secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "*";
  }
  else if (firstNumber != undefined && secondNumber != undefined && resultTD.textContent[0] == "-") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber -= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "*";
  }
  else if (firstNumber != undefined && secondNumber != undefined) {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber *= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "*";
  }
  else if (firstNumber != undefined && resultTD.textContent[0] == "+") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber += secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "*";
  }
  else if (firstNumber != undefined && resultTD.textContent[0] == "-") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber -= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "*";
  }
  else if (firstNumber != undefined && resultTD.textContent[0] == "/") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber /= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "*";
  }
});

division.addEventListener("click", function() {
  if (firstNumber == undefined) {
    firstNumber = Number(resultTD.textContent);
    resultTD.textContent = "/";
    resultTemp.textContent = firstNumber;
    checkLength();
  }
  else if (firstNumber != undefined && secondNumber == undefined && resultTD.textContent[0] == "/") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber /= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "/";
  }
  else if (firstNumber != undefined && secondNumber != undefined && resultTD.textContent[0] == "+") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber += secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "/";
  }
  else if (firstNumber != undefined && secondNumber != undefined && resultTD.textContent[0] == "-") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber -= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "/";
  }
  else if (firstNumber != undefined && secondNumber != undefined) {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber /= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "/";
  }
  else if (firstNumber != undefined && resultTD.textContent[0] == "+") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber += secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "/";
  }
  else if (firstNumber != undefined && resultTD.textContent[0] == "-") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber -= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "/";
  }
  else if (firstNumber != undefined && resultTD.textContent[0] == "*") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber *= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "/";
  }
  else if (firstNumber != undefined && secondNumber == undefined && resultTD.textContent[0] == "*") {
    secondNumber = Number(resultTD.textContent.substring(1));
    firstNumber *= secondNumber;
    resultTemp.textContent = firstNumber;
    checkLength();
    resultTD.textContent = "/";
  }
});

equal.addEventListener("click", function() {
  if (firstNumber == undefined && secondNumber == undefined) {
    resultTD.textContent = "0";
  }
  else if (firstNumber != undefined && secondNumber != undefined) {
    secondNumber = Number(resultTD.textContent.substring(1));
    resultTD.textContent = calcEqual(firstNumber, secondNumber, resultTD.textContent[0])
    checkLength();
    resultTemp.textContent = "";
    firstNumber = undefined;
    secondNumber = undefined;
  }
  else if (firstNumber != undefined && secondNumber == undefined) {
    secondNumber = Number(resultTD.textContent.substring(1));
    resultTD.textContent = calcEqual(firstNumber, secondNumber, resultTD.textContent[0]);
    checkLength();
    resultTemp.textContent = "";
    firstNumber = undefined;
    secondNumber = undefined;
  }
});

function calcEqual(firstNumber, secondNumber, operation) {
  if (operation == "+") {
    return firstNumber + secondNumber;
  }
  else if (operation == "-") {
    secondNumber = resultTD.textContent.substring(1);
    return firstNumber - secondNumber;
  }
  else if (operation == "*") {
    return firstNumber * secondNumber;
  }
  else if (operation == "/") {
    return firstNumber / secondNumber;
  }
}

one.addEventListener("click", function() {
  if (resultTD.textContent == "0") {
    resultTD.textContent = "1";
  }
  else {
    resultTD.textContent = resultTD.textContent + "1";
  }
});

two.addEventListener("click", function() {
  if (resultTD.textContent == "0") {
    result = 2;
    resultTD.textContent = "2";
  }
  else {
    result = Number(result.toString() + "2") 
    resultTD.textContent = resultTD.textContent + "2";
  }
});

three.addEventListener("click", function() {
  if (resultTD.textContent == "0") {
    result = 3;
    resultTD.textContent = "3";
  }
  else {
    result = Number(result.toString() + "3") 
    resultTD.textContent = resultTD.textContent + "3";
  }
});

four.addEventListener("click", function() {
  if (resultTD.textContent == "0") {
    result = 4;
    resultTD.textContent = "4";
  }
  else {
    result = Number(result.toString() + "4") 
    resultTD.textContent = resultTD.textContent + "4";
  }
});

five.addEventListener("click", function() {
  if (resultTD.textContent == "0") {
    result = 5;
    resultTD.textContent = "5";
  }
  else {
    result = Number(result.toString() + "5") 
    resultTD.textContent = resultTD.textContent + "5";
  }
});

six.addEventListener("click", function() {
  if (resultTD.textContent == "0") {
    result = 6;
    resultTD.textContent = "6";
  }
  else {
    result = Number(result.toString() + "6") 
    resultTD.textContent = resultTD.textContent + "6";
  }
});

seven.addEventListener("click", function() {
  if (resultTD.textContent == "0") {
    result = 7;
    resultTD.textContent = "7";
  }
  else {
    result = Number(result.toString() + "7") 
    resultTD.textContent = resultTD.textContent + "7";
  }
});

eight.addEventListener("click", function() {
  if (resultTD.textContent == "0") {
    result = 8;
    resultTD.textContent = "8";
  }
  else {
    result = Number(result.toString() + "8") 
    resultTD.textContent = resultTD.textContent + "8";
  }
});

nine.addEventListener("click", function() {
  if (resultTD.textContent == "0") {
    result = 9;
    resultTD.textContent = "9";
  }
  else {
    result = Number(result.toString() + "9") 
    resultTD.textContent = resultTD.textContent + "9";
  }
});

zero.addEventListener("click", function() {
  if (resultTD.textContent == "0") {
    return;
  }
  else {
    result = Number(result.toString() + "0") 
    resultTD.textContent = resultTD.textContent + "0";
  }
});

function checkLength() {
  if (resultTD.textContent.length > 10) {
    resultTD.textContent = resultTD.textContent.substring(0, 10);
  }
}