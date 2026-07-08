import heroImage from "../../assets/image/hero2.jpg";

function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/60 via-red-200/25 to-white/85"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12">

        {/* Empty Left Side */}
        <div className="hidden lg:block lg:w-1/2"></div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">

          {/* Badge */}
          <span className="inline-block rounded-full bg-white/80 px-6 py-2 text-sm font-semibold text-red-700 shadow">
            Trusted Healthcare Partner
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold leading-none tracking-tight text-red-900 drop-shadow-lg md:text-7xl">
            Next Gen
            <br />
            Pharma
          </h1>

          {/* Subtitle */}
          <h2 className="mt-8 text-2xl font-bold leading-snug text-amber-600 md:text-4xl">
            Quality Pharmaceuticals.
            <br />
            Intelligent Distribution.
          </h2>

          {/* Paragraph */}
          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-700">
            Delivering innovative pharmaceutical products with
            uncompromising quality, nationwide distribution, and a
            commitment to improving healthcare through science and trust.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-5 sm:flex-row">

            <button className="rounded-xl bg-gradient-to-r from-red-900 to-red-700 px-10 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:from-red-800 hover:to-red-600">
              Explore Our Products
            </button>

            <button className="rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 px-10 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:from-yellow-600 hover:to-amber-600">
              Apply for Franchise
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;