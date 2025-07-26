import { HugeiconsIcon, HugeiconsIconProps } from "@hugeicons/react";
import { RefAttributes } from "react";

export const IconWrapper = (
  props: HugeiconsIconProps & RefAttributes<SVGSVGElement>
) => {
  return (
    <HugeiconsIcon
      {...props}
      className={`transition-all duration-300 ${props.className}`}
    />
  );
};
