import React from 'react'

function Arrow({ value, maxSpeed }) {
    return (
        <>
             <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: `rotate(${(maxSpeed / 180) + (value + 90)}deg)`,
              transition: "0.1s",
            }}
            viewBox="0 0 32 32"
            width="50px"
          >
            <path
              d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z"
              data-name="7-Arrow Up"
            />
          </svg>
        </>
    )
}

export default Arrow
