import { Mail, Phone } from "lucide-react"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"

export function ContactSection() {
  return (
    <section aria-label="contact" id="contact ">
      <FadeContainer className="container mx-auto max-w-6xl px-4">
        {/* Section Title */}
        <FadeSpan className="block text-center text-sm font-medium tracking-wider text-gray-700 uppercase">
          Contact Us
        </FadeSpan>

        {/* Main Title */}
        <h2 className="mt-4 text-center text-4xl font-semibold tracking-tighter text-gray-900 sm:text-6xl sm:leading-[4rem]">
          <FadeSpan>Get In Touch With</FadeSpan>{" "}
          <FadeSpan>Nkah Ni Nkwi Ni Mankon</FadeSpan>
        </h2>

        {/* Description */}
        <FadeDiv className="mx-auto mt-6 max-w-2xl text-center">
          <p className="text-lg text-balance text-gray-700">
            We are committed to empowering Mankon women and children globally.
            Reach out to us to learn more about our programs, become a member,
            or support our mission through donations and volunteer efforts.
          </p>
        </FadeDiv>

        {/* Contact Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Contact Info */}
          <FadeDiv className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-red-50">
                <Phone className="size-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700">
                  Call Us Now
                </h3>
                <p className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
                  +1 612-229-4290
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-red-50">
                <Mail className="size-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700">Email Us</h3>
                <p className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
                  info@nkahnikwi.org
                </p>
              </div>
            </div>
          </FadeDiv>

          {/* Contact Form */}
          <FadeDiv>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Your Mobile"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none"
                />
                <input
                  placeholder="Subject"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-md border-b-[1.5px] border-red-600 bg-gradient-to-b from-red-600 to-red-700 px-5 py-3 font-medium tracking-wide text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-red-300"
              >
                Send Message
              </button>
            </form>
          </FadeDiv>
        </div>
      </FadeContainer>
    </section>
  )
}
