"use client"
import { ChevronDown, Gift, HandHeart, MessageCircle } from "lucide-react"
import { useState } from "react"
import { FadeContainer, FadeDiv } from "../Fade"

const SupportSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const supportOptions = [
    {
      title: "Make a Donation",
      description: "Support our programs through financial contributions",
      icon: <Gift className="h-6 w-6" />,
      action: "Donate Now",
      link: "/donate",
    },
    {
      title: "Volunteer",
      description: "Join our community of dedicated volunteers",
      icon: <HandHeart className="h-6 w-6" />,
      action: "Get Involved",
      link: "/volunteer",
    },
    {
      title: "Partner With Us",
      description: "Collaborate on projects and initiatives",
      icon: <MessageCircle className="h-6 w-6" />,
      action: "Contact Us",
      link: "/contact",
    },
  ]

  const faqs = [
    {
      question: "How can I become a member?",
      answer:
        "Membership is open to women of Mankon origin. Contact our membership committee for details and application process.",
    },
    {
      question: "Where do my donations go?",
      answer:
        "Your donations directly support our educational programs, community initiatives, and empowerment projects.",
    },
    {
      question: "What volunteer opportunities are available?",
      answer:
        "We offer various volunteering opportunities in education, community outreach, and event organization.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24">
      <FadeContainer className="container mx-auto max-w-6xl px-4">
        {/* Hero Section */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-medium text-red-600">
            Support Our Cause
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Join Us in Making a Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Your support enables us to continue our mission of empowering women
            and children in the Mankon community.
          </p>
        </div>

        {/* Support Options */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {supportOptions.map((option, index) => (
            <FadeDiv
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-lg bg-red-50 p-3 text-red-600">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {option.title}
              </h3>
              <p className="mt-2 text-gray-600">{option.description}</p>
              <a
                href={option.link}
                className="mt-4 inline-flex items-center text-red-600 hover:text-red-700"
              >
                {option.action} →
              </a>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 group-hover:w-full" />
            </FadeDiv>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h3>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <FadeDiv
                key={index}
                className="rounded-lg border border-gray-200 bg-white"
              >
                <button
                  className="flex w-full items-center justify-between p-4 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="border-t border-gray-200 p-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </FadeDiv>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <FadeDiv className="mt-16 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold">Ready to Make an Impact?</h3>
          <p className="mt-2">
            Contact us today to learn more about how you can support our
            mission.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-medium text-red-600 shadow-md transition-all hover:bg-gray-50"
          >
            Get in Touch
          </a>
        </FadeDiv>
      </FadeContainer>
    </section>
  )
}

export default SupportSection
