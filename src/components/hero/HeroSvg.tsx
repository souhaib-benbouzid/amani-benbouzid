import { SVGProps } from "react";

const HeroSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={480}
    height={400}
    fill="#fff"
    {...props}
  >
    <g fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <path
        fillOpacity={0.5}
        d="M36.147.032c119.86-2.427 171.34 134.979 209.98 248.466 41.286 121.26 93.332 267.961-7.063 347.518-108.056 85.63-267.253 42.867-371.04-47.89-81.043-70.868-48.791-188.699-17.22-291.623C-114.998 145.017-80.442 2.393 36.147.032Z"
      />
      <path
        fillOpacity={0.6}
        d="M219.147 81.032c119.86-2.427 171.34 134.979 209.98 248.466 41.286 121.26 93.332 267.961-7.063 347.518-108.056 85.63-267.253 42.867-371.04-47.89-81.043-70.868-48.79-188.699-17.22-291.623 34.198-111.486 68.754-254.11 185.343-256.471Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M-183 0h663v400h-663z" />
      </clipPath>
    </defs>
  </svg>
);
export default HeroSvg;
