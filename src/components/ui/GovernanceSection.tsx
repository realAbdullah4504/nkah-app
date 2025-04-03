import { Building, FileText, Scale, Users2, Vote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"

export function GovernanceSection() {
  const governanceItems = [
    {
      title: "Voting Rights",
      description:
        "Every registered member has one vote in the General Assembly",
      icon: <Vote className="size-6 text-red-600" />,
    },
    {
      title: "Election Process",
      description:
        "Leadership positions are democratically elected every two years, with vacancies filled promptly",
      icon: <Users2 className="size-6 text-red-600" />,
    },
    {
      title: "Transparency",
      description:
        "Meeting minutes and financial statements are shared with all members",
      icon: <FileText className="size-6 text-red-600" />,
    },
    {
      title: "Amendments",
      description: "Constitutional changes require a two-thirds majority vote",
      icon: <Scale className="size-6 text-red-600" />,
    },
    {
      title: "Dissolution",
      description:
        "If necessary, dissolution will be handled according to established procedures to ensure fairness",
      icon: <Building className="size-6 text-red-600" />,
    },
  ]

  return (
    <section aria-label="governance" id="governance">
      <FadeContainer className="container mx-auto max-w-6xl px-4">
        {/* Section Title */}
        <FadeSpan className="block text-center text-sm font-medium tracking-wider text-gray-700 uppercase">
          Governance & Elections
        </FadeSpan>

        {/* Content Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Image */}
          <FadeDiv className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/governance.jpg"
              alt="Association members participating in democratic processes"
              fill
              className="object-cover"
            />
          </FadeDiv>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <FadeDiv>
              <div className="space-y-6">
                {governanceItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-50">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <FadeDiv className="mt-8">
                <Link
                  className="inline-flex cursor-pointer items-center justify-center gap-1 rounded-md border-b-[1.5px] border-red-600 bg-gradient-to-b from-red-600 to-red-700 px-5 py-3 font-medium tracking-wide text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-red-300"
                  href="/governance"
                >
                  Learn More
                </Link>
              </FadeDiv>
            </FadeDiv>
          </div>
        </div>
      </FadeContainer>
    </section>
  )
}
