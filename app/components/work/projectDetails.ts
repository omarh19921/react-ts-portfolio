import {
    SiBootstrap,
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiRedux,
    SiRust,
    SiStripe,
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
        github: "https://github.com/omarh19921/react-ts-portfolio",
        demo: "https://www.omarcodesnj.com/",
        image: "/projects/portfolio.webp",
        available: false,
    },
    {
        id: 1,
        name: "Think Big Technology",
        description:
            "Website for the agency i own and manage. Find more exciting projects there!",
        technologies: [SiReact,SiTailwindcss,SiNextdotjs],
        techNames: ["React","Tailwind CSS","Next.js"],
        techLinks: ["https://www.react.dev/","https://tailwindcss.com","https://nextjs.org"],
        github: "https://github.com/Think-Big-Technology/TBT",
        demo: "https://www.thinkbigtechnology.com",
        image: "/projects/construction.webp",
        available: true,
    },
    {
        id: 2,
        name: "Poseidon",
        description:
            "Full-Service suite of Productivity/CRM applications for the construction industry. Currently implemented at my company as a trial run before full-release.",
        technologies: [SiReact, SiNodedotjs, SiBootstrap, SiStripe],
        techNames: ["React", "Node.js", "Bootstrap CSS", "Stripe API"],
        techLinks: ["https://react.dev/", "https://www.nodejs.org/", "https://bootstrapcss.com", "https://stripe.com"],
        github: "https://github.com/Think-Big-Technology/Poseidon-Admin",
        demo: "http://www.poseidon-fire.com/admin",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 3,
        name: "Harry SanMartin",
        description:
            "Website for Harry San Martin, senate candidate in El Salvador. Using Stripe API for campaign donations.",
        technologies: [SiReact,SiBootstrap,SiStripe],
        techNames: ["React","Bootstrap CSS","Stripe API"],
        techLinks: ["https://www.react.dev/","https://bootstrapcss.com","https://stripe.com"],
        github: "https://github.com/Think-Big-Technology/Harry-Sanmartin-Campaign",
        demo: "https://www.harrysanmartin.com/",
        image: "/projects/construction.webp",
        available: true,
    },
    {
        id: 4,
        name: "Filmpire, a Netflix Clone",
        description:
            "Currently working on Filmpire, a clone of netflix using the IMDB API",
        technologies: [SiReact,SiTailwindcss,SiRedux],
        techNames: ["React","Tailwind CSS","Redux"],
        techLinks: ["https://www.react.dev/","https://tailwindcss.com","https://redux.org"],
        github: "https://github.com/omarh19921/",
        demo: "https://github.com/nuIIpointerexception/",
        image: "/projects/construction.webp",
        available: false,
    },
];
