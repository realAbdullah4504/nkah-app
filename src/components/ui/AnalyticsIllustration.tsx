import Image from "next/image"

export default function MissionPerformance() {
  return (
    <div className="relative mt-12 w-full overflow-hidden rounded-lg">
      <Image
        src="/mission.jpg"
        alt="Group photo of NKAH NI NKWI NI MANKON members"
        width={1200}
        height={800}
        className="w-full object-cover"
      />
    </div>
  )
}
