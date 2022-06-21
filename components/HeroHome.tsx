import React, { useState } from "react";
import Modal from "@utils/Modal";
import Image from "next/image";
import FadeInSection from "./FadeInContainer";
import BackgroundIllustration from "./BackgroundIllustration";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* <BackgroundIllustration /> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <FadeInSection>
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="lg:text-6xl text-5xl md:text-8xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-blue-300">
                  스타트업
                </span>
                을 위한 랜딩 페이지
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  10분만에 반응형 랜딩 페이지를 만들어보세요.
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div className="m-2">
                    <button className="text-white bg-gradient-to-r bg-primary-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      무료로 시작하기
                    </button>
                  </div>
                  <div className="m-2">
                    <button className="text-white bg-gradient-to-r bg-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      더 알아보기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Hero image */}
          <FadeInSection>
            <div>
              <div
                className="relative flex justify-center mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="flex flex-col justify-center">
                  <Image
                    src="/images/hero-image.png"
                    width="768"
                    height="432"
                    alt="Hero"
                    className="mx-auto"
                  />
                  <svg
                    className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                    width="768"
                    height="432"
                    viewBox="0 0 768 432"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="hero-ill-a"
                      >
                        <stop stopColor="#FFF" offset="0%" />
                        <stop stopColor="#EAEAEA" offset="77.402%" />
                        <stop stopColor="#DFDFDF" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="99.24%"
                        id="hero-ill-b"
                      >
                        <stop stopColor="#FFF" offset="0%" />
                        <stop stopColor="#EAEAEA" offset="48.57%" />
                        <stop
                          stopColor="#DFDFDF"
                          stopOpacity="0"
                          offset="100%"
                        />
                      </linearGradient>
                      <radialGradient
                        cx="21.152%"
                        cy="86.063%"
                        fx="21.152%"
                        fy="86.063%"
                        r="79.941%"
                        id="hero-ill-e"
                      >
                        <stop stopColor="#4FD1C5" offset="0%" />
                        <stop stopColor="#81E6D9" offset="25.871%" />
                        <stop stopColor="#338CF5" offset="100%" />
                      </radialGradient>
                      <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <circle
                        fillOpacity=".04"
                        fill="url(#hero-ill-a)"
                        cx="384"
                        cy="216"
                        r="128"
                      />
                      <circle
                        fillOpacity=".16"
                        fill="url(#hero-ill-b)"
                        cx="384"
                        cy="216"
                        r="96"
                      />
                      <g fillRule="nonzero">
                        <use fill="#000" xlinkHref="#hero-ill-d" />
                        <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                      </g>
                    </g>
                  </svg>
                </div>
                <button
                  className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setVideoModalOpen(true);
                  }}
                  aria-controls="modal"
                >
                  <svg
                    className="w-6 h-6 fill-current text-gray-400 group-hover:text-primary-600 flex-shrink-0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                    <path d="M10 17l6-5-6-5z" />
                  </svg>
                  <span className="ml-3">Watch the full video (2 min)</span>
                </button>
              </div>

              {/* Modal */}
              <Modal
                id="modal"
                ariaLabel="modal-headline"
                show={videoModalOpen}
                handleClose={() => setVideoModalOpen(false)}
              >
                <div className="relative pb-9/16">
                  <iframe
                    className="absolute w-full h-full"
                    src="https://player.vimeo.com/video/174002812"
                    title="Video"
                    allowFullScreen
                  ></iframe>
                </div>
              </Modal>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
