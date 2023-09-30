import { SkillType } from "@lib/types";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  // SiNextdotjs,
  SiTailwindcss,
  // SiPython,
  SiGit,
  SiMysql,
  // SiFirebase,
  // SiTypescript,
  // SiReact,
  // SiC,
  // SiCplusplus,
  // SiFigma,
  // SiSupabase,
  SiNodedotjs,
  SiLinux,
  SiBootstrap,
  SiPhp,
  SiJquery,
  SiDrupal,
  // SiCivicrm,
  // SiShell,
  SiGnubash,
  SiWordpress,
  SiSass,
} from "react-icons/si";

const skills: SkillType[] = [
  {
    name: "HTML",
    Icon: SiHtml5,
  },
  {
    name: "CSS",
    Icon: SiCss3,
  },
  {
    name: "Javascript",
    Icon: SiJavascript,
  },
  {
    name: "PHP",
    Icon: SiPhp,
  },
  {
    name: "jQuery",
    Icon: SiJquery,
  },
  {
    name: "SASS",
    Icon: SiSass
  },
  {
    name: "Bash",
    Icon: SiGnubash,
  },
  {
    name: "Bootstrap",
    Icon: SiBootstrap,
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    name: "Drupal",
    Icon: SiDrupal,
  },
  {
    name: "Wordpress",
    Icon: SiWordpress,
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
  },
  {
    name: "Linux",
    Icon: SiLinux,
  },
  {
    name: "MySQL",
    Icon: SiMysql,
  },
  {
    name: "Git",
    Icon: SiGit,
  },
  // {
  //   name: "CiviCRM",
  //   Icon: SiCivicrm,
  // },
  // {
  //   name: "Python",
  //   Icon: SiPython,
  // },
  // {
  //   name: "Firebase",
  //   Icon: SiFirebase,
  // },
  // {
  //   name: "Supabase",
  //   Icon: SiSupabase,
  // },
  // {
  //   name: "Figma",
  //   Icon: SiFigma,
  // },
];

export default skills;
