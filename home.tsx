export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="rounded-full border border-purple-500 px-4 py-2 text-sm text-purple-300">
          ✨ Welcome to Nexora AI
        </div>

        <h1 className="mt-8 text-5xl font-extrabold md:text-7xl">
          The Future of AI
          <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Starts Here
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Chat, create images, write content, generate code and boost your
          productivity with one powerful AI platform.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700">
            Get Started
          </button>

          <button className="rounded-xl border border-gray-600 px-6 py-3 hover:bg-gray-900">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {[
          "🤖 AI Chat",
          "🎨 AI Image",
          "✍️ AI Writer",
          "💻 AI Code",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-gray-800 bg-zinc-900 p-6 transition hover:border-purple-500"
          >
            <h2 className="text-xl font-bold">{item}</h2>
            <p className="mt-3 text-gray-400">
              Fast, powerful and easy to use.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
