import React, { memo } from 'react'

const ToolBox = () => {
  return (
    <svg
      className="w-9 h-9 text-primary"
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 36 36"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x={16.4}
        y={15.4}
        width={3.2}
        height={5.2}
        className="clr-i-solid clr-i-solid-path-1"
      />
      <path
        d="M21,21a1,1,0,0,1-1,1H16a1,1,0,0,1-1-1V19H2v9a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19H21Z"
        className="clr-i-solid clr-i-solid-path-2"
      />
      <path
        d="M33.71,12.38,29.62,8.29A1,1,0,0,0,28.92,8h-5V6.05A2,2,0,0,0,22,4H13.84A1.92,1.92,0,0,0,12,6.05V8H7.08a1,1,0,0,0-.71.29L2.29,12.38a1,1,0,0,0-.29.71V17H15V15a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v2H34V13.08A1,1,0,0,0,33.71,12.38ZM22,8H14V6h8Z"
        className="clr-i-solid clr-i-solid-path-3"
      />
      <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
    </svg>
  )
}

export default memo(ToolBox);
