const features = [
  {
    title: "Organized Notes",
    description: "Save your learning notes by topic, category, and progress.",
  },
  {
    title: "Clean Dashboard",
    description: "View your learning data in a simple and focused interface.",
  },
  {
    title: "Fast Search",
    description: "Find your saved learning material quickly whenever you need it.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-t border-gray-200 bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Features
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Everything you need to keep learning organized.
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            This practice project teaches how to build clean UI sections with reusable components.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-950 text-white">
                ✓
              </div>

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
