import React, { memo } from 'react'

const Gallery = () => {
  return (
    <svg
      className="w-9 h-9 text-black"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      id="gallery-collections-round-left"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="secondary"
        d="M3,8v8a4,4,0,0,0,4,4H19"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <path
        id="primary"
        d="M16.24,8.68,21,13.44V15a1,1,0,0,1-1,1H16.59l-3.83-3.83ZM7,12.26V15a1,1,0,0,0,1,1h8.59L9.92,9.33ZM21,5V15a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5A1,1,0,0,1,8,4H20A1,1,0,0,1,21,5Z"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </svg>
  )
}

export default memo(Gallery);
