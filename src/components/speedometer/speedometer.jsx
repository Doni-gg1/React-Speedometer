import React, { useState, useEffect } from "react";
import Arrow from "../arrow/arrow";
import "./style.css";

function Speedometer({ randomCount, changeNum, maxSpeed, speedsNumCount }) {
  const [value, setValue] = useState(0);
  const [randomNum, setRandomNum] = useState(randomCount);

  let mid = document.querySelector("#mid");

  const showSpeedNums = (data) => {
    data.forEach((item) => {
      let h3 = document.createElement("h3");
      h3.innerHTML = item;
      mid.append(h3);
    });
  };
  const countRange = () => {
    let range = 0;
    if (maxSpeed && speedsNumCount) {
      if (maxSpeed >= speedsNumCount) {
        let sum = 0;
        let arrRange = [];
        range = maxSpeed / speedsNumCount;
        mid.innerHTML = "";
        for (let i = 1; i < speedsNumCount; i++) {
          sum += range;
          arrRange.push(Math.ceil(sum));
        }
        arrRange.unshift(0);
        arrRange.push(maxSpeed);
        showSpeedNums(arrRange);
      } else
        return console.log(
          "Кол-во ячеек не должено превышать максимальную скорость"
        );
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
      // setValue(0);
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
            width="104"
            height="162"
            viewBox="0 0 52 81"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
             
            </defs>

            <path
              d="M2 79.5L22.9999 80V76L23.4999 71L23.9999 68L24.4999 64L25.4999 59.5L26.9999 54L28.4999 49.5L30.4999 45L32.5 41L34.5 37L37 33L39 30L41.5 27L43.5 24.5L46.5 21L49 18.5L51 16.5L35.5 1L33 3.5L30.4999 6L28.9999 7.5L27.4999 9L25.4999 11.5L23.4999 14L21.4999 17L19.4999 19.5L15.4999 26L11.9999 32.5L8.99995 39L6.99995 44L5.49995 48.5L3.99995 54L2.49994 61L1.99994 64L1.49995 67L0.999939 70L0.499939 73V73.5V74V74.5V75V75.5V76.5V77.5V79.5H2Z"
              stroke="black"
            />
          </svg>

          <svg
            id="second"
            width="152"
            height="94"
            viewBox="0 0 76 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
           
            <path
              d="M1 30.5L16.5 46L21 42L25 39L29 36.5L34 33.5L37 32L41.5 30L46.5 28L51 26.5L57 25L62 24L67 23.5L72 23H75.5V1L64 1.5L57 2.5L52 3.5L46 5L42.5 6L38 7.5L32 10L28.5 11.5L23 14.5L18.5 17L13 20.5L10.5 22.5L8 24.5L5.5 26.5L3 28.5L1 30.5Z"
              stroke="black"
            />
          </svg>

          <svg
            id="third"
            width="154"
            height="94"
            viewBox="0 0 77 47"
            // fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75.5 30.5L60 46L55.5 42L51.5 39L47.5 36.5L42.5 33.5L39.5 32L35 30L30 28L25.5 26.5L19.5 25L14.5 24L9.5 23.5L4.5 23H1V1L12.5 1.5L19.5 2.5L24.5 3.5L30.5 5L34 6L38.5 7.5L44.5 10L48 11.5L53.5 14.5L58 17L63.5 20.5L66 22.5L68.5 24.5L71 26.5L73.5 28.5L75.5 30.5Z"
              stroke="black"
            />
          </svg>

          <svg
            id="fourth"
            width="104"
            height="162"
            viewBox="0 0 52 81"
            // fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.9999 79.5L29 80V76L28.5 71L28 68L27.5 64L26.5 59.5L25 54L23.5 49.5L21.5 45L19.5 41L17.5 37L15 33L13 30L10.5 27L8.49998 24.5L5.49998 21L2.99998 18.5L0.999985 16.5L16.5 1L19 3.5L21.5 6L23 7.5L24.5 9L26.5 11.5L28.5 14L30.5 17L32.5 19.5L36.5 26L40 32.5L43 39L45 44L46.5 48.5L48 54L49.5 61L50 64L50.5 67L51 70L51.5 73V73.5V74V74.5V75V75.5V76.5V77.5V79.5H49.9999Z"
              stroke="black"
            />
          </svg>
          <svg
            className="progress"
            width="440"
            height="222"
            viewBox="0 0 220 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 104.5V109H22.5L23.5 109.5V109L24 105.742V100.5L24.5 96.5L25.5 91L26.5 87.5L27.5 84L28.5 80L30.5 75L32.5 71L33.5 69L36 64.5L37.5 62L39 59.5L43.5 53.5L46 50.5L49.5 47L53.5 43L60 38L64 35L69 32L75 29L80 27L84.5 25.5L87.5 24.5L93 23L99 22L105 21.5L111 21H113L117 21.5H120H121L124 22L127.5 22.5L131.5 23.5L135 24.5L139 25.5L144.5 27.5L148 29L152 31L158.5 35L163 38L171 44.5L176.5 50L182.5 57.5L185.5 62L187.5 65.5L191.5 73L194 79L196.5 87L198.5 98L199 102L199.5 108L199 109H199.5H212L219.5 109.5V109V103.5L219 97L218 91.5L216.5 83.5L215.5 79.5L213 72L210.5 66L206.5 58L205 54.5L204 53L198.5 45L192 37L183 28L179 24.5L169.5 18L163 14L159 12L154 9.5L148.5 7.5L143 5.5L133 3L127.5 2L122.5 1.5L116 1H106H103L98.5 1.5L95 2L89.5 3L84 4.5L81 5L78 6L74 7.5L70 9L66.5 10.5L64.5 11.5L61 13L56.5 15.5L53.5 17.5L50 19.5L47 21.5L42 25.5L39 28L37 30L33 33.5L30.5 36L28 39L25 42.5L23.5 44.5L22 46.5L20.5 48.5L19 51L17.5 53L15 57.5L14 59.5L10 67.5L7.5 73.5L6.5 76.5L5.5 79.5L4.5 83.5L3.5 88.5L3 91.5L2 98.5L1.5 104.5Z"
              fill="white"
            />
            <path
              d="M1.5 109V104.5L2 98.5L3 91.5L3.5 88.5L4.5 83.5L5.5 79.5L6.5 76.5L7.5 73.5L10 67.5L14 59.5L15 57.5L17.5 53L19 51L20.5 48.5L22 46.5L23.5 44.5L25 42.5L28 39L30.5 36L33 33.5L37 30L39 28L42 25.5L47 21.5L50 19.5L53.5 17.5L56.5 15.5L61 13L64.5 11.5L66.5 10.5L70 9L74 7.5L78 6L81 5L84 4.5L89.5 3L95 2L98.5 1.5L103 1H106H116L122.5 1.5L127.5 2L133 3L143 5.5L148.5 7.5L154 9.5L159 12L163 14L169.5 18L179 24.5L183 28L192 37L198.5 45L204 53L205 54.5L206.5 58L210.5 66L213 72L215.5 79.5L216.5 83.5L218 91.5L219 97L219.5 103.5V109V109.5L212 109H199.5H199L199.5 108L199 102L198.5 98L196.5 87L194 79L191.5 73L187.5 65.5L185.5 62L182.5 57.5L176.5 50L171 44.5L163 38L158.5 35L152 31L148 29L144.5 27.5L139 25.5L135 24.5L131.5 23.5L127.5 22.5L124 22L121 21.5H120H117L113 21H111L105 21.5L99 22L93 23L87.5 24.5L84.5 25.5L80 27L75 29L69 32L64 35L60 38L53.5 43L49.5 47L46 50.5L43.5 53.5L39 59.5L37.5 62L36 64.5L33.5 69L32.5 71L30.5 75L28.5 80L27.5 84L26.5 87.5L25.5 91L24.5 96.5L24 100.5V105.742L23.5 109V109.5L22.5 109H1V108.5"
              stroke="white"
            />
          </svg>

          <div>
            <Arrow value={value} maxSpeed={maxSpeed} />
            <h1>{value}</h1>
          </div>
        </div>
      </div>
      <div id="mid"></div>
    </div>
  );
}

export default Speedometer;
