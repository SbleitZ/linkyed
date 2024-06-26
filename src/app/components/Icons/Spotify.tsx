import * as React from "react";

function _Spotify(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        d="M15.915 8.865c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 01-.543-1.79c3.533-1.073 9.405-.866 13.116 1.337a.935.935 0 01-.955 1.609zM15.81 11.7a.78.78 0 01-1.073.257c-2.687-1.652-6.785-2.13-9.964-1.165A.78.78 0 014.32 9.3c3.631-1.102 8.146-.568 11.233 1.329a.779.779 0 01.257 1.071zm-1.224 2.723a.623.623 0 01-.857.207c-2.348-1.435-5.304-1.759-8.785-.964a.622.622 0 11-.277-1.215c3.809-.871 7.076-.496 9.712 1.115.294.18.387.563.207.857zM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10C20 4.478 15.523.001 10 .001V0z"
        fill={props.color || "#000"}
        fillRule="evenodd"
      />
    </svg>
  );
}

const Spotify = React.memo(_Spotify);
export default Spotify;
