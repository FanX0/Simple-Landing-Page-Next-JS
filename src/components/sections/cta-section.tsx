export function CtaSection() {
  return (
    <section id="start" className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gray-950 px-6 py-16 text-center text-white md:px-12">
        <h2 className="text-4xl font-bold tracking-tight">
          Ready to organize your learning?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
          Build this project to practice clean Next.js architecture, reusable components, and responsive UI.
        </p>

        <div className="mt-8">
          <a
            href="#"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-100"
          >
            Build This Project
          </a>
        </div>
      </div>
    </section>
  )
}
