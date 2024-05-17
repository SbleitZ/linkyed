import Link from "next/link";
import info from "../../../mis-links.json";
import { cn } from "../utils/cn";
import Icon from "./Icon";
const { links } = info;
export default function Links() {
  return (
    <ul className="max-md:w-full flex flex-col space-y-2.5 text-white">
      {links.map((props, i) => (
        <LinkBox {...props} key={i} />
      ))}
    </ul>
  );
}
interface LinkBoxProps {
  icon: string;
  label: string;
  href: string;
  background: string;
  textAlign: string;
  effects: {
    duration: string;
    animation: string;
  };
}
function LinkBox({
  icon,
  label,
  background,
  href,
  textAlign,
  effects,
}: LinkBoxProps) {
  return (
    <li
      className={cn("rounded-md hover:scale-105 transition-all", effects.animation)}
      style={{ background: background }}
    >
      <Link
        href={href}
        target="_blank"
        className={cn(
          "flex gap-2 justify-center py-2.5 px-6 sm:px-24 items-center"
        )}
      >
        <Icon iconName={icon} className="h-6 w-6" color="white" />
        <div>{label}</div>
      </Link>
    </li>
  );
}
