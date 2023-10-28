import {
  SiVisualstudiocode,
  SiVercel,
  SiPrettier,
  SiYarn,
  SiSpotify,
  SiPostman,
  SiBrave,
  SiFirefox,
  SiOpensourceinitiative,
  SiNpm,
  SiGoogleassistant,
  SiMacos,
  SiComposer,
  SiApache,
  SiSlack,
  SiSkype,
  SiDocker,
} from "react-icons/si";
import {
  BsDownload,
  BsFillTerminalFill,
  BsGithub,
  BsUbuntu,
} from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import SVG from "@components/SVG";
import { Utilities } from "@lib/types";
import { BiSolidBrushAlt } from "react-icons/bi";

const utilities: Utilities = {
  title: "Utilities",
  description:
    "In case you are wondering What tech I use, Here's the list of what tech I'm currently using for coding on the daily basis. This list is always changing.",
  lastUpdate: "September 30, 2023",
  data: [
    {
      title: "System",
      data: [
        {
          name: "VSCode",
          description: "Primary Code editor",
          Icon: SiVisualstudiocode,
          link: "https://code.visualstudio.com/download",
        },
        {
          name: "GitHub Dark",
          description: "VS Code theme",
          Icon: BsGithub,
          link: "https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme",
        },
        {
          name: "Hyper",
          description: "Terminal",
          Icon: BsFillTerminalFill,
          link: "https://hyper.is",
        },
        {
          name: "Ubuntu 23",
          description: "Operating System",
          Icon: BsUbuntu,
          link: "https://ubuntu.com/download",
        },
        {
          name: "Sonoma",
          description: "Operating System",
          Icon: SiMacos,
          link: "https://www.apple.com/in/macos/sonoma",
        },
        {
          name: "Brave",
          description: "Primary Browser",
          Icon: SiBrave,
          link: "https://brave.com/en-in/download",
        },
        {
          name: "FireFox",
          description: "Secondary Browser",
          Icon: SiFirefox,
          link: "https://www.mozilla.org/en-US/firefox/all",
        },
      ],
    },

    {
      title: "Softwares & Applications",
      data: [
        {
          name: "Responsively",
          description: "Responsive Browser",
          Icon: SiOpensourceinitiative,
          link: "https://responsively.app",
        },
        {
          name: "Vercel",
          description: "Hosting for Projects",
          Icon: SiVercel,
          link: "http://vercel.com",
        },
        {
          name: "Prettier",
          description: "For Code formatting",
          Icon: SiPrettier,
          link: "https://prettier.io",
        },
        {
          name: "Git",
          description: "Version Control",
          Icon: FaGitAlt,
          link: "https://git-scm.com/downloads",
        },
        {
          name: "Github",
          description: "To Manage the Github Project and Changes",
          Icon: BsGithub,
          link: "https://github.com/",
        },
        {
          name: "Composer",
          description: "Primary Package Manager For PHP",
          Icon: SiComposer,
          link: "https://getcomposer.org",
        },
        {
          name: "npm",
          description: "Primary Package Manager",
          Icon: SiNpm,
          link: "https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",
        },
        {
          name: "yarn",
          description: "Alternative Package Manager",
          Icon: SiYarn,
          link: "https://classic.yarnpkg.com/lang/en/docs/install/",
        },
        {
          name: "Apache2",
          description: "Primary Local Server",
          Icon: SiApache,
          link: "https://httpd.apache.org",
        },
        {
          name: "Spotify",
          description: "To Listen Music",
          Icon: SiSpotify,
          link: "https://open.spotify.com",
        },
        {
          name: "DevGPT",
          description: "AI assistant for reviews spelling, grammar, etc.",
          Icon: SiGoogleassistant,
          link: "https://www.getdevkit.com/devgpt",
        },
        {
          name: "Maccy",
          description: "Clipboard manager for macOS",
          Icon: SiMacos,
          link: "https://maccy.app",
        },
        {
          name: "Microsoft Todo",
          description: "To manage all my todos",
          Icon: SVG.MicrosoftToDo,
          link: "https://todo.microsoft.com/tasks",
        },
        {
          name: "Postman",
          description: "API Testing",
          Icon: SiPostman,
          link: "https://postman.com",
        },
        {
          name: "Free Download Manager",
          description: "Download Manager",
          Icon: BsDownload,
          link: "https://www.freedownloadmanager.org",
        },
        {
          name: "Slack",
          description: "Communication Platform",
          Icon: SiSlack,
          link: "https://slack.com",
        },
        {
          name: "Skype",
          description: "Video Calls",
          Icon: SiSkype,
          link: "https://www.skype.com",
        },
        {
          name: "Docker",
          description: "Container Manager",
          Icon: SiDocker,
          link: "https://www.docker.com",
        },
        {
          name: "UR Cache Cleaner",
          description: "Drupal cache cleaning VSCode extension",
          Icon: BiSolidBrushAlt,
          link: "https://marketplace.visualstudio.com/items?itemName=UR-Services.ur-cache-cleaner",
        },
      ],
    },
  ],
};

export default utilities;
