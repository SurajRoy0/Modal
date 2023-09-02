import * as React from "react"

const RedArrowSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200.694}
    height={101.78}
    viewBox="0 0 227.694 101.78"
    {...props}
  >
    <defs>
      <linearGradient
        id="b"
        x1={0.321}
        y1={0.057}
        x2={0.683}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#ec846e" />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
    </defs>
    <g data-name="Group 6755">
      <path
        data-name="Path 21126"
        d="M61.795 106.06v5.971c0 12.24 3.09 22.163 6.9 22.163H71.4v-65.75l-6.6 12.463z"
        transform="translate(-15.653 -271.414) translate(-46.142 239)"
        fill="#ec5c56"
        opacity={0.86}
      />
      <g data-name="Group 6695" fill="#ff5a5a">
        <path
          data-name="Path 21128"
          d="M168.17 34v55.369l31.319-27.685z"
          transform="translate(-15.653 -271.414) translate(-1 -87.586) translate(44.858 325)"
        />
        <path
          data-name="Path 21129"
          d="M69.193 48.426a25.259 25.259 0 00-7.4 17.86v39.774a35.043 35.043 0 0133.166-23.719h164.064V41.029H87.053a25.259 25.259 0 00-17.86 7.397z"
          transform="translate(-15.653 -271.414) translate(-1 -87.586) translate(-45.142 325)"
        />
      </g>
      <g data-name="Group 6690">
        <g data-name="Group 6689">
          <g data-type="innerShadowGroup">
            <text
              data-name="Red"
              transform="translate(42.347 38)"
              fill="#fff"
              fontSize={23}
              fontFamily="Montserrat-Black, Montserrat"
              fontWeight={800}
              opacity={0.9}
            >
              <tspan x={0} y={0}>
                {props.title}
              </tspan>
            </text>
            <g transform="translate(-.003)" filter="url(#a)">
              <text
                data-name="Red"
                transform="translate(42.35 38)"
                fill="#fff"
                fontSize={23}
                fontFamily="Montserrat-Black, Montserrat"
                fontWeight={800}
                opacity={0.9}
              >
                <tspan x={0} y={0}>
                  {props.title}
                </tspan>
              </text>
            </g>
          </g>
          {/* <path
            data-name="Path 19108"
            d="M-130.876 5864.634s-1.4 1.247-6.328 1.078l3.344 4.938h7.094Z"
            transform="translate(189.505 -5832.665)"
            fill="url(#b)"
          /> */}
        </g>
      </g>
    </g>
  </svg>
)

export default RedArrowSvg