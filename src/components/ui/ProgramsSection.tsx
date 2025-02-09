import { BookOpen, Building, Heart, Users } from "lucide-react"
import Link from "next/link"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"

const programs = [
  {
    title: "Educational Scholarships",
    description:
      "Supporting children's education through financial assistance, ensuring access to quality education and fostering academic excellence in our communities.",
    icon: BookOpen,
  },
  {
    title: "Vocational Training",
    description:
      "Empowering women through comprehensive skills training programs in tailoring, hairdressing, and business management for sustainable livelihoods.",
    icon: Users,
  },
  {
    title: "Health & Wellness",
    description:
      "Promoting community health through awareness campaigns, maternal health programs, and preventive healthcare initiatives.",
    icon: Heart,
  },
  {
    title: "Community Development",
    description:
      "Implementing infrastructure projects and empowerment initiatives at the Nkah Nikwi Center to strengthen community bonds and improve living standards.",
    icon: Building,
  },
]

const ProgramsSection = () => {
  return (
    <section aria-label="programs" className="py-24" id="programs">
      <FadeContainer className="container mx-auto max-w-6xl px-4">
        <FadeSpan className="block text-center text-sm font-medium tracking-wider text-gray-700 uppercase">
          Our Programs & Initiatives
        </FadeSpan>

        {/* Header Section */}
        <div className="mt-8 text-center">
          <h2 className="text-4xl font-semibold tracking-tighter text-gray-900 sm:text-5xl sm:leading-[3.5rem]">
            Empowering Communities Through Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Our comprehensive programs focus on education, skill development,
            and community welfare to create lasting positive impact.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <FadeDiv
              key={program.title}
              className="rounded-2xl border border-red-50 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-red-50 p-4">
                  <program.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {program.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {program.description}
                </p>
              </div>
            </FadeDiv>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="mt-20">
          <FadeDiv className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="rounded-lg bg-red-50 p-6 text-center transition-transform hover:scale-105 hover:shadow-lg">
              <div className="text-3xl font-bold text-red-600">1000+</div>
              <div className="mt-1 text-sm text-gray-600">
                Students Supported
              </div>
            </div>
            <div className="rounded-lg bg-red-50 p-6 text-center transition-transform hover:scale-105 hover:shadow-lg">
              <div className="text-3xl font-bold text-red-600">500+</div>
              <div className="mt-1 text-sm text-gray-600">Women Empowered</div>
            </div>
            <div className="rounded-lg bg-red-50 p-6 text-center transition-transform hover:scale-105 hover:shadow-lg">
              <div className="text-3xl font-bold text-red-600">50+</div>
              <div className="mt-1 text-sm text-gray-600">
                Communities Served
              </div>
            </div>
            <div className="rounded-lg bg-red-50 p-6 text-center transition-transform hover:scale-105 hover:shadow-lg">
              <div className="text-3xl font-bold text-red-600">37+</div>
              <div className="mt-1 text-sm text-gray-600">Years of Service</div>
            </div>
          </FadeDiv>
        </div>

        {/* Call to Action */}
        <FadeDiv className="mt-16 text-center">
          <blockquote className="mx-auto max-w-3xl rounded-2xl border-l-4 border-red-600 bg-gradient-to-r from-red-50 to-white p-8 shadow-sm">
            <p className="text-lg leading-relaxed text-gray-700 italic">
              &quot;Join us in our mission to create positive change. Together,
              we can build stronger communities and brighter futures for
              generations to come.&quot;
            </p>
            <cite className="mt-4 block font-medium text-red-600">
              - Nkah Nikwi Leadership
            </cite>
          </blockquote>
          <Link href="/login" className="mt-8 inline-block">
            <button className="mt-8 rounded-md bg-red-600 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-red-700">
              Get Involved
            </button>
          </Link>
        </FadeDiv>
      </FadeContainer>
    </section>
  )
}

export default ProgramsSection
