const steps = [
  {
    number: "01",
    title: "Create your category",
    description: "Group your learning notes by topic, framework, or skill.",
  },
  {
    number: "02",
    title: "Save your notes",
    description: "Write what you learn and keep important resources in one place.",
  },
  {
    number: "03",
    title: "Track your progress",
    description: "Review your learning progress and continue from where you stopped.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            How It Works
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Start simple, stay consistent.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <span className="text-sm font-bold text-gray-400">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
