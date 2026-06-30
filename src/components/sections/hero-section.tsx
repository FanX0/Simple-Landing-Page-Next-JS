export function HeroSection() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <p className="mb-4 inline-flex rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600">
          Simple Next.js practice project
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-gray-950 md:text-6xl">
          Organize your learning notes faster.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Mindory helps you save categories, notes, and learning progress in one clean dashboard.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#start"
            className="rounded-full bg-gray-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Start Learning
          </a>

          <a
            href="#features"
            className="rounded-full border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-950 transition hover:bg-gray-55"
          >
            View Features
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Dashboard
              </p>
              <h2 className="text-2xl font-bold">
                Learning Progress
              </h2>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Active
            </span>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-sm font-medium text-gray-500">
                Next.js
              </p>
              <div className="mt-3 h-2 rounded-full bg-gray-100">
                <div className="h-2 w-3/4 rounded-full bg-gray-950" />
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-sm font-medium text-gray-500">
                Supabase
              </p>
              <div className="mt-3 h-2 rounded-full bg-gray-100">
                <div className="h-2 w-1/2 rounded-full bg-gray-950" />
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-sm font-medium text-gray-500">
                Tailwind CSS
              </p>
              <div className="mt-3 h-2 rounded-full bg-gray-100">
                <div className="h-2 w-5/6 rounded-full bg-gray-950" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
