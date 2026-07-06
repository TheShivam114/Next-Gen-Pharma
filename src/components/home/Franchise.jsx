import franchiseImage from "../../assets/image/hero1.jpg";
import {
  FaCheckCircle,
  FaCapsules,
  FaHandshake,
} from "react-icons/fa";

function Franchise() {
  return (
    <section className="bg-[#0B1F3A] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* Left Content */}
        <div>

          <span className="rounded-full bg-teal-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-teal-300">
            PCD Franchise
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Start Your Pharmaceutical Business
            <br />
            with Next Gen Pharma
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Join our rapidly growing pharmaceutical network and build
            a successful business with high-quality medicines,
            monopoly rights, and complete marketing support.
          </p>

          {/* Benefits */}

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-2xl text-green-400" />
              <span className="text-white">
                Monopoly Rights
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaCapsules className="text-2xl text-green-400" />
              <span className="text-white">
                WHO-GMP Certified Products
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaHandshake className="text-2xl text-green-400" />
              <span className="text-white">
                Complete Marketing Support
              </span>
            </div>

          </div>

          <button className="mt-10 rounded-lg bg-teal-500 px-8 py-4 font-semibold text-white transition hover:bg-teal-600">
            Apply for PCD Franchise
          </button>

        </div>

        {/* Right Image */}

        <div className="flex justify-center">

          <img
            src={franchiseImage}
            alt="Franchise"
            className="w-full max-w-md"
          />

        </div>

      </div>
    </section>
  );
}

export default Franchise;