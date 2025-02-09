import Image from "next/image"
import Link from "next/link"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"

export function ProjectSection() {
  return (
    <section aria-label="project" id="project">
      <FadeContainer className="container mx-auto max-w-6xl px-4">
        {/* Section Title */}
        <FadeSpan className="block text-center text-sm font-medium tracking-wider text-gray-700 uppercase">
          Our Project
        </FadeSpan>

        {/* Main Title */}
        <h2 className="mt-4 text-center text-4xl font-semibold tracking-tighter text-gray-900 sm:text-6xl sm:leading-[4rem]">
          <FadeSpan>Nkah Ni Nkwi Ni Mankon</FadeSpan>{" "}
          <FadeSpan>Empowerment</FadeSpan>
          <br />
          <FadeSpan>Center</FadeSpan>
        </h2>

        {/* Content Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Image */}
          <FadeDiv className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/project.jpg"
              alt="Empowerment center hosting events and trainings"
              fill
              className="object-cover"
            />
          </FadeDiv>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <FadeDiv>
              <p className="text-lg leading-relaxed text-balance text-gray-700">
                The Nkah Ni Nkwi Ni Mankon Empowerment Center, located on the
                hills of Ngomgham, Mankon, Bamenda, serves as a hub for
                education, training, and cultural preservation. This center is a
                beacon of hope and progress, providing resources and
                opportunities for women, children, and the broader Mankon
                community.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Host vocational and educational training programs",
                  "Support cultural preservation and teachings",
                  "Provide a shared space for community events and development",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-6 shrink-0 text-red-600"
                      stroke="currentColor"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <FadeDiv className="mt-8">
                <Link
                  className="inline-flex cursor-pointer items-center justify-center gap-1 rounded-md border-b-[1.5px] border-red-600 bg-gradient-to-b from-red-600 to-red-700 px-5 py-3 font-medium tracking-wide text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-red-300"
                  href="/resources/programs"
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
