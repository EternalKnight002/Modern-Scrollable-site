import EarbudScroll from "@/components/EarbudScroll";
import Footer from "@/components/Footer";
import HeroOverlay from "@/components/HeroOverlay";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero / Scrollytelling Section */}
      <section className="relative">
        <HeroOverlay />
        <EarbudScroll />
      </section>

      {/* Content Sections */}
      <section id="overview" className="relative z-10 flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 py-24 text-center">
        <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-6xl">Precision Engineering.</h2>
        <p className="max-w-2xl text-lg text-white/60 md:text-xl">
          Designed for the audiophile in you. Every curve, every component is crafted for perfection.
        </p>
      </section>

      <section id="specs" className="relative z-10 flex min-h-screen flex-col items-center justify-center bg-black px-6 py-24">
        <h2 className="mb-12 text-4xl font-bold tracking-tight md:text-6xl">Specifications</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          <div className="space-y-2 border-l border-white/20 pl-6">
            <h3 className="text-xl font-semibold text-white">Driver</h3>
            <p className="text-white/60">11mm Dynamic Driver with Titanium Composite Diaphragm</p>
          </div>
          <div className="space-y-2 border-l border-white/20 pl-6">
            <h3 className="text-xl font-semibold text-white">Battery</h3>
            <p className="text-white/60">Up to 36 hours with charging case</p>
          </div>
          <div className="space-y-2 border-l border-white/20 pl-6">
            <h3 className="text-xl font-semibold text-white">Connectivity</h3>
            <p className="text-white/60">Bluetooth 5.4, Multipoint Connection</p>
          </div>
          <div className="space-y-2 border-l border-white/20 pl-6">
            <h3 className="text-xl font-semibold text-white">ANC</h3>
            <p className="text-white/60">Adaptive Active Noise Cancellation up to 48dB</p>
          </div>
        </div>
      </section>

      <section id="review" className="relative z-10 flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 py-24 text-center">
        <h2 className="mb-12 text-4xl font-bold tracking-tight md:text-6xl">What People Say</h2>
        <blockquote className="max-w-4xl border-l-4 border-white pl-6 text-left">
          <p className="mb-4 text-2xl font-light italic md:text-4xl">
            &quot;The PulseAIR Buds are simply the best wireless earbuds I&apos;ve ever used. The soundstage is incredible.&quot;
          </p>
          <cite className="block text-lg font-semibold not-italic text-white/80">- Audio Weekly</cite>
        </blockquote>
      </section>

      <section id="preorder" className="relative z-10 flex min-h-[50vh] flex-col items-center justify-center bg-white text-black px-6 py-24 text-center">
        <h2 className="mb-6 text-5xl font-black tracking-tighter md:text-7xl">READY?</h2>
        <button className="rounded-full bg-black px-12 py-4 text-xl font-bold text-white transition-transform hover:scale-105 hover:bg-zinc-800">
          PRE-ORDER NOW
        </button>
      </section>

      <Footer />
    </main>
  );
}
