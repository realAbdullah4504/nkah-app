import Image from "next/image"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"

const HistorySection = () => {
  const timelineEvents = [
    {
      year: "1986",
      title: "Foundation",
      content:
        "Mrs. Cecilia Wara and 26 educated Mankon women established the organization at the Old Presbyterian Church Azire hall Mankon.",
    },
    {
      year: "2023",
      title: "501C Status in Minnesota",
      content:
        "Obtained 501C status in Minnesota (DLN 26053699002327) on October 25th, expanding our reach internationally.",
    },
    {
      year: "Present",
      title: "Nine Branches",
      content:
        "Operating in 6 locations in Cameroon (Mankon Bamenda, Yaounde, Douala, Buea, Kumba, Limbe) and 3 in the USA (DMV Maryland, DC Metro, Minnesota).",
    },
    {
      year: "Ongoing",
      title: "Empowerment Center",
      content:
        "Established the Nkah Nikwi Empowerment Center on land granted by Fon S.A.N ANgwafor III of Mankon, located on the hills of Ngomgham.",
    },
  ]

  return (
    <section aria-label="about" className="py-24" id="about">
      <FadeContainer className="container mx-auto max-w-6xl px-4">
        <FadeSpan className="block text-center text-sm font-medium tracking-wider text-gray-700 uppercase">
          Our Journey Since 1986
        </FadeSpan>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Sticky Image Gallery */}
          <FadeDiv className="relative space-y-4 lg:sticky lg:top-24 lg:h-fit">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/project.jpg"
                alt="Founding members of Nkah Ni Nkwi Ni Mankon"
                fill
                priority
                className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 overflow-hidden rounded-xl">
                <Image
                  src="/about.png"
                  alt="Early community meetings"
                  fill
                  className="object-cover opacity-90 transition-opacity hover:opacity-100"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-xl">
                <Image
                  src="/membership.jpg"
                  alt="Recent empowerment workshop"
                  fill
                  className="object-cover opacity-90 transition-opacity hover:opacity-100"
                />
              </div>
            </div>
          </FadeDiv>

          {/* Historical Timeline */}
          <div className="flex flex-col justify-center lg:pl-8">
            <FadeDiv className="space-y-8">
              <h2 className="text-4xl font-semibold tracking-tighter text-gray-900 sm:text-5xl sm:leading-[3.5rem]">
                Preserving Heritage, Building Futures
              </h2>

              {/* Timeline */}
              <div className="relative space-y-12 border-l-2 border-red-100 pl-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative">
                    <div className="absolute top-2 -left-[20px] h-4 w-4 rounded-full bg-red-600 ring-4 ring-red-50" />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-red-600">
                        {event.year}
                      </h3>
                      <h4 className="text-lg font-medium text-gray-900">
                        {event.title}
                      </h4>
                      <p className="text-gray-600">{event.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Historical Quote */}
              <blockquote className="rounded-2xl border-l-4 border-red-600 bg-gradient-to-r from-red-50 to-white p-8 shadow-sm">
                <div className="relative">
                  <p className="text-lg leading-relaxed text-gray-700 italic">
                    &ldquo;The great Nkah Nikwi woman with the light on one hand
                    and a pen and book on the other shows exactly the mother of
                    humanity who is the light of the family and
                    community.&rdquo;
                  </p>
                  <cite className="mt-4 block font-medium text-red-600">
                    - Nkah Emblem Description
                  </cite>
                </div>
              </blockquote>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-lg bg-red-50 p-4 transition-transform hover:scale-105 hover:shadow-lg">
                  <div className="text-3xl font-bold text-red-600">9</div>
                  <div className="text-sm text-gray-600">
                    Branches Worldwide
                  </div>
                </div>
                <div className="rounded-lg bg-red-50 p-4 transition-transform hover:scale-105 hover:shadow-lg">
                  <div className="text-3xl font-bold text-red-600">37+</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
              </div>
            </FadeDiv>
          </div>
        </div>
      </FadeContainer>
    </section>
  )
}
export default HistorySection
