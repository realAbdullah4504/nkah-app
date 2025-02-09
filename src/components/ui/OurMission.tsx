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
          Upholding Love, Unity, and Development
        </p>
      </div>

      {/* Illustration (will replace the image externally) */}
      <div className="*:pointer-events-none">
        <AnalyticsIllustration />
      </div>

      {/* Divider */}
      <Divider className="mt-0" />

      {/* Mission Points (StickerCards) */}
      {/* Changed to align with NKAH NI NKWI NI MANKON's 5 mission statements */}
      <div className="grid grid-cols-1 grid-rows-3 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          // Keeping the same icon prop, but you could swap to something else if desired
          Icon={RiNavigationFill}
          title="Promote Self-Reliance"
          description="Encouraging the personal and collective development of Mankon women and children."
        />
        <StickerCard
          Icon={RiRobot3Fill}
          title="Build Mutual Trust & Unity"
          description="Strengthening understanding and unity among members to foster a supportive environment."
        />
        <StickerCard
          Icon={RiDropFill}
          title="Foster Culture & Learning"
          description="Providing a medium for Mankon women and children to learn and preserve the Mankon heritage."
        />
        <StickerCard
          Icon={RiPieChartFill}
          title="Spirit of Service & Solidarity"
          description="Encouraging unity and solidarity among members for the well-being of the entire Mankon community."
        />
        {/* <StickerCard
          // Added fifth card to capture the final mission point
          Icon={RiDropFill} // Duplicate icon—feel free to replace with another
          title="Strengthen Collective Development"
          description="Promoting and reinforcing communal self-reliance and growth for women and children worldwide."
        /> */}
      </div>
    </section>
  )
}
