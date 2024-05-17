import Amazon from "./Icons/Amazon";
import Behance from "./Icons/Behance";
import Default from "./Icons/Default";
import Discord from "./Icons/Discord";
import Dribbble from "./Icons/Dribbble";
import Email from "./Icons/Email";
import Facebook from "./Icons/Facebook";
import Github from "./Icons/Github";
import Instagram from "./Icons/Instagram";
import Link from "./Icons/Link";
import Linkedin from "./Icons/Linkedin";
import Onlyfans from "./Icons/Onlyfans";
import Pinterest from "./Icons/Pinterest";
import Snapchat from "./Icons/Snapchat";
import Souncloud from "./Icons/Souncloud";
import Spotify from "./Icons/Spotify";
import Tiktok from "./Icons/Tiktok";
import Tumblr from "./Icons/Tumblr";
import Twitch from "./Icons/Twitch";
import Twitter from "./Icons/Twitter";
import Whatsapp from "./Icons/Whatsapp";
import Youtube from "./Icons/Youtube";
interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: string;
}
const iconComponents: Record<string, React.FC<React.SVGProps<SVGSVGElement> | any>> = {
  discord: Discord,
  youtube: Youtube,
  twitter: Twitter,
  instagram: Instagram,
  twitch:Twitch,
  facebook:Facebook,
  tiktok:Tiktok,
  amazon:Amazon,
  spotify:Spotify,
  email:Email,
  github:Github,
  link:Link,
  linkedin:Linkedin,
  pinterest:Pinterest,
  whatsapp:Whatsapp,
  snapchat:Snapchat,
  souncloud:Souncloud,
  behance:Behance,
  dribbble:Dribbble,
  onlyfans:Onlyfans,
  tumblr:Tumblr,
  default: Default
};
export default function Icon({ iconName, ...rest }:IconProps){
  const IconComponent = iconComponents[iconName] || iconComponents.default;

  return (
    <IconComponent {...rest} />
  );
}