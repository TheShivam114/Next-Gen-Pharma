import ProductCard from "./ProductCard";
import categories from "../../data/categories";

function ProductCategories() {
  return (
    <section className="overflow-hidden bg-sky-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-14 text-center">

          {/* Label */}
          <span
            className="
              inline-block font-semibold uppercase
              tracking-widest text-teal-600

              opacity-0
              animate-[fadeDown_0.8s_ease-out_forwards]
            "
          >
            Our Products
          </span>

          {/* Heading */}
          <h2
            className="
              mt-3 text-4xl font-bold text-slate-800
              md:text-5xl

              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.2s_forwards]
            "
          >
            Product Categories
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-5 max-w-3xl text-slate-600

              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.4s_forwards]
            "
          >
            Explore our comprehensive portfolio of pharmaceutical
            products designed to meet diverse healthcare needs.
          </p>

        </div>


        {/* ================= PRODUCT CARDS ================= */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category, index) => (
            <div
              key={category.name}
              className="
                opacity-0

                transition-all duration-500
                hover:-translate-y-3
              "
              style={{
                animation: `fadeUp 0.8s ease-out ${
                  0.6 + index * 0.2
                }s forwards`,
              }}
            >
              <ProductCard
                icon={category.icon}
                name={category.name}
                products={category.products}
              />
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
              transform: translateY(50px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
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
        `}
      </style>

    </section>
  );
}

export default ProductCategories;