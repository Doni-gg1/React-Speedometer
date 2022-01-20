import React, { useState, useEffect } from "react";
import Arrow from "../arrow/arrow";
import "./style.css";

function Speedometer({ randomCount, changeNum, maxSpeed, speedsNumCount }) {
  const [value, setValue] = useState(0);
  const [randomNum, setRandomNum] = useState(randomCount);

  let mid = document.querySelector('#mid');

  const showSpeedNums = (data) => {
    data.forEach(item => {
      let h3 = document.createElement('h3');
      h3.innerHTML = item;
      mid.append(h3);
    })
  }
  const countRange = () => {
    let range = 0;
    if(maxSpeed && speedsNumCount){
      if(maxSpeed >= speedsNumCount){
        let sum = 0
        let arrRange = []
        range = maxSpeed / speedsNumCount
        mid.innerHTML = '';
        for(let i = 1; i < speedsNumCount; i++){
          sum += range
          arrRange.push(Math.ceil(sum))
        }
        arrRange.unshift(0)
        arrRange.push(maxSpeed)
        showSpeedNums(arrRange)
      }
      else alert("Кол-во ячеек не должено превышать максимальную скорость")
    }
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
  }, [value, randomNum, randomCount, maxSpeed, speedsNumCount]);

  return (
    <div>
      <div className="block">
        <div className="speedometer">
          <svg
          id="first"
          width="122"
          height="102"
          viewBox="0 0 61 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(100)">
              <stop offset={ (maxSpeed/90) * (Math.ceil(maxSpeed/value)) + '%'} stop-color="white" />
              <stop offset="0%" stop-color="green" />
            </linearGradient>
          </defs>
          <path
            fill="url('#myGradient')"
            d="M28.5 50L1 49L1.5 44.5L2.5 40L4 36L5.5 32.5L7 29L9 25L12.5 20L15 17L18.5 13.5L23.5 9L28.5 5L34 1L59.5 14L55 16.5L50.5 19.5L46 23L42.5 26.5L38.5 30.5L35.5 34.5L33 39L32.5 40L32 41L31 43.5L28.5 50Z"
            stroke="black"
          />
          </svg>
          <svg
          id="second"
          width="160"
          height="70"
          viewBox="0 0 80 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M79.5 1V22H71L59.5 23L53 24L46 25.5L40 27.5L36.5 29L34 30L30 32L27.5 33.5L2 20.5L12.5 15L22 11L24.5 10L27.5 9L32 7.5L38 5.5L44 4L51.5 2.5L58 1.5L62.5 1H67H73H79.5Z"
            stroke="black"
          />
          </svg>
          <svg
          id="third"
          width="160"
          height="70"
          viewBox="0 0 80 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1V22H9.5L21 23L27.5 24L34.5 25.5L40.5 27.5L44 29L46.5 30L50.5 32L53 33.5L78.5 20.5L68 15L58.5 11L56 10L53 9L48.5 7.5L42.5 5.5L36.5 4L29 2.5L22.5 1.5L18 1H13.5H7.5H1Z"
            stroke="black"
          />
          </svg>
          <svg
          id="fourth"
          width="124"
          height="102"
          viewBox="0 0 62 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33 50L60.5 49L60 44.5L59 40L57.5 36L56 32.5L54.5 29L52.5 25L49 20L46.5 17L43 13.5L38 9L33 5L27.5 1L2 14L6.5 16.5L11 19.5L15.5 23L19 26.5L23 30.5L26 34.5L28.5 39L29 40L29.5 41L30.5 43.5L33 50Z"
            stroke="black"
          />
          </svg>
        </div>
        <div>
          <Arrow value={value} maxSpeed={maxSpeed} />
          <h1>{value}</h1>
        </div>

        
          
        
      </div>
        <div id="mid">
            
          </div>
    </div>
  );
}

export default Speedometer;
