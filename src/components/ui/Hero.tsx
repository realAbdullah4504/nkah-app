import { RiArrowRightUpLine } from "@remixicon/react"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"
import GameOfLife from "./HeroBackground"

export function Hero() {
  return (
    <section aria-label="hero">
      <FadeContainer className="relative flex flex-col items-center justify-center">
        <FadeDiv className="mx-auto">
          {/* News / Announcement */}
          <a
            aria-label="Latest news about the organization's 501(c)(3) status"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full"
          >
            <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 shadow-lg shadow-red-500/30 ring-black/10 filter backdrop-blur-[1px] transition-colors hover:bg-red-100 focus:outline-hidden sm:text-sm">
              <span className="shrink-0 truncate rounded-full border bg-gray-50 px-2.5 py-1 text-sm text-gray-600 sm:text-xs">
                News
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">
                  501(c)(3) Nonprofit Status Granted!
                </span>
                <RiArrowRightUpLine className="size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </a>
        </FadeDiv>

        {/* Main Title */}
        <h1 className="mt-8 text-center text-4xl font-semibold tracking-tighter text-gray-900 sm:text-8xl sm:leading-[5.5rem]">
          <FadeSpan>Nkah Ni</FadeSpan> <FadeSpan>Nkwi</FadeSpan>
          <br />
          <FadeSpan>Ni</FadeSpan> <FadeSpan>Mankon</FadeSpan>
        </h1>

        {/* Subtext */}
        <p className="mt-5 max-w-4xl text-center text-base text-balance text-gray-700 sm:mt-8 sm:text-lg">
          <FadeSpan>
            Join us to foster love, unity, self-reliance, and development
          </FadeSpan>{" "}
          <FadeSpan>
            in underprivileged communities through scholarships, trainings, and
          </FadeSpan>{" "}
          <FadeSpan>donations that change lives.</FadeSpan>
        </p>

        {/* Call to Action */}
        <FadeDiv>
          <a
            className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md border-b-[1.5px] border-red-600 bg-gradient-to-b from-red-600 to-red-700 px-5 py-3 leading-4 font-medium tracking-wide text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-red-300"
            href="#"
          >
            Donate Now
          </a>
        </FadeDiv>

        {/* Background Animation */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <GameOfLife />
        </div>
      </FadeContainer>
    </section>
  )
}
