import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import {useState} from "react"
function App() {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/', '*', '+', '-', '.',];


    const updateCalc = (value) => {

      if(
        ops.includes(value) && calc === '' || 
        ops.includes(value) && ops.includes(calc.slice(-1))
      ) return;


        setCalc(calc + value);

        if(!ops.includes(value)){
          setResult(eval(calc + value).toString());
        }
    }

    const calculator = () => {
      setCalc(eval(calc).toString());
    }

    const del = () => {
      setCalc("");
      setResult("");
    }



  const generator = () => {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   
    return digits.map((digit, index) => {
      return <button
      key = {index}
      value = {digit}
      onClick = {() => updateCalc(digit.toString())}
      >
        {digit}
      </button>;
    });
  };

  return( 
  <div className="App">

     <div className = "calculator">
          <div className = "display-result">
            {result ? <span>({result}) <FontAwesomeIcon icon={faChevronCircleLeft} /></span>  : ""}  {calc || "0"}
          </div>

          <div className = "oparator">
          <button className="plus" onClick={() => updateCalc("+")}>+</button>
          <button className="sub"onClick={() => updateCalc("-")}>-</button>
          <button className="multi"onClick={() => updateCalc("*")}>*</button>
          <button className="div"onClick={() => updateCalc("/")}>/</button>

          <button className="del"onClick={() => del()}>DEL</button>
          </div>


          <div className = "digits">
              {generator()} 
              <button className="dot">.</button>
              <button className="result" onClick={() => calculator()}>=</button>
          </div>





     </div>


  </div>
  );
  
}

export default App;
