import Link from "next/link";
import info from "../../../mis-links.json";
const {author,href} = info.footer;

export default function Footer(){
  return (
    <footer className="mt-10 text-footer text-xs">Made by <Link className="hover:underline" href={href} target="_blank">{author}</Link></footer>
  );
}