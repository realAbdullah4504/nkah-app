"use client"
import { defaultResearchData } from "@/constants/research"
import { useResearch, useUpdateResearch } from "@/hooks/queries/useResearch"
import { ImageKey } from "@/types/research"
import { Camera } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import DynamicIcon from "../DynamicIcon"
import { FadeContainer, FadeDiv } from "../Fade"
import Customizer from "./Customizer"

const ResearchSection = () => {
  const [isEditing, setIsEditing] = useState(false)

  const { data: researchData } = useResearch()
  const { mutate: updateResearch } = useUpdateResearch()
  // console.log("data ", researchData, isLoading, error)

  // Image upload handler
  // const handleImageUpload = async (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   imageKey: string,
  // ) => {
  //   const file = e.target.files?.[0]
  //   if (file) {
  //     // Here you would typically upload to your storage service
  //     // For now, we'll use a placeholder URL
  //     const imageUrl = URL.createObjectURL(file)
  //     setImages((prev) => ({ ...prev, [imageKey]: imageUrl }))
  //   }
  // }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
      <button onClick={() => updateResearch(defaultResearchData)}>
        Update
      </button>
      <FadeContainer className="container mx-auto max-w-7xl px-4">
        {/* Edit Mode Toggle */}
        <div className="fixed right-4 z-50">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
          >
            {isEditing ? "Save Changes" : "Edit Page"}
          </button>
        </div>
        {/* Header Section */}
        <div className="text-center">
          <Customizer
            isEditing={isEditing}
            content={researchData?.heading ?? ""}
            className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600"
          />
          <Customizer
            isEditing={isEditing}
            content={researchData?.title ?? ""}
            className="relative mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          />
        </div>

        {/* Research Areas */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {researchData?.researchAreas.map((area, index) => (
            <FadeDiv
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 to-red-700 p-6 text-white shadow-lg"
            >
              <div className="relative z-10">
                <div className="mb-4 inline-block rounded-lg bg-white/10 p-3">
                  <DynamicIcon
                    name={area.iconName}
                    className="h-10 w-10 text-white"
                  />
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
              {researchData?.stats.map((stat, index) => (
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
                <div className="absolute top-4 right-4 z-20">
                  <label className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/60 transition-colors hover:bg-black/80">
                    <Camera className="h-6 w-6 text-white" />
                    <input
                      type="file"
                      accept="image/*"
                      // onChange={(e) => handleImageUpload(e, "main")}
                      className="hidden"
                    />
                  </label>
                </div>
              )}
              {researchData?.images?.main && (
                <Image
                  src={researchData?.images.main}
                  alt="Featured Research Image"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <Customizer
                  isEditing={isEditing}
                  content={researchData?.featuredTitle ?? ""}
                  className="text-2xl font-bold"
                />
                <Customizer
                  isEditing={isEditing}
                  content={researchData?.featuredDescription ?? ""}
                  className="mt-2 max-w-md text-gray-200"
                />
              </div>
            </div>
          </FadeDiv>

          {/* Image Grid with Upload */}
          <FadeDiv className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              {(["grid1", "grid2"] as ImageKey[]).map((key, index) => (
                <div
                  key={key}
                  className="relative aspect-square overflow-hidden rounded-2xl shadow-lg"
                >
                  {isEditing && (
                    <div className="absolute top-4 right-4 z-20">
                      <label className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/60 transition-colors hover:bg-black/80">
                        <Camera className="h-6 w-6 text-white" />
                        <input
                          type="file"
                          accept="image/*"
                          // onChange={(e) => handleImageUpload(e, key)}
                          className="absolute inset-0 z-20 cursor-pointer opacity-0"
                        />
                      </label>
                    </div>
                  )}
                  {researchData?.images[key] ? (
                    <Image
                      src={researchData?.images[key]}
                      alt={`Research image ${index + 1}`}
                      fill
                      className="object-cover transition-all duration-500 hover:scale-105"
                    />
                  ) : null}
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-gradient-to-r from-red-50 to-white p-6 shadow-lg">
              <Customizer
                isEditing={isEditing}
                content={researchData?.researchTitle ?? ""}
                className="text-2xl font-bold text-red-600"
              />
              <Customizer
                isEditing={isEditing}
                content={researchData?.researchDescription ?? ""}
                className="mt-2 text-gray-600"
              />
            </div>
          </FadeDiv>
        </div>
      </FadeContainer>
    </section>
  )
}

export default ResearchSection
