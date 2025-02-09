import { Award, Building, ChevronRight, Shield, Star } from "lucide-react"
import Image from "next/image"
import { FadeContainer, FadeDiv } from "../Fade"

const SponsorsSection = () => {
  const sponsorTiers = [
    {
      name: "Platinum",
      price: "$10,000+",
      benefits: [
        "Premium logo placement",
        "VIP event access",
        "Custom partnership",
        "Annual report feature",
        "Speaking opportunities",
      ],
      icon: <Award className="h-8 w-8" />,
      accent: "from-amber-500 to-yellow-500",
    },
    {
      name: "Gold",
      price: "$5,000+",
      benefits: [
        "Featured recognition",
        "Event participation",
        "Impact reports",
        "Social media mentions",
      ],
      icon: <Shield className="h-8 w-8" />,
      accent: "from-red-500 to-red-600",
    },
    {
      name: "Silver",
      price: "$1,000+",
      benefits: [
        "Logo on website",
        "Newsletter mention",
        "Certificate",
        "Event tickets",
      ],
      icon: <Building className="h-8 w-8" />,
      accent: "from-gray-500 to-gray-600",
    },
  ]
  const currentSponsors = [
    {
      name: "TechCorp International",
      logo: "/project.jpg",
      category: "Platinum",
    },
    {
      name: "Global Industries",
      logo: "/project.jpg",
      category: "Gold",
    },
    {
      name: "Innovation Labs",
      logo: "/project.jpg",
      category: "Gold",
    },
    {
      name: "Future Forward",
      logo: "/project.jpg",
      category: "Silver",
    },
    // Add more sponsors as needed
  ]

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

      <FadeContainer className="relative container mx-auto max-w-7xl px-4">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
            <Star className="mr-1 h-4 w-4" />
            Become a Sponsor
          </span>
          <h2 className="mt-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Support Our Vision
          </h2>
        </div>

        {/* Sponsor Tiers */}
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {sponsorTiers.map((tier, index) => (
            <FadeDiv key={index} className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl">
                <div
                  className={`inline-flex rounded-xl bg-gradient-to-r p-3 ${tier.accent} mb-4 text-white`}
                >
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-3xl font-bold text-red-600">
                  {tier.price}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 font-medium text-white transition-all hover:from-red-700 hover:to-red-800">
                  Select Plan
                </button>
              </div>
            </FadeDiv>
          ))}
        </div>
        {/* Current Sponsors Grid */}
        <div className="mt-32 mb-20">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900">
              Our Valued Sponsors
            </h3>
            <p className="mt-4 text-gray-600">
              Organizations helping us create positive change
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {currentSponsors.map((sponsor, index) => (
              <FadeDiv
                key={index}
                className="group relative flex items-center justify-center"
              >
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain grayscale filter transition-all duration-300 hover:grayscale-0"
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      sponsor.category === "Platinum"
                        ? "bg-amber-100 text-amber-700"
                        : sponsor.category === "Gold"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {sponsor.category}
                  </span>
                </div>
              </FadeDiv>
            ))}
          </div>
        </div>
        {/* Impact Stats */}
        <div className="mb-20 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 p-12 text-white">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="mt-2 text-red-100">Active Sponsors</div>
            </div>
            <div>
              <div className="text-4xl font-bold">$2M+</div>
              <div className="mt-2 text-red-100">Impact Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold">1000+</div>
              <div className="mt-2 text-red-100">Lives Changed</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-bold">
            Ready to Make a Difference?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Join our community of sponsors and help us create lasting impact in
            the lives of women and children.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition-colors hover:bg-red-700"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="inline-flex items-center rounded-lg border border-red-600 px-6 py-3 font-medium text-red-600 transition-colors hover:bg-red-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </FadeContainer>
    </section>
  )
}

export default SponsorsSection
