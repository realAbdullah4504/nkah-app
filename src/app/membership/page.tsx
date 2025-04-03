import { MembershipSection } from "@/components/ui/Membership"
import { OrganizationSection } from "@/components/ui/OrganizationSection"

const MembershipPage = () => {
  return (
    <div className="py-24">
      {" "}
      <div>
        <MembershipSection />
      </div>
      <div className="pt-24">
        <OrganizationSection />
      </div>
    </div>
  )
}

export default MembershipPage
