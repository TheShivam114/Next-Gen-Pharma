import ProductCard from "./ProductCard";
import categories from "../../data/categories";

function ProductCategories() {
  return (
    <section className="relative overflow-hidden bg-sky-50 py-20 md:py-24">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          {/* Label */}
          <div
            className="
              mb-4 inline-flex items-center gap-2
              rounded-full border border-teal-200
              bg-white/70 px-4 py-2
              text-sm font-semibold uppercase
              tracking-[0.2em] text-teal-600
              shadow-sm backdrop-blur-sm

              opacity-0
              animate-[fadeDown_0.8s_ease-out_forwards]
            "
          >
            <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />

            Our Products
          </div>

          {/* Heading */}
          <h2
            className="
              text-4xl font-bold leading-tight
              tracking-tight text-slate-800
              sm:text-5xl lg:text-6xl

              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.15s_forwards]
            "
          >
            Product{" "}
            <span className="text-teal-600">
              Categories
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-6 max-w-2xl
              text-base leading-7 text-slate-600
              sm:text-lg

              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.3s_forwards]
            "
          >
            Explore our comprehensive portfolio of pharmaceutical
            products designed to meet diverse healthcare needs with
            quality, reliability, and innovation.
          </p>

          {/* Small Divider */}
          <div
            className="
              mx-auto mt-7 h-1 w-20 rounded-full
              bg-teal-500

              opacity-0
              animate-[scaleIn_0.6s_ease-out_0.5s_forwards]
            "
          />
        </div>


        {/* ================= PRODUCT CARDS ================= */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category, index) => (
            <div
              key={category.name}
              className="
                group
                opacity-0
                will-change-transform

                transition-all
                duration-500
                ease-out

                hover:-translate-y-3
              "
              style={{
                animation: `
                  fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)
                  ${0.55 + index * 0.15}s
                  forwards
                `,
              }}
            >
              <div
                className="
                  h-full
                  rounded-2xl

                  transition-all duration-500 ease-out

                  group-hover:shadow-xl
                  group-hover:shadow-teal-900/10
                "
              >
                <ProductCard
                  icon={category.icon}
                  name={category.name}
                  products={category.products}
                />
              </div>
            </div>
          ))}

        </div>

      </div>


      {/* ================= CUSTOM ANIMATIONS ================= */}
      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(45px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeDown {
            0% {
              opacity: 0;
              transform: translateY(-25px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            0% {
              opacity: 0;
              transform: scaleX(0);
            }

            100% {
              opacity: 1;
              transform: scaleX(1);
            }
          }
        `}
      </style>

    </section>
  );
}

export default ProductCategories;