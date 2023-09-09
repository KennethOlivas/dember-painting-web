import React, { memo } from 'react'

const PaintRoller = () => {
  return (
    <svg
      className="w-9 h-9 text-primary"
      width="800px"
      height="800px"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2.5C1 1.11929 2.11929 0 3.5 0H5V5H6V0H7V3H8V0H11.5C12.8807 0 14 1.11929 14 2.5V9.5C14 10.8807 12.8807 12 11.5 12H9V13.5C9 14.3284 8.32843 15 7.5 15C6.67157 15 6 14.3284 6 13.5V12H3.5C2.11929 12 1 10.8807 1 9.5V2.5ZM2 8V9.5C2 10.3284 2.67157 11 3.5 11H7V13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5V11H11.5C12.3284 11 13 10.3284 13 9.5V8H2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default memo(PaintRoller);
