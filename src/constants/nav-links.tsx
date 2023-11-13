import BagIcon from "@/icons/BagIcon";
import HomeIcon from "@/icons/HomeIcon";
import MessageIcon from "@/icons/MessageIcon";
import PenIcon from "@/icons/PenIcon";
import LinkedinIcon, { GithubIcon } from "@/icons/SocialIcons";
import UserIcon from "@/icons/UserIcon";

export const NAV_LINKS = [
  {
    name: "hiep.tran",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "About",
    path: "/about",
    icon: <UserIcon />,
  },
  {
    name: "Works",
    path: "/works",
    icon: <BagIcon />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <MessageIcon />,
  },
  {
    name: "Tech Stack",
    path: "/tech-stack",
    icon: <PenIcon />,
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/tran-hiep-28a96a231/",
    icon: <LinkedinIcon />,
  },
  {
    name: "Github",
    link: "https://github.com/nhathiep1807",
    icon: <GithubIcon />,
  },
];
