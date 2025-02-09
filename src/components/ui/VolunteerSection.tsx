import Image from "next/image"
import Link from "next/link"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"

const VolunteerSection = () => {
  return (
    <section aria-label="volunteer" className="bg-gray-50 py-24" id="volunteer">
      <FadeContainer className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center">
          <FadeSpan className="text-sm font-medium tracking-wider text-gray-700 uppercase">
            Become a Volunteer
          </FadeSpan>
          <h2 className="mt-4 text-4xl font-semibold tracking-tighter text-gray-900 sm:text-5xl sm:leading-[3.5rem]">
            Make a Real Difference
          </h2>
        </div>

        {/* Content Section */}
        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row-reverse">
          {/* Image Section */}
          <FadeDiv className="relative w-full max-w-lg">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/volunteer/0D51648D-8AF6-43C4-94A3-CF8400DEDE9D.jpeg"
                alt="Volunteers engaging in community activities"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-3 -left-1 -z-10 h-full w-full rounded-2xl border border-red-600/20" />
          </FadeDiv>

          {/* Text Section */}
          <FadeDiv className="max-w-2xl text-center lg:text-left">
            <p className="text-lg text-gray-700">
              We welcome volunteers who are passionate about community
              development and women’s empowerment. Whether you have skills in
              education, healthcare, training, or event planning, your
              contribution can create meaningful change.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Join a community of like-minded individuals working together to
              support women and children, foster self-reliance, and drive
              impactful projects.
            </p>

            {/* Stats */}
            <div className="mt-8 flex justify-center gap-8 lg:justify-start">
              <div className="text-center">
                <span className="block text-5xl font-bold text-red-600">
                  500+
                </span>
                <span className="mt-1 block text-sm font-medium text-gray-700">
                  Volunteers
                </span>
              </div>
              <div className="text-center">
                <span className="block text-5xl font-bold text-red-600">
                  100+
                </span>
                <span className="mt-1 block text-sm font-medium text-gray-700">
                  Projects Completed
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="/login"
                className="inline-flex cursor-pointer items-center justify-center rounded-md border-b-[1.5px] border-red-600 bg-gradient-to-b from-red-600 to-red-700 px-5 py-3 font-medium tracking-wide text-white shadow-md transition-all duration-200 hover:shadow-red-300"
              >
                Get Involved
              </Link>
              <Link
                href="/resources/programs"
                className="inline-flex cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-3 font-medium tracking-wide text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50"
              >
                Learn More
              </Link>
            </div>
          </FadeDiv>
        </div>
      </FadeContainer>
    </section>
  )
}

export default VolunteerSection
