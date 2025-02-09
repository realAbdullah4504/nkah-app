const BranchesSection = () => {
  const branches = [
    "Mankon (Mother branch and headquarters)",
    "Yaounde",
    "Douala",
    "Buea",
    "Kumba",
    "Limbe",
    "DMV Maryland, USA",
    "Minnesota, USA",
    "DC Metro, USA",
  ]

  return (
    <section aria-label="branches" className="bg-white py-20" id="branches">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center text-4xl font-semibold text-gray-900 sm:text-5xl">
          Our Branches
        </h2>
        <p className="mb-12 text-center text-lg text-gray-700">
          NKAH NI NKWI NI MANKON has expanded its reach beyond its origins in
          Mankon, Cameroon, to multiple locations across the globe. Our branches
          serve as hubs for community engagement, empowerment programs, and
          support networks.
        </p>
        <ul className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2">
          {branches.map((branch, index) => (
            <li
              key={index}
              className="rounded-xl bg-gray-50 p-6 shadow-sm transition duration-200 hover:shadow-md"
            >
              <span className="block text-xl font-medium text-red-600">
                {branch}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-gray-700">
          Each branch operates with the shared goal of fostering solidarity and
          development among Mankon women and children.
        </p>
      </div>
    </section>
  )
}

export default BranchesSection
