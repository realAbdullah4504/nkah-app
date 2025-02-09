import Image from "next/image"
import Link from "next/link"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"

export function AboutSection() {
  return (
    <section aria-label="about"  id="about">
      <FadeContainer className="container mx-auto max-w-6xl px-4">
        {/* Section Title */}
        <FadeSpan className="block text-center text-sm font-medium tracking-wider text-gray-700 uppercase">
          About Us
        </FadeSpan>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Image Container */}
          <FadeDiv className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/about.png"
                alt="Empowerment activities at Nkah Ni Nkwi Ni Mankon Center"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -right-3 -bottom-3 -z-10 h-full w-full rounded-2xl border-0 border-red-600/20" />
          </FadeDiv>

          {/* Content */}
          <div className="flex flex-col justify-center lg:pl-8">
            <FadeDiv className="space-y-6">
              <h2 className="text-4xl font-semibold tracking-tighter text-gray-900 sm:text-5xl sm:leading-[3.5rem]">
                A Legacy of Empowerment and Unity
              </h2>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg text-balance">
                  NKAH NI NKWI NI MANKON (Women of Light) is a female
                  apolitical, nonprofit, Non-Governmental Association created in
                  1986 with 26 women of Mankon origin. The organization is
                  dedicated to promoting self-reliance and empowering women and
                  children in the Mankon community.
                </p>
                <p className="text-lg text-balance">
                  With the motto of Love, Unity, Self-Reliance, and Development,
                  we operate across Cameroon and the diaspora, consistently
                  supporting target groups through scholarships, training,
                  donations, and counseling focused on education, health, and
                  human rights.
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 rounded-lg bg-red-50 p-6">
                <div className="text-center">
                  <span className="block text-5xl font-bold text-red-600">
                    37
                  </span>
                  <span className="mt-1 block text-sm font-medium text-gray-700">
                    Years
                  </span>
                </div>
                <div className="flex-1 border-l border-red-200 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    of Empowering Women and Children
                  </h3>
                  <p className="mt-1 text-gray-700">
                    Dedicated to fostering unity and self-reliance
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
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
