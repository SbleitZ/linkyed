import * as React from "react";

function _Twitch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path fill={props.color || "#000"} d="M26.711 14.929l-4.284 4.284h-4.285l-3.749 3.749v-3.749h-4.82V3.146h17.138zM8.502 1.004L3.146 6.36v19.279h6.427v5.356l5.356-5.356h4.284l9.641-9.64V1.003zm12.854 5.891h2.142v6.427h-2.142zm-5.892 0h2.143v6.427h-2.144z" />
    </svg>
  );
}

const Twitch = React.memo(_Twitch);
export default Twitch;
