import { Calendar, Gift, UserCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"

export function MembershipSection() {
  return (
    <section aria-label="membership" id="membership">
      <FadeContainer className="container mx-auto max-w-6xl px-4">
        {/* Section Title */}
        <FadeSpan className="block text-sm font-medium tracking-wider text-gray-700 uppercase">
          Membership
        </FadeSpan>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Content */}
          <FadeDiv className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-semibold tracking-tighter text-gray-900 sm:text-5xl sm:leading-[3.5rem]">
                  Eligibility and Benefits
                </h2>
                <p className="mt-4 text-lg text-balance text-gray-700">
                  Becoming a member of Nkah Ni Nkwi Ni Mankon means joining a
                  vibrant community dedicated to empowering women, fostering
                  unity, and preserving the cultural heritage of Mankon.
                </p>
              </div>

              <div className="space-y-6">
                {/* Membership Eligibility */}
                <div className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <UserCheck className="size-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Membership Eligibility
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Membership is open to individuals aged 18 and above,
                      including Mankon natives, their families, and friends who
                      share our values of love, unity, and self-reliance.
                    </p>
                  </div>
                </div>

                {/* Membership Benefits */}
                <div className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <Gift className="size-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Membership Benefits
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Enjoy access to educational programs, social support,
                      cultural events, vocational training, and opportunities
                      for collective self-reliance and development.
                    </p>
                  </div>
                </div>

                {/* Programs and Activities */}
                <div className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <Calendar className="size-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Programs and Activities
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Participate in cultural celebrations, training workshops,
                      community events, and initiatives like scholarships and
                      empowerment programs.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  href="/login"
                  className="inline-flex cursor-pointer items-center justify-center rounded-md border-b-[1.5px] border-red-600 bg-gradient-to-b from-red-600 to-red-700 px-5 py-3 font-medium tracking-wide text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-red-300"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </FadeDiv>

          {/* Images */}
          <FadeDiv className="relative lg:pl-8">
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/membership-cropped.jpg"
                alt="Nkah Ni Nkwi Ni Mankon community members engaging in empowerment activities"
                fill
                className="rounded-2xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative Frame */}
            {/* <div className="absolute -right-3 -bottom-3 -z-10 h-[500px] w-full rounded-2xl border-2 border-red-600/20" /> */}
          </FadeDiv>
        </div>
      </FadeContainer>
    </section>
  )
}
