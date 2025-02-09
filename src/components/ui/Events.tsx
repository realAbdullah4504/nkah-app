import { Calendar } from "lucide-react"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"

export function EventsSection() {
  return (
    <section aria-label="events">
      <FadeContainer className="container mx-auto px-4">
        {/* Section Title */}
        <FadeSpan className="block text-center text-sm font-medium tracking-wider text-gray-700 uppercase">
          Upcoming Events
        </FadeSpan>

        <div className="mx-auto max-w-3xl">
          <FadeDiv className="mt-16 flex flex-col items-center space-y-8">
            {/* Empty State Icon */}
            <div className="flex size-20 items-center justify-center rounded-full bg-red-50">
              <Calendar className="size-10 text-red-500" />
            </div>
            {/* Main Title */}
            <h2 className="text-center text-3xl font-semibold tracking-tighter text-gray-900 sm:text-4xl">
              No Upcoming Events at the Moment
            </h2>
            {/* Subtitle */}
            <h3 className="text-center text-xl font-medium text-gray-900">
              Stay Tuned for Future Events
            </h3>
            {/* Description */}
            <p className="text-center text-lg text-gray-700">
              At the moment, there are no upcoming events. However, we are
              constantly planning and preparing exciting cultural, social, and
              community-focused events. Stay connected for future updates!
            </p>

            {/* Additional CTA */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-2 font-medium text-gray-900 transition-colors hover:bg-gray-50">
                View Past Events
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-2 font-medium text-gray-900 transition-colors hover:bg-gray-50">
                Suggest an Event
              </button>
            </div>
          </FadeDiv>
        </div>
      </FadeContainer>
    </section>
  )
}
