import Link from "next/link";
import info from "../../../mis-links.json";
const {author,href,repository} = info.footer;

export default function Footer(){
  return (
    <footer className="mt-10 -mb-8 dark:text-dFooter text-footer text-xs text-center">
      <div>
        Made by <Link className="hover:underline" href={href} target="_blank">{author}</Link>
      </div>
      <div>
        Powered By <Link className="hover:underline" href={repository} target="_blank">linkyed</Link>
      </div>
    </footer>
  );
}