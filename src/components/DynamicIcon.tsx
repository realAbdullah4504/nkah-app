import { BookOpen, Brain, LineChart, LucideIcon, Users } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  LineChart,
  Users,
  Brain,
  BookOpen,
}

interface IconProps {
  name: string
  className?: string
}
const DynamicIcon = ({ name, className }: IconProps) => {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon className={className} />
}

export default DynamicIcon
