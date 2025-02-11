"use client"
import {
  RiCommunityLine,
  RiGlobalLine,
  RiHandHeartLine,
  RiHeart2Line,
  RiNotification2Line,
  RiTeamFill,
  RiUserHeartLine,
} from "@remixicon/react"
import Image from "next/image"
import { useState } from "react"
import { Modal } from "../Modal"
import { Orbit } from "../Orbit"
import ChipViz from "./ChipViz"

// Replace this with the NGO's mark or logo if available.
function NkahMark({ className }: { className?: string }) {
  return (
    <Image
      src="/cropped.png"
      alt="Nkah Ni Nkwi Ni Mankon Logo"
      width={100}
      height={100}
      className={className}
    />
  )
}
type GalleryItem = {
  id: number
  src: string
  category: string
  title: string
}
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/honouring-husbands/5501BAFF-5FF2-4F4A-940E-D5DF6EE68892.jpeg",
    category: "events",
    title: "Nkah Minnesota honoring their husbands - 2019",
  },
  {
    id: 2,
    src: "/images/honouring-husbands/A1DE2CAF-ACF0-41BF-82D0-4C3DBDC721D1.jpeg",
    category: "events",
    title: "Nkah Minnesota honoring their husbands - 2019",
  },
  {
    id: 3,
    src: "/images/volunteer/CCEDF235-81C6-4449-8DF8-F2F3A726212C.jpeg",
    category: "events",
    title:
      "Giving back to the community through volunteering. Nkah  members with their children and mothers volunteering at the Feed My Starving Children. -2018 👆🏾👆🏾👆🏾",
  },
  {
    id: 4,
    src: "/images/honouring-husbands/BB8FB5E3-4260-4AF9-AE01-2152A4938CDC.jpeg",
    category: "events",
    title: "Nkah Minnesota honoring their husbands - 2019",
  },
  {
    id: 5,
    src: "/images/honouring-husbands/3FD1041C-7F52-4CBB-B120-68EA100FF2BD.jpeg",
    category: "events",
    title: "Nkah Minnesota honoring their husbands - 2019",
  },
]

