import { EventsSection } from "@/components/ui/Events"
import { GovernanceSection } from "@/components/ui/GovernanceSection"

const EventPage = () => {
  return (
    <div className="py-24">
      <div>
        <EventsSection />
      </div>
      <div className="pt-24">
        <GovernanceSection />
      </div>
    </div>
  )
}

export default EventPage
