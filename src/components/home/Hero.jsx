import heroImage from "../../assets/image/hero2.jpg";

function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-sky-100/60 to-white/90"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">

        {/* Left Space */}
        <div className="hidden lg:block lg:w-1/2"></div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">

          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-700">
            Trusted Healthcare Partner
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-red-800 md:text-7xl">
            Next Gen Pharma
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-teal-600 md:text-3xl">
            Quality Pharmaceuticals.
            <br />
            Intelligent Distribution.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Delivering innovative pharmaceutical products with
            uncompromising quality, nationwide distribution,
            and a commitment to improving healthcare through
            science and trust.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-lg bg-red-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-red-700">
              Explore Our Products
            </button>

            <button className="rounded-lg border-2 border-amber-500 bg-amber-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-amber-500">
              Apply for Franchise
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;