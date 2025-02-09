"use client"
import Image from "next/image"
import { useState } from "react"
import { FadeContainer } from "../Fade"
import { Modal } from "../Modal"

type GalleryItem = {
  id: number
  src: string
  category: string
  title: string
}
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/volunteer/0D51648D-8AF6-43C4-94A3-CF8400DEDE9D.jpeg",
    category: "events",
    title:
      "Giving back to the community through volunteering. Nkah  members with their children and mothers volunteering at the Feed My Starving Children. -2018 👆🏾👆🏾👆🏾",
  },
  {
    id: 2,
    src: "/images/volunteer/9F598823-B137-4F14-B606-913BC68C4F4A.jpeg",
    category: "events",
    title:
      "Giving back to the community through volunteering. Nkah  members with their children and mothers volunteering at the Feed My Starving Children. -2018 👆🏾👆🏾👆🏾",
  },
  {
    id: 3,
    src: "/images/volunteer/EF722B20-F532-4E3A-BFE3-E80A27E35D17.jpeg",
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
  {
    id: 6,
    src: "/images/honouring-husbands/4DD04B2C-EA0F-46B3-885E-4F1BE8A8D73D.jpeg",
    category: "events",
    title: "Nkah Minnesota honoring their husbands - 2019",
  },
  {
    id: 7,
    src: "/images/honouring-husbands/97FDFD01-11F2-454B-AF60-99B129BBA7C1.jpeg",
    category: "events",
    title: "Nkah Minnesota honoring their husbands - 2019",
  },

  {
    id: 8,
    src: "/main.jpg",
    category: "training",
    title: "Women's Leadership Workshop",
  },
  {
    id: 9,
    src: "/project.jpg",
    category: "community",
    title: "Community Outreach Event",
  },
]

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const categories = ["all", "events", "training", "community"]

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab)

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
    <section className="bg-gray-50 py-24" id="gallery">
      <FadeContainer className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Gallery</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore our collection of memorable moments and impactful events
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeTab === category
                  ? "scale-105 bg-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item translate-y-4 transform opacity-0 transition-all duration-500 ease-out"
              style={{
                animationName: "fadeInUp",
                animationDuration: "0.5s",
                animationFillMode: "forwards",
                animationDelay: `${item.id * 0.1}s`,
              }}
            >
              <div
                className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => openModal(item)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay - visible only on desktop */}
                  <div className="absolute inset-0 hidden bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
                    <div className="absolute bottom-0 p-6">
                      <h3 className="translate-y-4 transform text-lg font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
                        {item.title}
                      </h3>
                      <p className="mt-2 translate-y-4 transform text-sm text-gray-300 transition-transform duration-300 group-hover:translate-y-0">
                        {item.category.charAt(0).toUpperCase() +
                          item.category.slice(1)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile description - visible only on mobile */}
              <div className="mt-4 p-2 md:hidden">
                <h3 className="line-clamp-2 text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </p>
              </div>
            </div>
          ))}
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
                {selectedImage.category && (
                  <p className="mt-2 text-sm text-gray-300">
                    {selectedImage.category.charAt(0).toUpperCase() +
                      selectedImage.category.slice(1)}
                  </p>
                )}
              </div>
            </div>
          </Modal>
        )}
      </FadeContainer>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default GallerySection
