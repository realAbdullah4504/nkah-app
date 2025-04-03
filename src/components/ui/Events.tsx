import { Award, Calendar, Heart, Users } from "lucide-react"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"

export function EventsSection() {
  const activities = [
    {
      title: "Regular Meetings",
      description:
        "Regular gatherings (both online and in-person) to build community bonds",
      icon: <Users className="size-6 text-red-500" />,
      frequency: "Monthly",
    },
    {
      title: "Annual General Assembly",
      description:
        "An event to review progress, elect leadership, and plan future initiatives",
      icon: <Calendar className="size-6 text-red-500" />,
      frequency: "Yearly",
    },
    {
      title: "Special Events & Celebrations",
      description:
        "Milestones like birthdays, weddings, and memorial support during times of loss",
      icon: <Heart className="size-6 text-red-500" />,
      frequency: "Throughout the year",
    },
    {
      title: "Workshops & Talent Showcases",
      description:
        "Professional development events including 'CENEXS Got Talent'",
      icon: <Award className="size-6 text-red-500" />,
      frequency: "Quarterly",
    },
  ]

  return (
    <section aria-label="events">
      <FadeContainer className="container mx-auto px-4">
        {/* Section Title */}
        <FadeSpan className="block text-center text-sm font-medium tracking-wider text-gray-700 uppercase">
          Social & Professional Activities
        </FadeSpan>

        <div className="mx-auto max-w-6xl">
          <FadeDiv className="mt-16 grid gap-6 md:grid-cols-2">
            {activities.map((activity, index) => (
              <FadeDiv
                key={index}
                className="group rounded-2xl bg-white p-6 ring-1 shadow-sm ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-red-50">
                  {activity.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {activity.title}
                </h3>
                <p className="mb-3 text-gray-600">{activity.description}</p>
                <span className="text-sm font-medium text-red-600">
                  {activity.frequency}
                </span>
              </FadeDiv>
            ))}
          </FadeDiv>

          {/* Additional CTA */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center justify-center rounded-md border-b-2 border-red-600 bg-gradient-to-b from-red-600 to-red-700 px-5 py-2 font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              View Calendar
            </button>
            <button className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-2 font-medium text-gray-900 transition-colors hover:bg-gray-50">
              Suggest an Event
            </button>
          </div>
        </div>
      </FadeContainer>
    </section>
  )
}