export default function Features() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const getScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth
  }

  const openModal = (item: GalleryItem) => {
    const scrollbarWidth = getScrollbarWidth()
    document.body.style.overflow = "hidden"
    // Add padding to prevent layout shift
    document.body.style.paddingRight = `${scrollbarWidth}px`
    setSelectedImage(item)
  }

  const closeModal = () => {
    document.body.style.overflow = "unset"
    document.body.style.paddingRight = "0px"
    setSelectedImage(null)
  }
  return (
    <section
      aria-label="Nkah Ni Nkwi Ni Mankon Programs & Activities"
      id="programs"
      className="relative mx-auto max-w-6xl scroll-my-24"
    >
      {/* Vertical Decorative Lines */}
      <div className="inset-0 select-none">
        {/* Left */}
        <div
          className="absolute inset-y-0 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Right */}
        <div
          className="absolute inset-y-0 right-0 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Middle */}
        <div
          className="absolute inset-y-0 left-1/2 -z-10 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* 25% */}
        <div
          className="absolute inset-y-0 left-1/4 -z-10 my-[-5rem] hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* 75% */}
        <div
          className="absolute inset-y-0 left-3/4 -z-10 my-[-5rem] hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
        {/* 1) First Feature */}
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-red-600">
            Empowering Communities
            <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-red-600" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            A network of women fostering love, unity & self-reliance
          </p>
          <p className="mt-4 text-balance text-gray-700">
            We connect dedicated members, volunteers, and partners across the
            country and diaspora to uplift communities through scholarships,
            training, donations, and advocacy—all from our robust network and
            empowerment center on the hills of Ngomgham Mankon.
          </p>
        </div>

        {/* Orbit Visualization */}
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg className="absolute size-full [mask-image:linear-gradient(transparent,white_10rem)]">
            <defs>
              <pattern
                id="diagonal-feature-pattern"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      className="stroke-gray-200/70"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="h-[26rem] p-10 select-none">
            <div className="relative flex flex-col items-center justify-center">
              <Orbit
                durationSeconds={40}
                radiusPx={140}
                keepUpright
                orbitingObjects={[
                  // Object 1
                  <div
                    key="obj1"
                    className="relative flex cursor-pointer items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(galleryItems[0])
                    }}
                  >
                    <RiTeamFill className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-red-500 p-1 text-xs ring-1 ring-gray-200">
                          <RiHeart2Line className="size-3 shrink-0 text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs whitespace-nowrap ring-1 ring-gray-200">
                          Volunteer Drive
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: "1s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-red-600/50"
                    ></div>
                  </div>,

                  // Object 2
                  <div
                    key="obj2"
                    className="relative flex cursor-pointer items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(galleryItems[1])
                    }}
                  >
                    <RiCommunityLine className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-gray-500 p-1 text-xs ring-1 ring-gray-200">
                          <RiNotification2Line className="size-3 shrink-0 text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
                          Community Alert
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: "4s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-red-600/50"
                    ></div>
                  </div>,

                  // Object 3
                  <div
                    key="obj3"
                    className="relative flex cursor-pointer items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(galleryItems[2])
                    }}
                  >
                    <RiUserHeartLine className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div
                      style={{
                        animationDelay: "2s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-red-600/50"
                    ></div>
                  </div>,

                  // Object 4
                  <div
                    key="obj4"
                    className="relative flex cursor-pointer items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(galleryItems[3])
                    }}
                  >
                    <RiHandHeartLine className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-emerald-500 p-1 text-xs ring-1 ring-gray-200">
                          <RiHeart2Line className="size-3 shrink-0 text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
                          Empowerment
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: "6s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-red-600/50"
                    ></div>
                  </div>,

                  // Object 5
                  <div
                    key="obj5"
                    className="relative flex cursor-pointer items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(galleryItems[4])
                    }}
                  >
                    <RiGlobalLine className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div
                      style={{
                        animationDelay: "3s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-red-600/50"
                    ></div>
                  </div>,
                ]}
              >
                <div className="relative flex h-48 w-48 items-center justify-center">
                  <div className="rounded-full p-1 ring-1 ring-black/10">
                    <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-white ring-1 shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_7px_10px_0_rgba(0,0,0,0.15)] ring-black/20">
                      <NkahMark className="size-20" />
                    </div>
                    <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-gradient-to-t from-transparent via-red-600 to-transparent blur-lg" />
                  </div>
                </div>
              </Orbit>
            </div>
          </div>
        </div>

        {/* 3) Third Feature */}
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-red-600">
            Expanding Our Impact
            <div className="absolute top-1 -left-[7px] h-5 w-[3px] rounded-r-sm bg-red-600" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            Grow our reach with simple, collaborative efforts
          </p>
          <p className="mt-4 text-balance text-gray-700">
            We continuously develop new branches and initiatives to support
            underprivileged families. With every program added, our global
            network automatically collaborates—amplifying resources and impact.
          </p>
        </div>
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg className="absolute size-full [mask-image:linear-gradient(white_10rem,transparent)]">
            <defs>
              <pattern
                id="diagonal-feature-pattern"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      className="stroke-gray-200/70"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="relative flex h-[26rem] w-full items-center justify-center p-10 select-none">
            <div className="relative">
              {/* Example Icons in corners */}
              <div className="absolute top-[6rem] left-[6rem] z-20">
                <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10">
                  <div className="w-fit rounded-full bg-gradient-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.09),0_3px_5px_0_rgba(0,0,0,0.19)] ring-white/50 ring-inset">
                    <RiNotification2Line
                      className="size-5 text-gray-900"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute top-[6rem] right-[6rem] z-20">
                <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10">
                  <div className="w-fit rounded-full bg-gradient-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-white/50 ring-inset">
                    <RiTeamFill
                      className="size-5 text-gray-900"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute right-[6rem] bottom-[6rem] z-20">
                <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10">
                  <div className="w-fit rounded-full bg-gradient-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-white/50 ring-inset">
                    <RiHeart2Line
                      className="size-5 text-gray-900"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[6rem] left-[6rem] z-20">
                <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10">
                  <div className="w-fit rounded-full bg-gradient-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-white/50 ring-inset">
                    <RiGlobalLine
                      className="size-5 text-gray-900"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Radiating Lines */}
            <div className="relative">
              {[0, 45, 135, 180, 225, 315, 360].map((rotation, index) => (
                <div
                  key={rotation}
                  className="absolute origin-left overflow-hidden"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="relative">
                    <div className="h-0.5 w-60 bg-gradient-to-r from-gray-300 to-transparent" />
                    <div
                      className="absolute top-0 left-0 h-0.5 w-28 bg-gradient-to-r from-transparent via-red-600 to-transparent"
                      style={{
                        animation: `gridMovingLine 5s linear infinite ${index * 1.2}s`,
                        animationFillMode: "backwards",
                      }}
                    />
                  </div>
                </div>
              ))}
              <div className="absolute -translate-x-1/2 -translate-y-1/2">
                <ChipViz />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onClose={closeModal}
          className="max-h-[90vh] w-auto max-w-[90vw]"
        >
          <div className="relative">
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
              priority
            />
            <div className="absolute right-0 bottom-0 left-0 hidden bg-gradient-to-t from-black/90 to-transparent p-6 backdrop-blur-sm md:block">
              <h3 className="text-xl font-medium text-white">
                {selectedImage.title}
              </h3>
              {/* {selectedImage.category && (
                <p className="mt-2 text-sm text-gray-300">
                  {selectedImage.category.charAt(0).toUpperCase() +
                    selectedImage.category.slice(1)}
                </p>
              )} */}
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
