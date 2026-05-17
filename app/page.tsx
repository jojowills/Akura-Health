import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1e3a2f] text-white font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <Image
          src="/akura-logo.png"
          alt="Akura Health"
          width={80}
          height={80}
          className="rounded-full"
        />
        <a
          href="#waitlist"
          className="text-sm font-medium border border-[#c4613a] text-[#c4613a] px-5 py-2 rounded-full hover:bg-[#c4613a] hover:text-white transition-colors"
        >
          Join the Waitlist
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-32 max-w-4xl mx-auto">
        <span className="text-[#c4613a] text-sm font-medium tracking-widest uppercase mb-6">
          Coming Soon
        </span>
        <h1 className="mb-6">
          Wellness, made simple.<br />
          <span>Delivered to your door.</span>
        </h1>
        <p className="text-lg text-white/70 max-w-xl mb-12 leading-relaxed">
          Akura Health curates premium wellness boxes built around what your body actually needs — whether that's better sleep, sharper focus, or metabolic balance. Pharmacist-founded. Evidence-informed.
        </p>

        {/* Waitlist Form */}
        <d<div id="waitlist" className="w-full max-w-md">
  <form action="https://formspree.io/f/mykvyzvw" method="POST" className="flex flex-col gap-3">
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        required
        className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c4613a] transition-colors"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        required
        className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c4613a] transition-colors"
      />
    </div>
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      required
      className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c4613a] transition-colors"
    />
    <select
      name="interestedBox"
      className="w-full px-5 py-3 rounded-full bg-[#1e3a2f] border border-white/20 text-white/70 focus:outline-none focus:border-[#c4613a] transition-colors"
    >
      <option value="">Which box interests you most?</option>
      <option value="weight">Weight & Metabolic Health</option>
      <option value="stress">Stress & Sleep Support</option>
      <option value="focus">Focus & Concentration</option>
      <option value="unsure">Not sure yet</option>
    </select>
    <button
      type="submit"
      className="w-full px-7 py-3 bg-[#c4613a] text-white font-medium rounded-full hover:bg-[#b0552f] transition-colors"
    >
      Join Waitlist
    </button>
  </form>
  <p className="text-white/40 text-xs mt-4 text-center leading-relaxed">
    By joining the waitlist you consent to Akura Health contacting you with updates about our launch and products. We will never share your data with third parties or send you spam. You can unsubscribe at any time.
  </p>
</div> 
      </section>

      {/* Box Themes */}
      <section className="bg-[#faf7f2] text-[#1e3a2f] px-6 py-24">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="mb-4">Three boxes. One goal.</h2>
          <p className="text-[#1e3a2f]/60 max-w-lg mx-auto">
            Each Akura Health box is thoughtfully curated by pharmacists around a specific wellness theme.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Weight & Metabolic Health",
              description: "Support your metabolism with evidence-based supplements and lifestyle tools.",
              icon: "⚖️",
            },
            {
              title: "Stress & Sleep Support",
              description: "Wind down, recover, and wake up feeling restored.",
              icon: "🌙",
            },
            {
              title: "Focus & Concentration",
              description: "Sharpen your mind with nootropics and cognitive wellness essentials.",
              icon: "🧠",
            },
          ].map((box) => (
            <div
              key={box.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#1e3a2f]/5 text-left"
            >
              <span className="text-3xl mb-4 block">{box.icon}</span>
              <h3 className="mb-2">{box.title}</h3>
              <p className="text-[#1e3a2f]/60 text-sm leading-relaxed">{box.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a2f] text-white/40 text-sm text-center py-8">
        © {new Date().getFullYear()} Akura Health. Making it easy to live well.
      </footer>

    </main>
  );
}
