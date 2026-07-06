import founder from "../../assets/image/hero.jpg";
import { FaAward, FaCapsules, FaHandshake } from "react-icons/fa";

function CompanyIntro() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="font-semibold uppercase tracking-widest text-teal-600">
            About Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-800">
            Welcome to Next Gen Pharma
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-600">
            We are committed to manufacturing and distributing
            high-quality pharmaceutical products that improve
            lives through innovation, quality, and trust.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <h3 className="mb-6 text-3xl font-bold text-slate-800">
              Our Story
            </h3>

            <p className="mb-5 leading-8 text-slate-600">
              Next Gen Pharma was established with the vision of
              providing affordable and reliable medicines while
              maintaining the highest quality standards.
            </p>

            <p className="mb-5 leading-8 text-slate-600">
              Our experienced professionals, modern manufacturing,
              and nationwide distribution network help us deliver
              healthcare solutions trusted by doctors, distributors,
              and healthcare institutions.
            </p>

            <p className="mb-8 leading-8 text-slate-600">
              We continue to expand our product portfolio while
              embracing innovation, technology, and ethical business
              practices.
            </p>

            {/* Features */}

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaAward className="text-2xl text-teal-600" />
                <span className="font-medium">
                  WHO-GMP Certified Manufacturing
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaCapsules className="text-2xl text-teal-600" />
                <span className="font-medium">
                  500+ Pharmaceutical Products
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaHandshake className="text-2xl text-teal-600" />
                <span className="font-medium">
                  Trusted Healthcare Partner
                </span>
              </div>

            </div>

            <button className="mt-10 rounded-lg bg-teal-600 px-8 py-4 font-semibold text-white transition hover:bg-teal-700">
              Learn More
            </button>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <img
                src={founder}
                alt="Founder"
                className="h-[520px] w-[420px] object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CompanyIntro;