import { memo } from "react";


function _Link(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g stroke={props.color || "#000"} strokeWidth={1.5} strokeLinecap="round">
        <path d="M15.197 3.355c1.673-1.68 4.25-1.816 5.757-.305 1.506 1.512 1.37 4.1-.303 5.78l-2.424 2.433M10.047 14c-1.507-1.512-1.37-4.1.302-5.779L12.5 6.062" />
        <path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305-1.506-1.512-1.37-4.1.303-5.78l2.424-2.433" />
      </g>
    </svg>
  );
}

const Link = memo(_Link);
export default Link;
