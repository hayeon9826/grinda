import React from "react";
import BackgroundIllustrationDark from "./BackgroundIllustrationDark";
import FadeInSection from "./FadeInContainer";

function Newsletter() {
  return (
    <FadeInSection>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            {/* CTA box */}
            <div
              className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
              data-aos="zoom-y-out"
            >
              {/* Background illustration */}
              <BackgroundIllustrationDark />

              <div className="relative flex flex-col lg:flex-row justify-between items-center">
                {/* CTA content */}
                <div className="text-center lg:text-left lg:max-w-xl">
                  <h3 className="text-3xl font-semibold text-white mb-2">
                    Powering your business
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit nemo
                    expedita voluptas culpa sapiente.
                  </p>

                  {/* CTA form */}
                  <form className="w-full lg:w-auto">
                    <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                      <input
                        type="email"
                        className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                        placeholder="Your email…"
                        aria-label="Your email…"
                      />
                      <a
                        className="leading-[28px] text-white bg-gradient-to-br bg-primary-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                        href="#0"
                      >
                        Subscribe
                      </a>
                    </div>
                    {/* Success message */}
                    {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                    <p className="text-sm text-gray-400 mt-3">
                      7 days free trial. No credit card required.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

export default Newsletter;
