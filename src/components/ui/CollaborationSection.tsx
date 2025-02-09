import {
  Building2,
  GraduationCap,
  Handshake,
  Landmark,
  Mail,
} from "lucide-react"
import { FadeContainer, FadeDiv } from "../Fade"

const CollaborationSection = () => {
  const partnerships = [
    {
      title: "NGO Partnerships",
      description: "Collaborate on joint initiatives and community programs",
      icon: <Handshake className="h-8 w-8 text-red-600" />,
    },
    {
      title: "Corporate Sponsorship",
      description:
        "Support our mission through financial or resource contributions",
      icon: <Building2 className="h-8 w-8 text-red-600" />,
    },
    {
      title: "Academic Institutions",
      description: "Research partnerships and educational programs",
      icon: <GraduationCap className="h-8 w-8 text-red-600" />,
    },
    {
      title: "Government Agencies",
      description: "Policy advocacy and public sector collaboration",
      icon: <Landmark className="h-8 w-8 text-red-600" />,
    },
  ]

  return (
    <section
      aria-label="collaboration"
      className="relative bg-gradient-to-b from-white to-gray-50 py-24"
      id="collaborate"
    >
      <FadeContainer className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Content Column */}
          <FadeDiv className="space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-medium tracking-wider text-gray-700 uppercase">
                Partnership Opportunities
              </span>
              <h2 className="text-4xl font-semibold tracking-tighter text-gray-900 sm:text-5xl sm:leading-[3.5rem]">
                Let&apos;s Create Impact Together
              </h2>
              <p className="text-lg text-gray-700">
                We believe in the power of collaboration. NKAH NI NKWI NI MANKON
                works with organizations, businesses, and government
                institutions to implement sustainable programs that uplift women
                and children.
              </p>
            </div>

            {/* Stats with gradient border */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative rounded-xl bg-white p-6 shadow-sm">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600 to-red-400 opacity-10" />
                <div className="text-3xl font-bold text-red-600">25+</div>
                <div className="mt-1 text-sm text-gray-600">
                  Active Partners
                </div>
              </div>
              <div className="relative rounded-xl bg-white p-6 shadow-sm">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600 to-red-400 opacity-10" />
                <div className="text-3xl font-bold text-red-600">40+</div>
                <div className="mt-1 text-sm text-gray-600">Joint Programs</div>
              </div>
            </div>
          </FadeDiv>

          {/* Partnership Cards */}
          <FadeDiv className="grid gap-4 sm:grid-cols-2">
            {partnerships.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </FadeDiv>
        </div>

        {/* CTA */}
        <FadeDiv className="mt-16 text-center">
          <a
            href="mailto:contact@nkah.org"
            className="inline-flex items-center justify-center gap-2 rounded-md border-b-[1.5px] border-red-600 bg-gradient-to-b from-red-600 to-red-700 px-6 py-3 font-medium tracking-wide text-white shadow-md transition-all duration-200 hover:shadow-red-300"
          >
            Partner With Us
            <Mail className="h-5 w-5" />
          </a>
        </FadeDiv>
      </FadeContainer>
    </section>
  )
}

export default CollaborationSection
