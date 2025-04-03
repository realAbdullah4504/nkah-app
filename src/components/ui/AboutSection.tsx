import Image from "next/image"
import Link from "next/link"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"

export function AboutSection() {
  const values = [
    "Integrity: Honesty and transparency in all we do.",
    "Respect:Every member is valued.",
    "Collaboration: Working together for collective success.",
    "Excellence: Striving for the highest standards.",
    "Innovation: Encouraging creativity and forward-thinking.",
  ]

  return (
    <section aria-label="about" id="about">
      <FadeContainer className="container mx-auto max-w-6xl px-4">
        {/* Section Title */}
        <FadeSpan className="block text-center text-sm font-medium tracking-wider text-gray-700 uppercase">
          OUR VALUES
        </FadeSpan>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Image Container */}
          <FadeDiv className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/our-values.jpg"
                alt="value respect"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -right-3 -bottom-3 -z-10 h-full w-full rounded-2xl border-0 border-red-600/20" />
          </FadeDiv>

          {/* Content */}
          <div className="flex flex-col justify-center lg:pl-8">
            <FadeDiv className="">
              {values.map((value, index) => (
                <FadeDiv key={index} className="flex items-start gap-3 p-4">
                  <span className="mt-2 flex h-2.5 w-2.5 min-w-2.5 rounded-full bg-red-600" />
                  <p className="text-gray-700">{value}</p>
                </FadeDiv>
              ))}
              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/history"
                  className="inline-flex cursor-pointer items-center justify-center rounded-md border-b-[1.5px] border-red-600 bg-gradient-to-b from-red-600 to-red-700 px-5 py-3 font-medium tracking-wide text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-red-300"
                >
                  Learn More
                </Link>
                <Link
                  href="/resources/gallery"
                  className="inline-flex cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-3 font-medium tracking-wide text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50"
                >
                  View Gallery
                </Link>
              </div>
            </FadeDiv>
          </div>
        </div>
      </FadeContainer>
    </section>
  )
}
