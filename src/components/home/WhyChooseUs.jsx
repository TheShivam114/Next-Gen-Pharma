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
    description: "Extensive portfolio covering multiple therapeutic segments.",
  },
  {
    icon: FaCertificate,
    title: "WHO-GMP Certified",
    description: "Manufactured under internationally recognized quality standards.",
  },
  {
    icon: FaHandshake,
    title: "Monopoly Rights",
    description: "Exclusive distribution opportunities for franchise partners.",
  },
  {
    icon: FaRobot,
    title: "AI-Driven Systems",
    description: "Modern technology to improve operations and customer service.",
  },
  {
    icon: FaTags,
    title: "Competitive Pricing",
    description: "Affordable pricing without compromising product quality.",
  },
  {
    icon: FaHeadset,
    title: "Dedicated Support",
    description: "Experienced team providing continuous business assistance.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-widest text-teal-600">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-800">
            Why Choose Next Gen Pharma
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            We combine innovation, quality, and customer-focused service to
            deliver trusted pharmaceutical solutions across India.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                  <Icon className="text-3xl text-teal-600" />
                </div>

                <h3 className="text-2xl font-bold text-slate-800">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;