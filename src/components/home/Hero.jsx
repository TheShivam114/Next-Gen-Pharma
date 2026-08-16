import heroImage from "../../assets/image/hero2.jpg";

function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center animate-[zoom_12s_ease-in-out_infinite_alternate]"
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
          <span
            className="
              inline-block rounded-full bg-white/80 px-6 py-2
              text-sm font-semibold text-red-700 shadow
              opacity-0
              animate-[fadeDown_0.8s_ease-out_0.2s_forwards]
            "
          >
            Trusted Healthcare Partner
          </span>

          {/* Heading */}
          <h1
            className="
              mt-8 text-5xl font-extrabold leading-none
              tracking-tight text-red-900 drop-shadow-lg
              md:text-7xl
              opacity-0
              animate-[fadeRight_1s_ease-out_0.4s_forwards]
            "
          >
            Next Gen
            <br />
            Pharma
          </h1>

          {/* Subtitle */}
          <h2
            className="
              mt-8 text-2xl font-bold leading-snug
              text-amber-600 md:text-4xl
              opacity-0
              animate-[fadeRight_1s_ease-out_0.7s_forwards]
            "
          >
            Quality Pharmaceuticals.
            <br />
            Intelligent Distribution.
          </h2>

          {/* Paragraph */}
          <p
            className="
              mt-8 max-w-xl text-lg leading-9 text-slate-700
              opacity-0
              animate-[fadeRight_1s_ease-out_1s_forwards]
            "
          >
            Delivering innovative pharmaceutical products with
            uncompromising quality, nationwide distribution, and a
            commitment to improving healthcare through science and trust.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-10 flex flex-col gap-5 sm:flex-row
              opacity-0
              animate-[fadeUp_1s_ease-out_1.3s_forwards]
            "
          >
            <button
              className="
                rounded-xl bg-gradient-to-r from-red-900 to-red-700
                px-10 py-4 text-lg font-semibold text-white shadow-xl
                transition-all duration-300
                hover:scale-105 hover:shadow-2xl
                hover:from-red-800 hover:to-red-600
              "
            >
              Explore Our Products
            </button>

            <button
              className="
                rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500
                px-10 py-4 text-lg font-semibold text-white shadow-xl
                transition-all duration-300
                hover:scale-105 hover:shadow-2xl
                hover:from-yellow-600 hover:to-amber-600
              "
            >
              Apply for Franchise
            </button>
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeRight {
            0% {
              opacity: 0;
              transform: translateX(80px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeDown {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes zoom {
            0% {
              background-size: 100%;
            }
            100% {
              background-size: 110%;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;