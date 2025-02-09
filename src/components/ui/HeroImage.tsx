import Image from "next/image"

export default function HeroImage() {
  return (
    <section aria-label="Hero Image of the website">
      <div className="mx-auto px-4 sm:max-w-2xl lg:max-w-6xl">
        {/* Constrain container width, then maintain 16/9 ratio */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md md:h-[70vh]">
          <Image
            src="/main.jpg"
            alt="Hero image"
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 640px) 90vw,
                   (max-width: 1024px) 90vw,
                   1200px"
            priority
          />
        </div>
      </div>
    </section>
  )
}
