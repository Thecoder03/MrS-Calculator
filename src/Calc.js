import React, { useState } from "react";

//Bugs: Cant do division after using the percent operator
//Things to add: Ability to type the numbers and operators as well as delete from keyboard, Animations, Allow multiple operators and complex problems in calculator, allow for continuation(ie: if I do 5+5 I want to be able to add another 5 to the 10 without typing 10 out),
//What I would do differently: Instead of updating an array with the digits make it one number variable and just add number to the end, Use more responsive sizing for buttons,

function Calc() {
  const [currentNumber, setCurrentNumber] = useState([]);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [counter, setCounter] = useState(0);
  const [firstNumber, setFirstNumber] = useState(null);
  const [showNumber, setShowNumber] = useState(currentNumber);
  // const [secondNumber, setSecondNumber] = useState(null);
  var secondNumber;
  // Define a function that will perform the calculation based on the operator
  function calculate(operation, operand1, operand2) {
    // Use a switch statement to determine which operator to use
    switch (operation) {
      case "+":
        return Number(operand1) + Number(operand2);

      case "-":
        return operand1 - operand2;

      case "*":
        return operand1 * operand2;

      case "/":
        return operand1 / operand2;

      default:
        return "Invalid operator";
    }
  }

  function percentMaker(number) {
    console.log(number);
    console.log(number / 100);
    return number / 100;
  }

  const handleDivClick = (event) => {
    const buttonClicked = event.target.textContent;
    console.log(buttonClicked);
    if (!isNaN(buttonClicked)) {
      // check if buttonClicked is a number
      console.log(currentNumber);
      setCurrentNumber([...currentNumber, parseFloat(buttonClicked)]); // add buttonClicked to currentNumber array
      setShowNumber([...currentNumber, parseFloat(buttonClicked)]);
    } else {
      if (counter === 0) {
        switch (buttonClicked) {
          case "AC":
            setCurrentOperator(null);
            setCurrentNumber([]);
            setShowNumber([]);
            break;
          case "+/-":
            setCurrentOperator(null);

            if (currentNumber.indexOf("-") === -1) {
              setCurrentNumber(["-", ...currentNumber]);
              setShowNumber(["-", ...currentNumber]);
            } else {
              setShowNumber((prevValues) => prevValues.slice(1));
              setCurrentNumber((prevValues) => prevValues.slice(1));
            }
            break;
          case "%":
            setCurrentOperator("%");
            setFirstNumber(parseFloat(currentNumber.join("")));
            setCurrentNumber([]);
            setShowNumber(percentMaker(parseFloat(currentNumber.join(""))));
            break;
          case "÷":
            setCounter(1);
            setCurrentOperator("/");
            setFirstNumber(parseFloat(currentNumber.join("")));
            setCurrentNumber([]);
            setShowNumber([]);
            break;
          case "+":
            setCounter(1);
            setCurrentOperator("+");
            setFirstNumber(parseFloat(currentNumber.join("")));
            setCurrentNumber([]);
            setShowNumber([]);
            break;
          case "x":
            setCounter(1);
            setCurrentOperator("*");
            setFirstNumber(parseFloat(currentNumber.join("")));
            setCurrentNumber([]);
            setShowNumber([]);
            break;
          case "-":
            setCounter(1);
            setCurrentOperator("-");
            setFirstNumber(parseFloat(currentNumber.join("")));
            setCurrentNumber([]);
            setShowNumber([]);
            break;
          case ".":
            setCurrentOperator(null);
            if (currentNumber.includes(".")) {
              alert("You can only use a . once silly!");
            } else {
              setCurrentNumber([...currentNumber, "."]);
              setShowNumber([...currentNumber, "."]);
            }

            break;
          case "=":
            alert("You must enter two numbers and an operator to calculate");
            break;

          default:
            console.log("Unknown operator!");
        }
      } else if (counter === 1) {
        switch (buttonClicked) {
          case "AC":
            setCurrentOperator(null);
            setCurrentNumber([]);
            setShowNumber([]);
            setShowNumber([]);
            break;
          case "+/-":
            setCurrentOperator(null);

            if (currentNumber.indexOf("-") === -1) {
              setCurrentNumber(["-", ...currentNumber]);
              setShowNumber(["-", ...currentNumber]);
            } else {
              setShowNumber((prevValues) => prevValues.slice(1));
              setCurrentNumber((prevValues) => prevValues.slice(1));
            }
            break;
          case "%":
            alert("You must First enter another number");

            break;
          case "÷":
            alert("You must First enter another number");
            break;
          case "+":
            alert("You must First enter another number");
            break;
          case "X":
            alert("You must First enter another number");
            break;
          case "-":
            alert("You must First enter another number");
            break;
          case ".":
            setCurrentOperator(null);
            if (currentNumber.includes(".")) {
              alert("You can only use a . once silly!");
            } else {
              setCurrentNumber([...currentNumber, "."]);
              setShowNumber([...currentNumber, "."]);
            }

            break;
          case "=":
            // setSecondNumber(parseFloat(currentNumber.join("")));
            secondNumber = currentNumber.join("");
            setCounter(0);
            setCurrentNumber([]);
            setShowNumber(
              calculate(currentOperator, firstNumber, secondNumber)
            );

            break;
          default:
            console.log("Unknown operator!");
        }
      }
    }
  };
  return (
    <div>
      <div className="Title">Mr. Sloth's Calculator</div>
      <div id="calcBorder">
        <div className="topPortion">
          <div id="equationBar">
            <p>{showNumber}</p>
          </div>
        </div>
        <div className="bottomPortion">
          <div className="div1">
            <div onClick={handleDivClick} className="dot-1">
              AC
            </div>
          </div>
          <div className="div2">
            <div className="dot-2" onClick={handleDivClick}>
              +/-
            </div>
          </div>
          <div className="div3">
            <div className="dot-3" onClick={handleDivClick}>
              %
            </div>
          </div>
          <div className="div4">
            <div className="dot-4" onClick={handleDivClick}>
              ÷
            </div>
          </div>
          <div className="div5">
            <div className="dot-5" onClick={handleDivClick}>
              7
            </div>
          </div>
          <div className="div6">
            <div className="dot-6" onClick={handleDivClick}>
              8
            </div>
          </div>
          <div className="div7">
            <div className="dot-7" onClick={handleDivClick}>
              9
            </div>
          </div>
          <div className="div8">
            <div className="dot-8" onClick={handleDivClick}>
              x
            </div>
          </div>
          <div className="div9">
            <div className="dot-9" onClick={handleDivClick}>
              4
            </div>
          </div>
          <div className="div10">
            <div className="dot-10" onClick={handleDivClick}>
              5
            </div>
          </div>
          <div className="div11">
            <div className="dot-11" onClick={handleDivClick}>
              6
            </div>
          </div>
          <div className="div12">
            <div className="dot-12" onClick={handleDivClick}>
              -
            </div>
          </div>
          <div className="div13">
            <div className="dot-13" onClick={handleDivClick}>
              1
            </div>
          </div>
          <div className="div14">
            <div className="dot-14" onClick={handleDivClick}>
              2
            </div>
          </div>
          <div className="div15">
            <div className="dot-15" onClick={handleDivClick}>
              3
            </div>
          </div>
          <div className="div16">
            <div className="dot-16" onClick={handleDivClick}>
              +
            </div>
          </div>
          <div className="div17">
            <div className="dot-17" onClick={handleDivClick}>
              0
            </div>
          </div>
          <div className="div18"></div>
          <div className="div19">
            <div className="dot-19" onClick={handleDivClick}>
              .
            </div>
          </div>
          <div className="div20">
            <div className="dot-20" onClick={handleDivClick}>
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
