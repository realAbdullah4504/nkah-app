"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FadeContainer, FadeDiv } from "../Fade"

const LoginSection = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    // Add your login logic here
    setTimeout(() => setIsLoading(false), 1500)
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
                className=""
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-sm text-gray-600">
              Please sign in to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <FadeDiv>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
              />
            </FadeDiv>

            <FadeDiv>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
              />
            </FadeDiv>

            {error && (
              <FadeDiv className="rounded-md bg-red-50 p-4 text-sm text-red-600">
                {error}
              </FadeDiv>
            )}

            <div className="flex items-center justify-between">
              <FadeDiv className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </FadeDiv>

              <FadeDiv>
                <Link
                  href="/forget-password"
                  className="text-sm font-medium text-red-600 hover:text-red-500"
                >
                  Forgot password?
                </Link>
              </FadeDiv>
            </div>

            <FadeDiv>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-md bg-red-600 px-4 py-2 text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </FadeDiv>
          </form>

          <FadeDiv className="mt-6 text-center text-sm">
            <span className="text-gray-600">Don&apos;t have an account?</span>{" "}
            <Link
              href="/signup"
              className="font-medium text-red-600 hover:text-red-500"
            >
              Sign up
            </Link>
          </FadeDiv>
        </div>
      </FadeContainer>
    </section>
  )
}

export default LoginSection
