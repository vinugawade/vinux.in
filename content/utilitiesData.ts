import {
  SiVisualstudiocode,
  // SiSublimetext,
  // SiMicrosoftedge,
  // SiGooglechrome,
  SiVercel,
  SiPrettier,
  // SiPnpm,
  SiYarn,
  // SiFigma,
  // SiInsomnia,
  // SiBitwarden,
  SiSpotify,
  // SiObsstudio,
  // SiGrammarly,
  // SiCanva,
  // SiGooglekeep,
  // SiNotepadplusplus,
  SiPostman,
  SiBrave,
  SiFirefox,
  // SiProtools,
  SiOpensourceinitiative,
  // SiAib,
  SiNpm,
  SiGoogleassistant,
  SiMacos,
} from "react-icons/si";
import {
  // BsFillPaletteFill,
  BsFillTerminalFill,
  // BsWindows,
  BsGithub,
  BsUbuntu,
} from "react-icons/bs";
import {
  FaGitAlt,
  // FaSearch
} from "react-icons/fa";
import SVG from "@components/SVG";
import { Utilities } from "@lib/types";

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
          name: "Ubuntu",
          description: "Operating System",
          Icon: BsUbuntu,
          link: "https://ubuntu.com/download",
        },
        {
          name: "MacOS",
          description: "Operating System",
          Icon: SiMacos,
          link: "https://ubuntu.com/download",
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
        // {
        //   name: "Figma",
        //   description: "Primary Design tool",
        //   Icon: SiFigma,
        //   link: "https://www.figma.com/downloads/",
        // },
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
        // {
        //   name: "Canva",
        //   description: "Secondary Design tool",
        //   Icon: SiCanva,
        //   link: "https://www.canva.com/",
        // },
        // {
        //   name: "Insomnia",
        //   description: "For testing APIs",
        //   Icon: SiInsomnia,
        //   link: "https://insomnia.rest/download",
        // },
        // {
        //   name: "OBS Studio",
        //   description: "Screen Recorder",
        //   Icon: SiObsstudio,
        //   link: "https://obsproject.com/",
        // },
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
        // {
        //   name: "ShareX",
        //   description:
        //     "To capture or record and share it with a single press of a ke",
        //   Icon: SVG.ShareX,
        //   link: "https://getsharex.com/downloads/",
        // },
        // {
        //   name: "Ditto",
        //   description: "Clipboard Manager",
        //   Icon: SVG.Ditto,
        //   link: "https://ditto-cp.sourceforge.io/",
        // },
        // {
        //   name: "f.lux",
        //   description: "To adjusts a display's color according to the time",
        //   Icon: SVG.Flux,
        //   link: "https://justgetflux.com/",
        // },

        {
          name: "Microsoft Todo",
          description: "To manage all my todos",
          Icon: SVG.MicrosoftToDo,
          link: "https://todo.microsoft.com/tasks",
        },
        // {
        //   name: "Raindrop.io",
        //   description: "Bookmark Manager",
        //   Icon: SVG.RainDrop,
        //   link: "https://raindrop.io/",
        // },
        // {
        //   name: "Google Keep",
        //   description: "Quick Note",
        //   Icon: SiGooglekeep,
        //   link: "https://keep.google.com/",
        // },
        // {
        //   name: "Notepad++",
        //   description: "Quick Code Editing",
        //   Icon: SiNotepadplusplus,
        //   link: "https://keep.google.com/",
        // },
        // {
        //   name: "7-Zip",
        //   description: "File Archiver",
        //   Icon: SVG.Zip7,
        //   link: "https://www.7-zip.org/download.html",
        // },
        // {
        //   name: "Flameshot",
        //   description: "Screenshot Software",
        //   Icon: SVG.Flameshot,
        //   link: "https://flameshot.org/",
        // },
        {
          name: "Postman",
          description: "API Testing",
          Icon: SiPostman,
          link: "https://postman.com",
        },
      ],
    },
  ],
};

export default utilities;
