import { ResearchData } from "@/types/research"

export const defaultResearchData: ResearchData = {
  heading: "Research & Development",
  title: "Driving Social Change Through Research",
  researchAreas: [
    {
      title: "Impact Assessment",
      description: "Measuring program effectiveness and community outcomes",
      iconName: "LineChart",
    },
    {
      title: "Community Studies",
      description: "Understanding local needs and challenges",
      iconName: "Users",
    },
    {
      title: "Skills Development",
      description: "Training programs for economic empowerment",
      iconName: "Brain",
    },
    {
      title: "Educational Resources",
      description: "Creating learning materials and curricula",
      iconName: "BookOpen",
    },
  ],
  stats: [
    { number: "1000+", label: "Women Trained" },
    { number: "24", label: "Research Projects" },
    { number: "12", label: "Training Programs" },
  ],
  images: {
    main: "/images/volunteer/9F598823-B137-4F14-B606-913BC68C4F4A.jpeg",
    grid1: "/images/volunteer/E87D995A-4CD2-453F-9199-92BF823B0DF8.jpeg",
    grid2: "/images/volunteer/394028B3-46DE-45BC-891B-D10B537F386E.jpeg",
  },
  featuredTitle: "Training Excellence",
  featuredDescription:
    "Delivering high-impact training programs for sustainable development",
  researchTitle: "Research Excellence",
  researchDescription:
    "Our research projects are designed to drive social change and empower communities",
}
