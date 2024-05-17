import * as React from "react";

function _Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path fill={props.color || "#000"} d="M283.122 122.174v46.583h83.424l-9.045 74.367h-74.379v268.375h-98.726V243.124h-51.443v-74.367h51.443v-56.302c0-27.82-2.096-41.02 9.725-62.578C205.948 28.32 239.308-.174 297.007.512c57.713.711 82.04 6.263 82.04 6.263l-12.501 79.257s-36.853-9.731-54.942-6.263c-18.065 3.469-28.482 14.597-28.482 42.405z" />
    </svg>
  );
}

const Facebook = React.memo(_Facebook);
export default Facebook;
