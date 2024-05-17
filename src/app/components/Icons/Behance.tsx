import * as React from "react";

function _Behance(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g fill={props.color || "#000"}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 19A1.5 1.5 0 011 17.5v-11A1.5 1.5 0 012.5 5H8c5 0 5 6.5 2 6.5 3 0 4 7.5-2 7.5H2.5zm2-8a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H7s2 0 2 2-2 2-2 2H4.5zm0 2a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H8s1.5 0 1.5-2S8 13 8 13H4.5z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.499 14.003c.829 0 1.522-.683 1.353-1.495-1.245-5.98-9.94-5.427-9.852 1.495.066 5.273 7.434 6.964 9.604 2.187.345-.76-.43-1.19-1.067-1.19-.566 0-1.006.522-1.368.958-1.042 1.255-4.206 1.164-4.624-1.444-.044-.276.185-.51.466-.51h5.488zM15.819 12c-.148 0-.243-.155-.165-.28 1.06-1.678 3.607-1.66 4.686-.001.08.124-.014.28-.163.28h-4.359z"
        />
        <path d="M16 6a1 1 0 100 2h4a1 1 0 100-2h-4z" />
      </g>
    </svg>
  );
}

const Behance = React.memo(_Behance);
export default Behance;
