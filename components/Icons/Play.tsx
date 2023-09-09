import React from 'react'

const Play = () => {
  return (
    <svg
      className="w-9 h-9 text-primary"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      id="play"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        id="primary"
        cx={12}
        cy={12}
        r={10}
        fill='#fff'
      />
      <path
        id="secondary"
        d="M14.75,12.83,11.55,15A1,1,0,0,1,10,14.13V9.87A1,1,0,0,1,11.55,9l3.2,2.13A1,1,0,0,1,14.75,12.83Z"
        fill='currentColor'
      />
    </svg>
  )
}

export default Play
