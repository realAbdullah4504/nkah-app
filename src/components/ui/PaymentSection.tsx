"use client"
import { CardElement, Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useState } from "react"
import { FadeContainer } from "../Fade"

const stripePromise = loadStripe("pk_test_YOUR_PUBLISHABLE_KEY")

const PaymentForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted")
  }
  const [amount, setAmount] = useState(100)

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Donation Amount
        </label>
        <select
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
        >
          <option value={100}>$100</option>
          <option value={250}>$250</option>
          <option value={500}>$500</option>
          <option value={1000}>$1,000</option>
          <option value={5000}>$5,000</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Card Details
        </label>
        <div className="mt-1 rounded-md border border-gray-300 p-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#32325d",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-red-600 px-4 py-3 text-white hover:bg-red-700"
      >
        Submit Payment
      </button>
    </form>
  )
}

const PaymentSection = () => {
  return (
    <section className="bg-white py-24">
      <FadeContainer className="container mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Make a Donation</h2>
          <p className="mt-4 text-gray-600">
            Your contribution helps us empower women and children
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
      </FadeContainer>
    </section>
  )
}

export default PaymentSection
