export interface ResearchArea {
  title: string
  description: string
  iconName: string
}

export interface Stats {
  number: string
  label: string
}

export interface Images {
  main: string
  grid1: string
  grid2: string
  [key: string]: string
}

export type ImageKey = "main" | "grid1" | "grid2"

export interface ResearchData {
  heading: string
  title: string
  researchAreas: ResearchArea[]
  stats: Stats[]
  images: Images
  featuredTitle: string
  featuredDescription: string
  researchTitle: string
  researchDescription: string
}
