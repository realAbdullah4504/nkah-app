"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { RiCloseFill, RiMenuFill } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "../Button"

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(15)

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
        scrolled || open
          ? "border-gray-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
          : "bg-white/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          {/* Logo - Ignore the actual logo image replacement as per instruction */}
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Civil Engineering Ex-Students Logo</span>
            <Image
              src="/logo.png"
              alt="Civil Engineering Ex-Students-Logo"
              height={100}
              width={60}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden sm:block">
            <div className="flex items-center gap-10 font-medium">
              <Link className="px-2 py-1 text-gray-900" href="/">
                Home
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="/about">
                Values
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="/events">
                Events & Governance
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="/membership">
                Membership & Organizational Structure
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="/contact">
                Contact
              </Link>
            </div>
          </nav>

          {/* Desktop Action Button */}
          <Link href="/login">
            <Button
              variant="secondary"
              className="hidden h-10 cursor-pointer px-4 font-semibold sm:block"
            >
              Login
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setOpen(!open)}
            variant="secondary"
            className="cursor-pointer p-1.5 sm:hidden"
            aria-label={open ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {!open ? (
              <RiMenuFill
                className="size-6 shrink-0 text-gray-900"
                aria-hidden
              />
            ) : (
              <RiCloseFill
                className="size-6 shrink-0 text-gray-900"
                aria-hidden
              />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={cx(
            "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/about">Values</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/events">Events & Governance</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/membership">
                Membership & Organizational Structure
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <Link href="/login" onClick={() => setOpen(false)}>
            <Button variant="secondary" className="cursor-pointer text-lg">
              Login
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
