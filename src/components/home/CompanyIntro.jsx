import founder from "../../assets/image/hero.jpg";
import {
  FaAward,
  FaCapsules,
  FaHandshake,
  FaMicroscope,
  FaGlobeAsia,
} from "react-icons/fa";

function CompanyIntro() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-20 text-center">

          <span className="inline-block rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-teal-700">
            About Next Gen Pharma
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Delivering Quality Healthcare
            <span className="text-teal-600"> With Trust</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Next Gen Pharma is a research-driven pharmaceutical company
            committed to developing safe, affordable, and innovative
            healthcare solutions for millions of people worldwide.
          </p>

        </div>


        {/* Main Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">


          {/* Left Content */}

          <div>

            <h3 className="text-3xl font-bold text-slate-900">
              Our Journey & Commitment
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              Founded with a vision to transform healthcare accessibility,
              Next Gen Pharma focuses on manufacturing high-quality medicines
              while maintaining global safety and quality standards.
            </p>


            <p className="mt-5 leading-8 text-slate-600">
              Our advanced manufacturing facilities, experienced research
              team, and strong distribution network enable us to provide
              trusted pharmaceutical solutions across multiple therapeutic
              segments.
            </p>


            {/* Company Highlights */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">


              <div className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">

                <FaAward className="mt-1 text-3xl text-teal-600"/>

                <div>
                  <h4 className="font-bold text-slate-800">
                    Quality Certified
                  </h4>
                  <p className="text-sm text-slate-600">
                    WHO-GMP Standard Manufacturing
                  </p>
                </div>

              </div>



              <div className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">

                <FaMicroscope className="mt-1 text-3xl text-teal-600"/>

                <div>
                  <h4 className="font-bold text-slate-800">
                    Research Driven
                  </h4>

                  <p className="text-sm text-slate-600">
                    Innovation in Healthcare Solutions
                  </p>
                </div>

              </div>



              <div className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">

                <FaCapsules className="mt-1 text-3xl text-teal-600"/>

                <div>
                  <h4 className="font-bold text-slate-800">
                    500+ Products
                  </h4>

                  <p className="text-sm text-slate-600">
                    Multiple Therapeutic Categories
                  </p>

                </div>

              </div>



              <div className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">

                <FaGlobeAsia className="mt-1 text-3xl text-teal-600"/>

                <div>

                  <h4 className="font-bold text-slate-800">
                    Nationwide Reach
                  </h4>

                  <p className="text-sm text-slate-600">
                    Serving Healthcare Partners
                  </p>

                </div>

              </div>


            </div>



            <button className="mt-10 rounded-lg bg-teal-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-700">

              Discover Our Company

            </button>


          </div>



          {/* Right Image */}

          <div className="relative">


            {/* Background Decoration */}

            <div className="absolute -right-5 -top-5 h-full w-full rounded-3xl bg-teal-100"></div>


            <div className="relative overflow-hidden rounded-3xl shadow-2xl">


              <img
                src={founder}
                alt="Next Gen Pharma Founder"
                className="h-[600px] w-full object-cover"
              />


              {/* Overlay Card */}

              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 p-5 backdrop-blur">

                <h4 className="text-xl font-bold text-slate-900">
                  Leadership Excellence
                </h4>

                <p className="mt-2 text-sm text-slate-600">
                  Building a healthier future through innovation,
                  responsibility, and commitment.
                </p>

              </div>


            </div>


          </div>


        </div>


        {/* Bottom Stats */}

        <div className="mt-20 grid gap-6 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-4">


          <div className="text-center">
            <h3 className="text-4xl font-bold text-teal-600">
              15+
            </h3>
            <p className="mt-2 text-slate-600">
              Years Experience
            </p>
          </div>


          <div className="text-center">
            <h3 className="text-4xl font-bold text-teal-600">
              500+
            </h3>
            <p className="mt-2 text-slate-600">
              Products
            </p>
          </div>


          <div className="text-center">
            <h3 className="text-4xl font-bold text-teal-600">
              20+
            </h3>
            <p className="mt-2 text-slate-600">
              States Covered
            </p>
          </div>


          <div className="text-center">
            <h3 className="text-4xl font-bold text-teal-600">
              100+
            </h3>
            <p className="mt-2 text-slate-600">
              Franchise Partners
            </p>
          </div>


        </div>


      </div>
    </section>
  );
}

export default CompanyIntro;