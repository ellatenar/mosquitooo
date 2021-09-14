import * as React from "react"
import { Moon } from "lunarphase-js";
import { Link } from "gatsby"

const MoonComponent = () => {

  const coverage = Moon.lunarAgePercent() >= .5
    ? (Moon.lunarAgePercent() - .5) * -139 + 105
    : Moon.lunarAgePercent() * -140 + 35.5

  return (
    <Link to="/">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={Moon.lunarPhase() + " Moon"}
          width="100"
          height="100"
          viewBox="0 0 73 73"
          id="moon"
        >
          <title>{Moon.lunarPhase()}</title>
          <defs>
            <radialGradient
              id="RadialGrad"
              fx="50%"
              fy="50%"
              r="65%"
              spreadMethod="pad"
            >
              <stop offset="0%" stopColor="#E7D68C" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFFEED" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="#3F4952" />
          <g transform="rotate(-20 35.5 35.5)">
            <circle
              cx="35.5"
              cy="35.5"
              r="35"
              stroke="none"
              fill="url(#RadialGrad)"
            />
            <circle cx={String(coverage)} cy="35.5" r="35" stroke="none" fill="#3F4952" id="shift">
              {/* <animate id="youngMoon" attributeName="cx" values="35.5;-35.5;" begin="1s;oldMoon.end+1s" dur="10s" fill="freeze" />
            <animate id="oldMoon" attributeName="cx" values="105;35.5;" begin="youngMoon.end+1s" dur="10s" fill="freeze" /> */}
            </circle>
          </g>
        </svg>
      </div>
    </Link>
  )
}

export default MoonComponent