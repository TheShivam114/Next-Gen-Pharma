import { FaRobot, FaArrowRight } from "react-icons/fa";
import aiProducts from "../../data/aiProducts";

function AIProducts() {
  return (
    <section className="overflow-hidden bg-sky-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADING ================= */}
        <div className="mb-14 text-center">

          {/* Label */}
          <span
            className="
              inline-block
              font-semibold uppercase tracking-widest
              text-teal-600

              opacity-0
              animate-[fadeDown_0.8s_ease-out_forwards]
            "
          >
            AI Solutions
          </span>

          {/* Heading */}
          <h2
            className="
              mt-4 text-4xl font-bold text-slate-800
              md:text-5xl

              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.2s_forwards]
            "
          >
            AI-Powered Healthcare Solutions
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-4 max-w-3xl text-slate-600

              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.4s_forwards]
            "
          >
            Leveraging artificial intelligence to improve pharmaceutical
            operations, patient care, and supply chain efficiency.
          </p>

        </div>


        {/* ================= AI CARDS ================= */}
        <div className="grid gap-8 md:grid-cols-3">

          {aiProducts.map((product, index) => (
            <div
              key={product.title}
              className="
                group rounded-2xl bg-white p-8
                shadow-md

                opacity-0

                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
              style={{
                animation: `fadeUp 0.8s ease-out ${
                  0.6 + index * 0.2
                }s forwards`,
              }}
            >

              {/* ================= ICON ================= */}
              <div
                className="
                  mb-6 flex h-16 w-16
                  items-center justify-center
                  rounded-full bg-teal-100

                  transition-all duration-500

                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:bg-teal-500
                "
              >
                <FaRobot
                  className="
                    text-3xl text-teal-600
                    transition-all duration-500

                    group-hover:scale-110
                    group-hover:text-white
                  "
                />
              </div>


              {/* ================= TITLE ================= */}
              <h3
                className="
                  text-2xl font-bold text-slate-800
                  transition-colors duration-300

                  group-hover:text-teal-600
                "
              >
                {product.title}
              </h3>


              {/* ================= DESCRIPTION ================= */}
              <p className="mt-4 leading-7 text-slate-600">
                {product.description}
              </p>


              {/* ================= LEARN MORE ================= */}
              <a
                href={product.link}
                className="
                  mt-6 inline-flex items-center gap-2
                  font-semibold text-teal-600

                  transition-all duration-300
                  hover:text-teal-700
                "
              >
                Learn More

                <FaArrowRight
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-2
                  "
                />
              </a>

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

export default AIProducts;