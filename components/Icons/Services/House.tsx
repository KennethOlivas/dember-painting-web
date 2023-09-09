import React, { memo } from 'react'

const House = () => {
  return (
    <svg
      className="w-9 h-9 text-primary"
      width="800px"
      height="800px"
      viewBox="0 0 15 15"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.79062 0.0931333C7.61677 -0.0310444 7.38323 -0.0310444 7.20938 0.0931333L0.209381 5.09313C0.0779828 5.18699 0 5.33852 0 5.5V14.5C0 14.7761 0.223858 15 0.5 15H2V8H7V15H14.5C14.7761 15 15 14.7761 15 14.5V5.5C15 5.33852 14.922 5.18699 14.7906 5.09313L14 4.52841V2H13V3.81412L7.79062 0.0931333ZM11 12V8H12V12H11Z"
        fill="currentColor"
      />
      <path d="M6 15V12H5V11H6V9H3V15H6Z" fill="currentColor" />
    </svg>
  )
}

export default memo(House);
