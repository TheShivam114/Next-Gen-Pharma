import heroImage from "../../assets/image/hero1.jpg";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">

          {/* Small Badge */}
          <span className="inline-block rounded-full border border-teal-400 bg-teal-500/10 px-5 py-2 text-sm font-medium uppercase tracking-widest text-teal-300">
            Trusted Pharmaceutical Company
          </span>

          {/* Company Name */}
          <h1 className="mt-8 text-5xl font-extrabold md:text-7xl">
            Next Gen Pharma
          </h1>

          {/* Tagline */}
          <h2 className="mt-6 text-2xl font-semibold text-teal-300 md:text-3xl">
            Quality Pharmaceuticals. Intelligent Distribution.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200">
            Next Gen Pharma is committed to delivering high-quality,
            affordable pharmaceutical products with innovation,
            reliability, and excellence in healthcare.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

            <button className="rounded-lg bg-teal-600 px-8 py-4 text-lg font-semibold transition duration-300 hover:bg-teal-700">
              Explore Our Products
            </button>

            <button className="rounded-lg bg-yellow-500 px-8 py-4 text-lg font-semibold text-black transition duration-300 hover:bg-yellow-600">
              Apply for Franchise
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;