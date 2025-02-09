import { BookOpen, Brain, LineChart, Users } from "lucide-react"
import Image from "next/image"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"

const ResearchSection = () => {
  const researchAreas = [
    {
      title: "Impact Assessment",
      description: "Measuring program effectiveness and community outcomes",
      icon: <LineChart className="h-6 w-6 text-white" />,
    },
    {
      title: "Community Studies",
      description: "Understanding local needs and challenges",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      title: "Skills Development",
      description: "Training programs for economic empowerment",
      icon: <Brain className="h-6 w-6 text-white" />,
    },
    {
      title: "Educational Resources",
      description: "Creating learning materials and curricula",
      icon: <BookOpen className="h-6 w-6 text-white" />,
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
      <FadeContainer className="container mx-auto max-w-7xl px-4">
        {/* Header with gradient underline */}
        <div className="text-center">
          <FadeSpan className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600">
            Research & Training
          </FadeSpan>
          <h2 className="relative mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Empowering Through Knowledge
            <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-red-600 to-red-400" />
          </h2>
        </div>

        {/* Research Areas - Horizontal Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {researchAreas.map((area, index) => (
            <FadeDiv
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 to-red-700 p-6 text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative z-10">
                <div className="mb-4 inline-block rounded-lg bg-white/10 p-3">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold">{area.title}</h3>
                <p className="mt-2 text-sm text-red-100">{area.description}</p>
              </div>
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent)]" />
            </FadeDiv>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Stats Section */}
          <FadeDiv className="space-y-8">
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "1000+", label: "Women Trained" },
                { number: "24", label: "Research Projects" },
                { number: "12", label: "Training Programs" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 text-center ring-1 shadow-lg ring-gray-100"
                >
                  <div className="text-4xl font-bold text-red-600">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/volunteer/9F598823-B137-4F14-B606-913BC68C4F4A.jpeg"
                alt="Training session in progress"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Training Excellence</h3>
                <p className="mt-2 max-w-md text-gray-200">
                  Delivering high-impact training programs for sustainable
                  development
                </p>
              </div>
            </div>
          </FadeDiv>

          {/* Image Grid */}
          <FadeDiv className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/volunteer/E87D995A-4CD2-453F-9199-92BF823B0DF8.jpeg"
                  alt="Workshop participants"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/volunteer/394028B3-46DE-45BC-891B-D10B537F386E.jpeg"
                  alt="Research presentation"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-r from-red-50 to-white p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">
                Evidence-Based Approach
              </h3>
              <p className="mt-2 text-gray-600">
                Our research initiatives are designed to create measurable
                impact and sustainable change in communities.
              </p>
            </div>
          </FadeDiv>
        </div>
      </FadeContainer>
    </section>
  )
}

export default ResearchSection
