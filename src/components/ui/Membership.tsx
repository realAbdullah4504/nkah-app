import { Calendar, CreditCard, Network, UserCheck } from "lucide-react"
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
                  Join Our Community
                </h2>
                <p className="mt-4 text-lg text-balance text-gray-700">
                  Be part of a supportive network of professionals and friends
                  dedicated to growth, collaboration, and excellence in civil
                  engineering.
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
                      Eligibility
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Open to all civil engineering ex-students of GTHS Alabukam
                      (local and abroad). Associate membership available for
                      those connected to the civil engineering field.
                    </p>
                  </div>
                </div>

                {/* Membership Fees */}
                <div className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <CreditCard className="size-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Membership Fees
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Registration Fee: 2000 FCFA (non-refundable)
                      <br />
                      Annual Subscription: 10,000 FCFA
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <Network className="size-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Member Benefits
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Exclusive networking events, access to job opportunities,
                      industry news, professional development resources, and
                      participation in social and community service activities.
                    </p>
                  </div>
                </div>

                {/* Renewal Information */}
                <div className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <Calendar className="size-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Membership Renewal
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Membership is maintained through timely dues. Lost
                      membership may be reinstated via a formal application
                      process.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  href="/join"
                  className="inline-flex cursor-pointer items-center justify-center rounded-md border-b-[1.5px] border-red-600 bg-gradient-to-b from-red-600 to-red-700 px-5 py-3 font-medium tracking-wide text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-red-300"
                >
                  Become a Member
                </Link>
              </div>
            </div>
          </FadeDiv>

          <FadeDiv className="relative lg:pl-8">
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/membership.jpg"
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
