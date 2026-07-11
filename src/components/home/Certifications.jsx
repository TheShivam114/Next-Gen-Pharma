import {
  FaAward,
  FaCertificate,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const certifications = [
  {
    icon: FaAward,
    title: "WHO-GMP",
    subtitle: "Certified Manufacturing",
  },
  {
    icon: FaCertificate,
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
  },
  {
    icon: FaShieldAlt,
    title: "CDSCO",
    subtitle: "Government Approved",
  },
  {
    icon: FaCheckCircle,
    title: "Drug Licence",
    subtitle: "Regulatory Compliance",
  },
];

function Certifications() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="font-semibold uppercase tracking-widest text-teal-600">
            Certifications
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-800">
            Certifications & Compliance
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-600 leading-8">
            Every product manufactured by Next Gen Pharma follows
            internationally recognized quality standards, ensuring
            safety, effectiveness, and regulatory compliance.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {certifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal-100">

                  <Icon className="text-4xl text-teal-600" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.subtitle}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom Box */}

        <div className="mt-20 rounded-2xl bg-teal-600 p-10 text-center text-white">

          <h3 className="text-3xl font-bold">
            Quality You Can Trust
          </h3>

          <p className="mx-auto mt-5 max-w-3xl leading-8">
            Our commitment to compliance, innovation, and patient safety
            ensures every medicine is manufactured according to strict
            pharmaceutical guidelines and global quality standards.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Certifications;