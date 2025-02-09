import Image from "next/image"

export default function MissionPerformance() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg mt-12">
      <Image
        src="/group-2.jpg"
        alt="Group photo of NKAH NI NKWI NI MANKON members"
        width={1200}
        height={800}
        className="w-full object-cover"
      />
    </div>
  )
}
