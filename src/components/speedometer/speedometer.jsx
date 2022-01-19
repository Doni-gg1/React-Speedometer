import React, { useState, useEffect } from "react";
import Arrow from "../arrow/arrow";
import "./style.css";

function Speedometer({ randomCount, changeNum, maxSpeed }) {
  const [value, setValue] = useState(0);
  const [randomNum, setRandomNum] = useState(randomCount);

  const countRange = () => {
    let arrRange = [];
    let num = 0;
    if (maxSpeed >= 20) {
      let diapazon = 20 * ( maxSpeed / 180)
      let speedsNum = maxSpeed / diapazon;
      document.querySelector("#mid").innerHTML = "";
      document.querySelector("#mid").innerHTML = "<h3>0</h3>";

      for (let i = 1; i <= speedsNum; i++) {
        if (num <= maxSpeed) {
          let h3 = document.createElement("h3");
          
          
          console.log(num += diapazon);
          arrRange.push(Math.ceil(num));

          arrRange.forEach((item) => {
            h3.innerHTML = item;
            document.querySelector("#mid").appendChild(h3);
          });
        } else return;
      }
    }
    console.log(arrRange);
  };

  const counter = () => {
    if (maxSpeed >= 20) {
      if (value < randomNum) {
        setTimeout(() => {
          setValue(value + 1);
        }, 10);
      } else if (value == randomNum) {
        changeNum();
        // setValue(0);
      }
    } else {
      setValue(0);
    }
  };

  useEffect(() => {
    countRange();
    setRandomNum(randomCount);
    counter();
  }, [value, randomNum, randomCount, maxSpeed]);

  return (
    <div>
      <div className="block">
        <div id="rotate_180">
          <div id="mid">
            <h3 id="min">0</h3>
          </div>
          <Arrow 
          value={value}
          maxSpeed={maxSpeed}
          />
          <h1>{value}</h1>
        </div>
      </div>
    </div>
  );
}

export default Speedometer;
