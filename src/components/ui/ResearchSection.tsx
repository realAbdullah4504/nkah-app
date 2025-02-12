"use client"

import { BookOpen, Brain, LineChart, Users } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { FadeContainer, FadeDiv } from "../Fade"
import Customizer from "./Customizer"

const ResearchSection = () => {
  const [isEditing, setIsEditing] = useState(false)

  // State for research areas
  const [researchAreas, setResearchAreas] = useState([
    {
      title: "Impact Assessment",
      description: "Measuring program effectiveness and community outcomes",
      icon: <LineChart className="h-6 w-6 text-white" />,
    },
    {
      title: "Community Studies",
      description: "Understanding local needs and challenges",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      title: "Skills Development",
      description: "Training programs for economic empowerment",
      icon: <Brain className="h-6 w-6 text-white" />,
    },
    {
      title: "Educational Resources",
      description: "Creating learning materials and curricula",
      icon: <BookOpen className="h-6 w-6 text-white" />,
    },
  ])

  // State for stats
  const [stats, setStats] = useState([
    { number: "1000+", label: "Women Trained" },
    { number: "24", label: "Research Projects" },
    { number: "12", label: "Training Programs" },
  ])

  // State for images
  const [images, setImages] = useState({
    main: "/images/volunteer/9F598823-B137-4F14-B606-913BC68C4F4A.jpeg",
    grid1: "/images/volunteer/E87D995A-4CD2-453F-9199-92BF823B0DF8.jpeg",
    grid2: "/images/volunteer/394028B3-46DE-45BC-891B-D10B537F386E.jpeg",
  })

  // Image upload handler
  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    imageKey: string,
  ) => {
    const file = e.target.files?.[0]
    if (file) {
      // Here you would typically upload to your storage service
      // For now, we'll use a placeholder URL
      const imageUrl = URL.createObjectURL(file)
      setImages((prev) => ({ ...prev, [imageKey]: imageUrl }))
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
      {/* Edit Mode Toggle */}
      <div className="absolute right-6 z-10">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
        >
          {isEditing ? "Save Changes" : "Edit Page"}
        </button>
      </div>

      <FadeContainer className="container mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="text-center">
          <Customizer
            isEditing={isEditing}
            content="Research & Training"
            className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600"
          />
          <Customizer
            isEditing={isEditing}
            content="Empowering Through Knowledge"
            className="relative mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          />
        </div>

        {/* Research Areas */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {researchAreas.map((area, index) => (
            <FadeDiv
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 to-red-700 p-6 text-white shadow-lg"
            >
              <div className="relative z-10">
                <div className="mb-4 inline-block rounded-lg bg-white/10 p-3">
                  {area.icon}
                </div>
                <Customizer
                  isEditing={isEditing}
                  content={area.title}
                  className="text-xl font-semibold"
                />
                <Customizer
                  isEditing={isEditing}
                  content={area.description}
                  className="mt-2 text-sm text-red-100"
                />
              </div>
            </FadeDiv>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Stats Section */}
          <FadeDiv className="space-y-8">
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 text-center ring-1 shadow-lg ring-gray-100"
                >
                  <Customizer
                    isEditing={isEditing}
                    content={stat.number}
                    className="text-4xl font-bold text-red-600"
                  />
                  <Customizer
                    isEditing={isEditing}
                    content={stat.label}
                    className="mt-2 text-sm font-medium text-gray-600"
                  />
                </div>
              ))}
            </div>

            {/* Featured Image with Upload */}
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
              {isEditing && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "main")}
                  className="absolute inset-0 z-20 cursor-pointer opacity-0"
                />
              )}
              <Image
                src={images.main}
                alt="Training session in progress"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <Customizer
                  isEditing={isEditing}
                  content="Training Excellence"
                  className="text-2xl font-bold"
                />
                <Customizer
                  isEditing={isEditing}
                  content="Delivering high-impact training programs for sustainable development"
                  className="mt-2 max-w-md text-gray-200"
                />
              </div>
            </div>
          </FadeDiv>

          {/* Image Grid with Upload */}
          <FadeDiv className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              {["grid1", "grid2"].map((key, index) => (
                <div
                  key={key}
                  className="relative aspect-square overflow-hidden rounded-2xl shadow-lg"
                >
                  {isEditing && (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, key)}
                      className="absolute inset-0 z-20 cursor-pointer opacity-0"
                    />
                  )}
                  <Image
                    src={images[key]}
                    alt={`Research image ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </FadeDiv>
        </div>
      </FadeContainer>
    </section>
  )
}

export default ResearchSection
