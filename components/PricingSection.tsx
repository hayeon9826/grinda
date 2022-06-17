import React from "react";
import FadeInSection from "./FadeInContainer";

const PricingSection = () => {
  return (
    <FadeInSection>
      <section className="relative mb-32">
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div
          className="absolute inset-0 bg-gray-100 pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="text-4xl font-bold mb-4">Pricings</h1>
              <p className="text-xl text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                cupidatat.
              </p>
            </div>
            <div>
              <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
                  <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white shadow rounded-lg lg:mx-4 hover:shadow-2xl">
                    <div className="flex-shrink-0">
                      <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary-400 uppercase rounded-lg bg-gray-5">
                        Casual
                      </h2>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="pt-2 text-4xl font-bold text-gray-800 uppercase">
                        Free
                      </span>
                    </div>
                    <ul className="flex-1 space-y-4">
                      <li className="text-gray-500">Up to 5 projects</li>
                      <li className="text-gray-500">Up to 10 collaborators</li>
                      <li className="text-gray-500">2Gb of storage</li>
                    </ul>

                    <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-primary-500 rounded-lg hover:bg-primary-700 focus:outline-none">
                      Start free
                    </button>
                  </div>

                  <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white shadow rounded-lg lg:mx-4  hover:shadow-2xl">
                    <div className="flex-shrink-0">
                      <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary-400 uppercase rounded-lg bg-gray-5">
                        Profesional
                      </h2>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="pt-2 text-4xl font-bold text-gray-800 uppercase">
                        $24.90
                      </span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <ul className="flex-1 space-y-4">
                      <li className="text-gray-500">Up to 10 projects</li>
                      <li className="text-gray-500">Up to 20 collaborators</li>
                      <li className="text-gray-500">10Gb of storage</li>
                      <li className="text-gray-500">
                        Real-time collaborations
                      </li>
                    </ul>

                    <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-primary-500 rounded-lg hover:bg-primary-700 focus:outline-none">
                      Start free trial
                    </button>
                  </div>

                  <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white shadow rounded-lg lg:mx-4  hover:shadow-2xl">
                    <div className="flex-shrink-0">
                      <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary-400 uppercase rounded-lg bg-gray-5">
                        Expert
                      </h2>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="pt-2 text-4xl font-bold text-gray-800 uppercase">
                        $49.90
                      </span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <ul className="flex-1 space-y-4">
                      <li className="text-gray-500">Unlimited projects</li>
                      <li className="text-gray-500">Unlimited collaborators</li>
                      <li className="text-gray-500">Unlimited storage</li>
                      <li className="text-gray-500">
                        Real-time collaborations
                      </li>
                      <li className="text-gray-500">24x7 Support</li>
                    </ul>

                    <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-primary-500 rounded-lg hover:bg-primary-700 focus:outline-none">
                      Start free trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default PricingSection;
