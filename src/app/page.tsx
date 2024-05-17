import Avatar from "./components/Avatar";
import info from "../../mis-links.json";
import Links from "./components/Links";
import Footer from "./components/Footer";
const {title,description} = info.basics;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 px-4 md:px-24 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] w-full">
      <div className="w-full flex flex-col items-center justify-center">
        <Avatar />
        <div className="text-center pt-4 pb-6">
          <h1 className="text-2xl font-extrabold dark:text-primary">{title}</h1>
          <h2 className=" dark:text-description">{description} </h2>
        </div>
        <Links />
      </div>
      <Footer />
    </main>
  );
}
