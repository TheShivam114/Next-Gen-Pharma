import {
  FaBoxes,
  FaCertificate,
  FaHandshake,
  FaRobot,
  FaTags,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: FaBoxes,
    title: "500+ SKUs",
    description:
      "Extensive portfolio covering multiple therapeutic segments.",
  },
  {
    icon: FaCertificate,
    title: "WHO-GMP Certified",
    description:
      "Manufactured under internationally recognized quality standards.",
  },
  {
    icon: FaHandshake,
    title: "Monopoly Rights",
    description:
      "Exclusive distribution opportunities for franchise partners.",
  },
  {
    icon: FaRobot,
    title: "AI-Driven Systems",
    description:
      "Modern technology to improve operations and customer service.",
  },
  {
    icon: FaTags,
    title: "Competitive Pricing",
    description:
      "Affordable pricing without compromising product quality.",
  },
  {
    icon: FaHeadset,
    title: "Dedicated Support",
    description:
      "Experienced team providing continuous business assistance.",
  },
];

function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}
        <div className="mb-14 text-center">

          {/* Small Heading */}
          <span
            className="
              inline-block
              font-semibold uppercase tracking-widest
              text-teal-600

              opacity-0
              animate-[fadeDown_0.8s_ease-out_forwards]
            "
          >
            Why Choose Us
          </span>

          {/* Main Heading */}
          <h2
            className="
              mt-4 text-4xl font-bold text-slate-800
              md:text-5xl

              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.2s_forwards]
            "
          >
            Why Choose Next Gen Pharma
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-4 max-w-3xl text-slate-600

              opacity-0
              animate-[fadeUp_0.8s_ease-out_0.4s_forwards]
            "
          >
            We combine innovation, quality, and customer-focused service to
            deliver trusted pharmaceutical solutions across India.
          </p>

        </div>

        {/* ================= FEATURES ================= */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group rounded-2xl bg-white p-8 shadow-md

                  opacity-0

                  transition-all duration-500
                  hover:-translate-y-3
                  hover:shadow-xl
                "
                style={{
                  animation: `fadeUp 0.8s ease-out ${
                    0.6 + index * 0.15
                  }s forwards`,
                }}
              >

                {/* Icon */}
                <div
                  className="
                    mb-6 flex h-16 w-16 items-center
                    justify-center rounded-full
                    bg-teal-100

                    transition-all duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                    group-hover:bg-teal-500
                  "
                >
                  <Icon
                    className="
                      text-3xl text-teal-600
                      transition-colors duration-300
                      group-hover:text-white
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-2xl font-bold text-slate-800
                    transition-colors duration-300
                    group-hover:text-teal-600
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

              </div>
            );
          })}

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

export default WhyChooseUs;