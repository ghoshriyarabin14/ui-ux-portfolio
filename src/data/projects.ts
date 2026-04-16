export interface Project {
  id: string;
  type: "case-study" | "snapshot";
  title: string;
  category: string;
  image: string;
  description: string;
  cardBg?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "tetris-console",
    type: "case-study",
    title: "Tetris Console",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop",
    description: "End-to-end product design for a retro gaming console experience with modern interface patterns.",
    cardBg: "#1a1a2e",
  },
  {
    id: "google-material-design-system",
    type: "snapshot",
    title: "Google Material Design System",
    category: "Design System",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1920&h=1080&fit=crop",
    description: "A comprehensive snapshot exploring Material Design 3 component tokens and adaptive theming.",
    cardBg: "#c9caff",
  },
  {
    id: "agentic-iris",
    type: "case-study",
    title: "Agentic Iris",
    category: "AI Product Design",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop",
    description: "Designing the interface for an agentic AI assistant — orchestrating tasks, surfacing context, and managing multi-step reasoning flows.",
    cardBg: "#0f0f23",
  },
  {
    id: "youtube-sports",
    type: "snapshot",
    title: "Youtube Sports",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&h=1080&fit=crop",
    description: "Concept explorations for a dedicated sports tab on YouTube — live scores, highlight reels, and creator integrations.",
    cardBg: "#fcdcc8",
  },
  {
    id: "agentic-ai-salesforce",
    type: "case-study",
    title: "Agentic AI × Salesforce",
    category: "Enterprise UX",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop",
    description: "Reimagining the Salesforce CRM experience with embedded AI agents for sales teams — proactive nudges, pipeline intelligence, and smart drafting.",
    cardBg: "#e8e8f8",
  },
  {
    id: "fintech-redesign",
    type: "case-study",
    title: "Fintech App Redesign",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1563986768494-4dee09f4c58b?w=1920&h=1080&fit=crop",
    description: "Complete redesign of a mobile banking app improving user engagement by 40% through intuitive navigation and modern UI patterns.",
    cardBg: "#f0f4ff",
  },
];

export interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export const featuredItems: FeaturedItem[] = [
  {
    id: "awwwards-nominee",
    title: "Awwwards",
    description: "Nominated for Site of the Day for the innovative e-commerce experience design.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=800&fit=crop",
  },
  {
    id: "dribbble-featured",
    title: "Dribbble",
    description: "Featured on Dribbble's homepage for the Agentic Iris concept design.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=800&fit=crop",
  },
  {
    id: "ux-conference",
    title: "UX India 2024",
    description: "Speaker at UX India Conference sharing insights on design systems at scale.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop",
  },
  {
    id: "muzli-publication",
    title: "Muzli Publication",
    description: "Published article on creating accessible design systems for enterprise products.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=800&fit=crop",
  },
];

export const skills = [
  "Product Designer",
  "Brand Experience",
  "Interface Design",
  "Creative Direction",
  "System Design",
  "Prototyping",
];
