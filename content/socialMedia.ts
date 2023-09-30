import { SocialPlatform } from "@lib/types";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiHashnode, SiInfiniti } from "react-icons/si";
// import { FaDev } from "react-icons/fa";

const socialMedia: SocialPlatform[] = [
  {
    title: "LinkedIn",
    Icon: BsLinkedin,
    url: "https://www.linkedin.com/in/vinu-gawade",
  },
  {
    title: "Github",
    Icon: BsGithub,
    url: "https://github.com/vinugawade",
  },
  {
    title: "Twitter",
    Icon: AiOutlineTwitter,
    url: "https://twitter.com/VinuGawade",
  },
  {
    title: "Instagram",
    Icon: AiOutlineInstagram,
    url: "https://www.instagram.com/vinugawadevr",
  },
  {
    title: "Daily.dev",
    Icon: SiInfiniti,
    url: "https://app.daily.dev/vinugawade",
  },
  {
    title: "HashNode",
    Icon: SiHashnode,
    url: "https://hashnode.com/@vinugawade",
  },
  {
    title: "Mail",
    Icon: HiMail,
    url: "mailto:vinulike11@gmail.com",
  },
];

export default socialMedia;
