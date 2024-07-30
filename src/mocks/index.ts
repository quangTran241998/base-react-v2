import { iconsSvg } from "@/components/icons-svg";
import { BaseRoute } from "@/constants/baseRoute";

export const listNav = [
  { title: "Home", link: BaseRoute.Homepage },
  { title: "About Us", link: BaseRoute.about },
  { title: "Receive", link: BaseRoute.receive },
  { title: "Help", link: BaseRoute.help },
];

export const listSocial = [
  { icon: iconsSvg.IconFacebook, link: "" },
  { icon: iconsSvg.IconTwitter, link: "" },
  { icon: iconsSvg.IconGoogle, link: "" },
  { icon: iconsSvg.IconYoutube, link: "" },
];
