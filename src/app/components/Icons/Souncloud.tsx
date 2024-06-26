import * as React from "react";

function _Souncloud(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 -4.5 20 20" {...props}>
      <path
        d="M8.586 10.748V.72c0-.32.096-.51.289-.572 3.212-.76 6.457 1.482 6.752 4.858 3.14-1.326 5.871 2.67 3.437 5.07a3.048 3.048 0 01-2.218.912l-8.093-.01a.256.256 0 01-.167-.23zm-2.177-.295c0 .725 1.377.734 1.377 0V.805c0-.913-1.377-.91-1.377 0v9.648zm-2.14 0c0 .708 1.377.736 1.377 0V4.766c0-.913-1.376-.909-1.376 0v5.687zm-2.13-.295c0 .729 1.368.74 1.368 0v-6.23c0-.883-1.368-.894-1.368 0v6.23zM0 9.015c0 .85 1.367 1.066 1.367 0V6.342c0-.905-1.367-.897-1.367 0v2.673z"
        fill={props.color || "#000"}
        fillRule="evenodd"
      />
    </svg>
  );
}

const Souncloud = React.memo(_Souncloud);
export default Souncloud;
