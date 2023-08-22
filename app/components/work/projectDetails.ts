import {
    SiBootstrap,
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Omar's Portfolio 2023",
        description:
            "This is the portfolio you are currently on. Hope you enjoy it!",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/omarh19921",
        demo: "https://www.seekvisualartist.com/",
        image: "/projects/portfolio.webp",
        available: false,
    },
    {
        id: 1,
        name: "Poseidon",
        description:
            "Full-Service suite of productivity/Crm applications for the construction industry. Currently implemented at my company as a trial run before full-release.",
        technologies: [SiReact, SiNodedotjs, SiBootstrap],
        techNames: ["React", "NodeJs", "Bootstrap"],
        techLinks: ["https://react.dev/", "https://www.nodejs.org/", "https://bootstrapcss.com"],
        github: "https://github.com/omarh19921",
        demo: "https://www.codewars.com/",
        image: "/projects/portfolio.webp",
        available: false,
    },
    {
        id: 2,
        name: "Coming Soon",
        description:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [SiZig],
        techNames: ["Zig"],
        techLinks: ["https://www.ziglang.org/"],
        github: "https://github.com/nuIIpointerexception/",
        demo: "https://github.com/nuIIpointerexception/",
        image: "/projects/construction.webp",
        available: false,
    },
];
