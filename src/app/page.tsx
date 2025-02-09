import { AboutSection } from "@/components/ui/AboutSection"
import { ContactSection } from "@/components/ui/Contact"
import { EventsSection } from "@/components/ui/Events"
import FeatureDivider from "@/components/ui/FeatureDivider"
import Features from "@/components/ui/Features"
import { Hero } from "@/components/ui/Hero"
import HeroImage from "@/components/ui/HeroImage"
import { MembershipSection } from "@/components/ui/Membership"
import { OurMission } from "@/components/ui/OurMission"
import { ProjectSection } from "@/components/ui/Project"

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <div className="pt-30">
        <Hero />
        <div
          className="animate-slide-up-fade relative mx-auto mt-20 ml-3 max-w-6xl sm:ml-auto sm:w-full sm:px-2"
          style={{ animationDuration: "1400ms" }}
        >
          <HeroImage />
        </div>
      </div>
      <div className="px-4 xl:px-0">
        <Features />
      </div>
      <div className="py-8 px-4 xl:px-0">
        <AboutSection />
      </div>
      <div className="py-8 px-4 xl:px-0">
        <EventsSection />
      </div>
      <div className="py-8 px-4 xl:px-0">
        <MembershipSection />
      </div>
      <FeatureDivider className="max-w-6xl" />
      <div className="py-8 px-4 xl:px-0">
        <ProjectSection />
      </div>
      <FeatureDivider className="max-w-6xl" />
      <div className="py-8 px-4 xl:px-0">
        <OurMission />
      </div>
      <div className="py-8 px-4 xl:px-0">
        {/* <CallToAction /> */}
        <ContactSection />
      </div>
    </main>
  )
}
