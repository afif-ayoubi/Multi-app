import React, { useState } from "react";
import "./style.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/\D/g, "");
    setDisplay(filteredValue);
  };
  const operation = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (e) {
      setDisplay("please enter a valid operation");
    }
  };
  return (
    <div className="container flex center primary-bg ">
      <div className="calculator flex column ">
        <form action="">
          <div className="display flex ">
            <input
              type="text"
              className=""
              value={display}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <input type="button" value={"AC"} onClick={(e) => setDisplay("")} />
            <input
              type="button"
              value={"DE"}
              onClick={(e) => setDisplay(display.slice(0, -1))}
            />
            <input
              type="button"
              value={"."}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
            <input
              type="button"
              value={"/"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value={"7"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
            <input
              type="button"
              value={"8"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
            <input
              type="button"
              value={"9"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
            <input
              type="button"
              value={"*"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value={"4"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
            <input
              type="button"
              value={"5"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
            <input
              type="button"
              value={"6"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
            <input
              type="button"
              value={"+"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value={"1"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
            <input
              type="button"
              value={"2"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
            <input
              type="button"
              value={"3"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
            <input
              type="button"
              value={"/"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value={"00"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
            <input
              type="button"
              value={"0"}
              onClick={(e) => setDisplay(display + e.target.value)}
            />
            <input
              type="button"
              className="equal"
              value={"="}
              onClick={(e) => operation()}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
