
import * as React from "react";

const SubstackIcon = ({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="32" height="32" rx="16" fill="#FF6719"/>
    <rect x="6.5" y="9.5" width="19" height="2" rx="1" fill="#fff"/>
    <rect x="6.5" y="14.5" width="19" height="2" rx="1" fill="#fff"/>
    <rect x="6.5" y="19.5" width="19" height="2" rx="1" fill="#fff"/>
    <rect x="6.5" y="9.5" width="19" height="12" rx="2" stroke="#fff" strokeWidth="1.5"/>
  </svg>
);

export default SubstackIcon;
