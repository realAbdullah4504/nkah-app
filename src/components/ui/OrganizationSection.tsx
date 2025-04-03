import { Briefcase, UserCheck, Users2 } from "lucide-react"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"

export function OrganizationSection() {
  const structure = [
    {
      title: "General Assembly",
      description: "The highest decision-making body comprising all members",
      icon: <Users2 className="size-6 text-red-600" />,
    },
    {
      title: "Executive Committee",
      description: "Leadership team elected for 2-year terms, renewable once",
      icon: <UserCheck className="size-6 text-red-600" />,
      roles: [
        "President: Leads the community, sets strategic goals",
        "Vice President: Supports the President and acts in their absence",
        "Secretary General: Manages communications and documentation",
        "Financial Secretary: Keeps accurate financial records",
        "Treasurer: Oversees funds and financial integrity",
        "Discipline Officer: Enforces the code of conduct",
        "Public Relations Officer: Manages media outreach",
      ],
    },
    {
      title: "Advisory Board",
      description: "Provides strategic guidance and support",
      icon: <Briefcase className="size-6 text-red-600" />,
    },
  ]

  return (
    <section aria-label="organization" id="organization">
      <FadeContainer className="container mx-auto max-w-6xl px-4">
        {/* Section Title */}
        <FadeSpan className="block text-center text-sm font-medium tracking-wider text-gray-700 uppercase">
          Organizational Structure
        </FadeSpan>

        {/* Main Title */}
        <h2 className="mt-4 text-center text-4xl font-semibold tracking-tighter text-gray-900">
          <FadeSpan>Our Governance Structure</FadeSpan>
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          Built on transparency and inclusivity
        </p>

        {/* Content Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {structure.map((item, index) => (
            <FadeDiv
              key={index}
              className="rounded-2xl bg-white p-6 ring-1 shadow-sm ring-gray-100"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-red-50">
                {item.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>

              {item.roles && (
                <ul className="mt-4 space-y-2">
                  {item.roles.map((role, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 block size-1.5 rounded-full bg-red-600" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              )}
            </FadeDiv>
          ))}
        </div>

        {/* Additional Information */}
        <FadeDiv className="mt-12 rounded-xl bg-red-50 p-6">
          <h3 className="text-lg font-semibold text-red-900">
            Terms of Service
          </h3>
          <p className="mt-2 text-red-700">
            Executive Committee members serve 2-year terms, renewable once,
            ensuring fresh perspectives while maintaining continuity.
          </p>
        </FadeDiv>
      </FadeContainer>
    </section>
  )
}
