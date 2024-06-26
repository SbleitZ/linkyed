import * as React from "react";

function _Tumblr(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="-4 0 20 20" {...props}>
      <path
        d="M11.001 15.975L12 18.827c-.377.531-2.088 1.146-3.623 1.171-4.551.075-6.288-3.103-6.288-5.341V8H0V5.539C3.17 4.445 3.931 1.708 4.11.149A.162.162 0 014.261 0h3.05v5h4.178v3H7.311v6.349c0 .846.336 2.014 2.008 1.971.554-.013 1.294-.168 1.682-.345"
        fill={props.color || "#000"}
        fillRule="evenodd"
      />
    </svg>
  );
}

const Tumblr = React.memo(_Tumblr);
export default Tumblr;
