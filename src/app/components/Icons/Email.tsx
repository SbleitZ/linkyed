import * as React from "react";

function _Email(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g stroke={props.color || "#000"} strokeWidth={2} strokeLinecap="round">
        <path d="M4 7l6.2 4.65a3 3 0 003.6 0L20 7" strokeLinejoin="round" />
        <rect x={3} y={5} width={18} height={14} rx={2} />
      </g>
    </svg>
  );
}

const Email = React.memo(_Email);
export default Email;
