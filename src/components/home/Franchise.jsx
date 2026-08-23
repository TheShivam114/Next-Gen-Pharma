import franchiseImage from "../../assets/image/hero1.jpg";
import {
  FaCheckCircle,
  FaCapsules,
  FaHandshake,
} from "react-icons/fa";

function Franchise() {
  return (
    <section className="overflow-hidden bg-[#0B1F3A] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* ================= LEFT CONTENT ================= */}
        <div>

          {/* Badge */}
          <span
            className="
              inline-block rounded-full bg-teal-500/20
              px-4 py-2 text-sm font-semibold uppercase
              tracking-widest text-teal-300

              opacity-0
              animate-[fadeDown_0.8s_ease-out_forwards]
            "
          >
            PCD Franchise
          </span>

          {/* Heading */}
          <h2
            className="
              mt-6 text-4xl font-bold text-white md:text-5xl

              opacity-0
              animate-[fadeLeft_1s_ease-out_0.2s_forwards]
            "
          >
            Start Your Pharmaceutical Business
            <br />
            with Next Gen Pharma
          </h2>

          {/* Paragraph */}
          <p
            className="
              mt-6 leading-8 text-gray-300

              opacity-0
              animate-[fadeLeft_1s_ease-out_0.4s_forwards]
            "
          >
            Join our rapidly growing pharmaceutical network and build
            a successful business with high-quality medicines,
            monopoly rights, and complete marketing support.
          </p>

          {/* ================= BENEFITS ================= */}
          <div className="mt-10 space-y-6">

            {/* Benefit 1 */}
            <div
              className="
                flex items-center gap-4
                opacity-0
                animate-[fadeLeft_0.8s_ease-out_0.6s_forwards]
                transition-transform duration-300
                hover:translate-x-2
              "
            >
              <FaCheckCircle className="text-2xl text-green-400" />

              <span className="text-white">
                Monopoly Rights
              </span>
            </div>

            {/* Benefit 2 */}
            <div
              className="
                flex items-center gap-4
                opacity-0
                animate-[fadeLeft_0.8s_ease-out_0.8s_forwards]
                transition-transform duration-300
                hover:translate-x-2
              "
            >
              <FaCapsules className="text-2xl text-green-400" />

              <span className="text-white">
                WHO-GMP Certified Products
              </span>
            </div>

            {/* Benefit 3 */}
            <div
              className="
                flex items-center gap-4
                opacity-0
                animate-[fadeLeft_0.8s_ease-out_1s_forwards]
                transition-transform duration-300
                hover:translate-x-2
              "
            >
              <FaHandshake className="text-2xl text-green-400" />

              <span className="text-white">
                Complete Marketing Support
              </span>
            </div>

          </div>

          {/* ================= BUTTON ================= */}
          <button
            className="
              mt-10 rounded-lg bg-teal-500
              px-8 py-4 font-semibold text-white

              opacity-0
              animate-[fadeUp_0.8s_ease-out_1.2s_forwards]

              transition-all duration-300
              hover:scale-105
              hover:bg-teal-600
              hover:shadow-lg
              hover:shadow-teal-500/30
            "
          >
            Apply for PCD Franchise
          </button>

        </div>


        {/* ================= RIGHT IMAGE ================= */}

        <div
          className="
            flex justify-center

            opacity-0
            animate-[fadeRight_1s_ease-out_0.5s_forwards]
          "
        >

          <div
            className="
              overflow-hidden rounded-2xl
              shadow-2xl shadow-black/40
              transition-all duration-500
              hover:scale-105
            "
          >

            <img
              src={franchiseImage}
              alt="Franchise"
              className="
                w-full max-w-md
                transition-transform duration-700
                hover:scale-110
              "
            />

          </div>

        </div>

      </div>


      {/* ================= CUSTOM ANIMATIONS ================= */}

      <style>
        {`
          /* Slide from left */
          @keyframes fadeLeft {
            0% {
              opacity: 0;
              transform: translateX(-70px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }


          /* Slide from right */
          @keyframes fadeRight {
            0% {
              opacity: 0;
              transform: translateX(70px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }


          /* Slide from top */
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


          /* Slide from bottom */
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
        `}
      </style>

    </section>
  );
}

export default Franchise;