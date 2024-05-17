import { memo } from "react";

function _Default(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 15h16M4 9h16"
        stroke={props.color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={12}
        cy={12}
        r={9}
        stroke={props.color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20.818l-.714.7a1 1 0 001.429 0l-.715-.7zm0-17.636l.715-.7a1 1 0 00-1.429 0l.714.7zM14.6 12a11.56 11.56 0 01-3.314 8.118l1.429 1.4A13.559 13.559 0 0016.6 12h-2zm-3.314-8.118A11.56 11.56 0 0114.6 12h2a13.56 13.56 0 00-3.885-9.518l-1.429 1.4zM9.4 12a11.56 11.56 0 013.315-8.118l-1.429-1.4A13.56 13.56 0 007.4 12h2zm3.315 8.118A11.559 11.559 0 019.4 12h-2c0 3.705 1.483 7.066 3.886 9.518l1.429-1.4z"
        fill={props.color}
      />
    </svg>
  );
}

const Default = memo(_Default);
export default Default;
