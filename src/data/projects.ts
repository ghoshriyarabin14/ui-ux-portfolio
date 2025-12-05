export interface Project {
  id: string;
  type: "case-study" | "snapshot";
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "fintech-app-redesign",
    type: "case-study",
    title: "Fintech App Redesign",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop",
    description: "Complete redesign of a mobile banking app improving user engagement by 40% through intuitive navigation and modern UI patterns.",
  },
  {
    id: "healthcare-dashboard",
    type: "case-study",
    title: "Healthcare Dashboard",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop",
    description: "Designed a comprehensive patient management dashboard for healthcare professionals with focus on accessibility and efficiency.",
  },
  {
    id: "ecommerce-experience",
    type: "case-study",
    title: "E-Commerce Experience",
    category: "UI Design",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop",
    description: "Created a seamless shopping experience with micro-interactions and optimized checkout flow reducing cart abandonment.",
  },
  {
    id: "travel-booking-app",
    type: "snapshot",
    title: "Travel Booking App",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop",
    description: "Concept design for a travel booking platform featuring immersive destination previews and smart itinerary planning.",
  },
  {
    id: "design-system",
    type: "case-study",
    title: "Enterprise Design System",
    category: "Design Systems",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1920&h=1080&fit=crop",
    description: "Built a scalable design system with 200+ components enabling consistent product experiences across platforms.",
  },
  {
    id: "food-delivery-redesign",
    type: "case-study",
    title: "Food Delivery Redesign",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&h=1080&fit=crop",
    description: "Reimagined the food ordering experience with personalized recommendations and real-time order tracking.",
  },
  {
    id: "fitness-app-ui",
    type: "snapshot",
    title: "Fitness App UI",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop",
    description: "Vibrant and motivating fitness app interface with gamification elements and progress visualization.",
  },
  {
    id: "saas-landing-page",
    type: "snapshot",
    title: "SaaS Landing Page",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    description: "High-converting landing page design with compelling storytelling and clear value proposition.",
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
    description: "Featured on Dribbble's homepage for the healthcare dashboard concept.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=800&fit=crop",
  },
  {
    id: "ux-conference",
    title: "UX India 2024",
    description: "Speaker at UX India Conference sharing insights on design systems at scale.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop",
  },
  {
    id: "design-publication",
    title: "Muzli Publication",
    description: "Published article on creating accessible design systems for enterprise products.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=800&fit=crop",
  },
];

export const skills = [
  "UI Design",
  "UX Design",
  "Product Design",
  "Design Systems",
  "Prototyping",
  "User Research",
  "Interaction Design",
];
