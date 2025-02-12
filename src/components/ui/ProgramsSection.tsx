"use client"
import { BookOpen, Building, Heart, Users } from "lucide-react"
import { useState } from "react"
import { FadeContainer, FadeDiv } from "../Fade"
import Customizer from "./Customizer"

const ProgramsSection = () => {
  // Editable state
  const [isEditing, setIsEditing] = useState(false)

  // State for title, subtitle, and quote
  const header = {
    title: "Empowering Communities Through Action",
    subtitle:
      "Our comprehensive programs focus on education, skill development, and community welfare to create lasting positive impact.",
    quote:
      '"Join us in our mission to create positive change. Together, we can build stronger communities and brighter futures for generations to come."',
  }

  // State for programs
  const programs = [
    {
      title: "Educational Scholarships",
      description:
        "Supporting children's education through financial assistance, ensuring access to quality education and fostering academic excellence in our communities.",
      icon: BookOpen,
    },
    {
      title: "Vocational Training",
      description:
        "Empowering women through comprehensive skills training programs in tailoring, hairdressing, and business management for sustainable livelihoods.",
      icon: Users,
    },
    {
      title: "Health & Wellness",
      description:
        "Promoting community health through awareness campaigns, maternal health programs, and preventive healthcare initiatives.",
      icon: Heart,
    },
    {
      title: "Community Development",
      description:
        "Implementing infrastructure projects and empowerment initiatives at the Nkah Nikwi Center to strengthen community bonds and improve living standards.",
      icon: Building,
    },
  ]

  // State for impact statistics
  const stats = [
    { value: "1000+", label: "Students Supported" },
    { value: "500+", label: "Women Empowered" },
    { value: "50+", label: "Communities Served" },
    { value: "37+", label: "Years of Service" },
  ]

  return (
    <section aria-label="programs" className="py-24" id="programs">
      <FadeContainer className="container mx-auto max-w-6xl px-4">
        {/* Toggle Edit Mode Button */}
        <div className="text-right">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
          >
            {isEditing ? "Save Changes" : "Edit Page"}
          </button>
        </div>

        {/* Header Section */}
        <div className="mt-8 text-center">
          <Customizer
            isEditing={isEditing}
            content={header.title}
            className="text-4xl font-semibold tracking-tighter text-gray-900 sm:text-5xl sm:leading-[3.5rem]"
          />
          <Customizer
            isEditing={isEditing}
            content={header.subtitle}
            className="mx-auto mt-4 max-w-2xl text-gray-600"
          />
        </div>

        {/* Programs Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <FadeDiv
              key={index}
              className="rounded-2xl border border-red-50 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-red-50 p-4">
                  <program.icon className="h-6 w-6 text-red-600" />
                </div>
                <Customizer
                  isEditing={isEditing}
                  content={program.title}
                  className="mb-3 text-xl font-semibold text-gray-900"
                />
                <Customizer
                  isEditing={isEditing}
                  content={program.description}
                  className="leading-relaxed text-gray-600"
                />
              </div>
            </FadeDiv>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="mt-20">
          <FadeDiv className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-lg bg-red-50 p-6 text-center transition-transform hover:scale-105 hover:shadow-lg"
              >
                <Customizer
                  isEditing={isEditing}
                  content={stat.value}
                  className="text-3xl font-bold text-red-600"
                />
                <Customizer
                  isEditing={isEditing}
                  content={stat.label}
                  className="mt-1 text-sm text-gray-600"
                />
              </div>
            ))}
          </FadeDiv>
        </div>

        {/* Quote Section */}
        <FadeDiv className="mt-16 text-center">
          <blockquote className="mx-auto max-w-3xl rounded-2xl border-l-4 border-red-600 bg-gradient-to-r from-red-50 to-white p-8 shadow-sm">
            <Customizer
              isEditing={isEditing}
              content={header.quote}
              className="text-lg leading-relaxed text-gray-700 italic"
            />
          </blockquote>
        </FadeDiv>
      </FadeContainer>
    </section>
  )
}

export default ProgramsSection
