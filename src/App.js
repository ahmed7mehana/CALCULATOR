import "./styles.css";
import { useState } from "react";

export default function App() {
  const [calc, setcalc] = useState("");
  const [result, setresult] = useState("");
  //operation
  const ops = ["/", "*", "+", "-", "."];
  //update value
  const updatecalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setcalc(calc + value);
    if (!ops.includes(value)) {
      setresult(eval(calc + value).toString());
    }
  };
  // create nums
  const Createdigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updatecalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  // =
  const calcolate = () => {
    setcalc(eval(calc).toString());
  };
  //delete
  const del = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setcalc(value);
  };
  return (
    <div className="App">
      <div className="CALCULATOR ">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>

        <div className="operatores">
          <button onClick={() => updatecalc("/")}>/</button>
          <button onClick={() => updatecalc("+")}>+</button>
          <button onClick={() => updatecalc("-")}>-</button>
          <button onClick={() => updatecalc("*")}>*</button>
          <button onClick={del}>Del</button>
        </div>

        <div className="digits">
          {Createdigits()}
          <button onClick={() => updatecalc("0")}>0</button>
          <button onClick={() => updatecalc(".")}>.</button>
          <button onClick={calcolate}>=</button>
        </div>
      </div>
    </div>
  );
}
