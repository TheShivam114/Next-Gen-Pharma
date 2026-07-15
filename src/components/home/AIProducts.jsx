import { FaRobot, FaArrowRight } from "react-icons/fa";
import aiProducts from "../../data/aiProducts";

function AIProducts() {
  return (
    <section className="bg-sky-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-widest text-teal-600">
            AI Solutions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-800">
            AI-Powered Healthcare Solutions
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Leveraging artificial intelligence to improve pharmaceutical
            operations, patient care, and supply chain efficiency.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {aiProducts.map((product) => (
            <div
              key={product.title}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <FaRobot className="text-3xl text-teal-600" />
              </div>

              <h3 className="text-2xl font-bold text-slate-800">
                {product.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {product.description}
              </p>

              <a
                href={product.link}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-600 hover:text-teal-700"
              >
                Learn More
                <FaArrowRight />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AIProducts;