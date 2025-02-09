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
            <span className="sr-only">Nkah Ni Nkwi Ni Mankon Logo</span>
            <Image
              src="/logo-clean.png"
              alt="Nkah Ni Nkwi Ni Mankon Logo"
              height={150}
              width={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link className="px-2 py-1 text-gray-900" href="/">
                Home
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="/about">
                About
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="/events">
                Events
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="/membership">
                Membership
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="/projects">
                Projects
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
              className="hidden h-10 px-4 font-semibold sm:block"
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
              <Link href="/about">About Us</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/events">Events</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/membership">Membership</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/projects">Projects</Link>
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
