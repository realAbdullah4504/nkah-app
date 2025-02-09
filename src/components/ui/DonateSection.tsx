import Link from "next/link"
import { FadeContainer, FadeDiv } from "../Fade"

const DonateSection = () => {
  return (
    <section className="bg-gray-50 py-24" id="donate">
      <FadeContainer className="container mx-auto max-w-4xl px-4 text-center">
        <FadeDiv>
          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            Support Our Cause
          </h2>
        </FadeDiv>
        <FadeDiv>
          <p className="mb-8 text-lg text-gray-700">
            Your donations play a crucial role in funding our programs,
            including scholarships for underprivileged children, vocational
            training for women, and community development projects. No
            contribution is too small. Your generosity can help change lives and
            uplift entire communities.
          </p>
        </FadeDiv>

        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FadeDiv>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                Bank Transfer
              </h3>
              <p className="text-gray-700">
                Account Name: NKAH NI NKWI NI MANKON
              </p>
              <p className="text-gray-700">Account Number: 1234567890</p>
              <p className="text-gray-700">Bank: Cameroon National Bank</p>
            </div>
          </FadeDiv>

          <FadeDiv>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                Mobile Money
              </h3>
              <p className="text-gray-700">
                MTN Mobile Money: +237 123 456 789
              </p>
              <p className="text-gray-700">Orange Money: +237 987 654 321</p>
            </div>
          </FadeDiv>
        </div>

        <FadeDiv>
          <Link href="/payment">
            <button className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-lg font-medium text-white shadow-md transition duration-200 hover:bg-red-700">
              Donate Now
            </button>
          </Link>
        </FadeDiv>
      </FadeContainer>
    </section>
  )
}

export default DonateSection
