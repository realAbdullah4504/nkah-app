"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FadeContainer, FadeDiv } from "../Fade"

const ForgetPasswordSection = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Add password reset logic here
    setTimeout(() => {
      setIsLoading(false)
      setSuccess(true)
    }, 1500)
  }

  return (
    <section className="min-h-screen bg-gray-50 py-24">
      <FadeContainer className="container mx-auto max-w-md px-4">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={60}
                // className="h-16 w-16"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
            <p className="mt-2 text-sm text-gray-600">
              Enter your email to receive password reset instructions
            </p>
          </div>

          {success ? (
            <FadeDiv className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-green-100 p-2">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Check your email
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                We&apos;ve sent you instructions to reset your password.
              </p>
              <Link
                href="/login"
                className="mt-6 inline-block text-sm font-medium text-red-600 hover:text-red-500"
              >
                Return to login
              </Link>
            </FadeDiv>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <FadeDiv>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                />
              </FadeDiv>

              {error && (
                <FadeDiv className="rounded-md bg-red-50 p-4 text-sm text-red-600">
                  {error}
                </FadeDiv>
              )}

              <FadeDiv>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-md bg-red-600 px-4 py-2 text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Reset Password"}
                </button>
              </FadeDiv>

              <FadeDiv className="text-center">
                <Link
                  href="/login"
                  className="text-sm font-medium text-red-600 hover:text-red-500"
                >
                  Back to login
                </Link>
              </FadeDiv>
            </form>
          )}
        </div>
      </FadeContainer>
    </section>
  )
}

export default ForgetPasswordSection
