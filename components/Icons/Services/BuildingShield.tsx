import React, { memo } from 'react'

const BuildingShield = () => {
  return (
    <svg
      className="w-9 h-9 text-primary"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 298 298"
      xmlSpace="preserve"
      fill='currentColor'
    >
      <g>
        <path d="M278.125,33h-0.208H235v67h42.917C288.945,100,298,90.862,298,79.834V52.5C298,41.472,289.153,33,278.125,33z" />
        <path d="M20.75,33C9.722,33,0,41.472,0,52.5v27.334C0,90.862,9.722,100,20.75,100H63V33H20.75z" />
        <rect x={78} y={33} width={142} height={67} />
        <path d="M278.125,198h-0.208H235v67h42.917c11.028,0,20.083-9.138,20.083-20.166V217.5C298,206.472,289.153,198,278.125,198z" />
        <rect x={78} y={198} width={142} height={67} />
        <path d="M20.75,198C9.722,198,0,206.472,0,217.5v27.334C0,255.862,9.722,265,20.75,265H63v-67H20.75z" />
        <path d="M20.75,116C9.722,116,0,123.972,0,135v27.334C0,173.362,9.722,183,20.75,183H141v-67H20.75z" />
        <path d="M278.125,116h-0.208H156v67h121.917c11.028,0,20.083-9.638,20.083-20.666V135C298,123.972,289.153,116,278.125,116z" />
      </g>
    </svg>
  )
}

export default memo(BuildingShield)
