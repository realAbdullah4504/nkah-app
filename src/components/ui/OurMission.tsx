import {
  RiDropFill,
  RiNavigationFill,
  RiPieChartFill,
  RiRobot3Fill,
} from "@remixicon/react"
import { Divider } from "../Divider"
import AnalyticsIllustration from "./AnalyticsIllustration"
import { StickerCard } from "./StickerCard"

export function OurMission() {
  return (
    <section
      aria-labelledby="solar-analytics"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      {/* Section Title & Subtitle */}
      <div>
        <h2
          id="solar-analytics"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-red-600"
        >
          Our Mission
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-red-600" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Building strong communities through networking, mentorship, and
          innovation for positive social impact.
        </p>
      </div>

      {/* Illustration (will replace the image externally) */}
      <div className="*:pointer-events-none">
        <AnalyticsIllustration />
      </div>

      {/* Divider */}
      <Divider className="mt-0" />

      {/* Mission Points (StickerCards) */}
      <div className="grid grid-cols-1 grid-rows-3 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          Icon={RiNavigationFill}
          title="Networking"
          description="Building strong connections within the community through regular meetings, events, and shared experiences."
        />
        <StickerCard
          Icon={RiRobot3Fill}
          title="Mentorship"
          description="Facilitating knowledge transfer between experienced members and newcomers to foster personal and professional growth."
        />
        <StickerCard
          Icon={RiDropFill}
          title="Continuous Learning"
          description="Creating opportunities for skill development, education, and professional advancement within our community."
        />
        <StickerCard
          Icon={RiPieChartFill}
          title="Innovation & Service"
          description="Promoting collaborative initiatives and community service projects that drive positive change and innovation."
        />
      </div>
    </section>
  )
}
