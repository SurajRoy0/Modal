import React from "react"
const RibbonSvg = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={21.499} height={93} {...props}>
      <defs>
        <linearGradient
          id="a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#e6726d" stopOpacity={0.012} />
          <stop offset={0.497} stopColor="#e5726d" />
          <stop offset={1} stopColor="#e4716c" stopOpacity={0} />
        </linearGradient>
      </defs>
      <g data-name="Group 6752">
        <path
          data-name="Rectangle 3102"
          transform="translate(10.762)"
          fill="url(#a)"
          d="M0 0h1v93H0z"
        />
        <g data-name="Group 6702">
          <path
            data-name="Path 21133"
            d="M10.391 45.918s-13.9-3.009-8.3-8.61 8.3 8.61 8.3 8.61Z"
            fill="none"
            stroke="#D9243D"
            strokeWidth={1.5}
          />
          <path
            data-name="Path 21134"
            d="M11.11 46.097s13.9 3.01 8.3 8.611-8.3-8.611-8.3-8.611Z"
            fill="none"
            stroke="#D9243D"
            strokeWidth={1.5}
          />
          <path
            data-name="Path 21135"
            d="m10.071 46.414-7.08 4.6 3.873.363v4.236l4.357-9.2Z"
          />
          <path
            data-name="Path 21136"
            d="m12.141 46.414 7.08-4.6-3.873-.363v-4.236l-4.357 9.2Z"
          />
        </g>
      </g>
    </svg>
  )
  
  export default RibbonSvg