import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";

const FaqPage: React.FC = () => {
  const [showId, setShowId] = useState(0);

  const faqs = [
    {
      id: 1,
      position: 1,
      title: "Lorem ipsum dolor sit amet",
      body: " consectetur adipiscing elit. Phasellus tincidunt, velit eu sagittis feugiat, massa ex interdum elit, quis accumsan purus magna eget sem. Curabitur vitae nibh diam. Aenean blandit tempor nulla id rhoncus. Proin ut purus lacinia mauris convallis auctor. Pellentesque ultrices quam scelerisque urna finibus tincidunt. Nunc bibendum nisi felis, at venenatis quam pulvinar ultrices. Nullam eu augue a lectus porta egestas.",
    },
    {
      id: 2,
      position: 2,
      title: "Duis eget tortor nec magna ultricies pretium.",
      body: "Fusce non tempor neque. Etiam a dapibus nisi, at interdum elit. In molestie urna ex, non convallis arcu lobortis sed. Nullam eget convallis dui, sit amet commodo felis. Phasellus nec est nisl. Sed sed egestas tortor. Nam imperdiet sem in ante blandit posuere. Integer viverra enim ac maximus sodales.",
    },
    {
      id: 3,
      position: 3,
      title:
        "Praesent justo risus, pellentesque in posuere sed, tristique nec libero?",
      body: " Aenean quis vestibulum massa. Nulla scelerisque ipsum eu lacus porta fringilla. Maecenas congue sem quis sagittis dignissim. Morbi finibus mi nisl, in dignissim felis feugiat eget. In luctus dolor nec sollicitudin blandit. In et orci finibus, sodales turpis eu, lobortis nulla. ",
    },
    {
      id: 4,
      position: 4,
      title:
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      body: "Sed ac hendrerit enim, at gravida metus. Quisque ac massa erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
    },
  ];

  return (
    <>
      <section className="py-30 pb-40 xl:py-3">
        <div className="container px-4 mx-auto">
          <div className="mb-20 pt-10 text-center">
            <h2 className="mt-8 text-4xl font-medium">자주 묻는 질문</h2>
          </div>
          <div className="max-w-4xl mx-auto pb-40">
            <ul>
              {faqs && faqs.length ? (
                faqs.map((faq) => (
                  <li
                    className="mb-4 px-4 lg:px-12 py-4 bg-white border-b"
                    key={faq.id}
                  >
                    <button className="flex w-full text-left">
                      <div className="w-auto mr-8">
                        <span className="flex items-center justify-center w-10 h-10 text-md text-gray-400">
                          {faq.position}
                        </span>
                      </div>
                      <div className="w-full">
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-normal">{faq.title}</div>
                          <span className="ml-4">
                            {showId === faq.position ? (
                              <ChevronUpIcon
                                className="w-5 h-5 text-primary-500"
                                onClick={() => {
                                  setShowId(0);
                                }}
                              />
                            ) : (
                              <ChevronDownIcon
                                className="w-5 h-5 text-primary-500"
                                onClick={() => {
                                  setShowId(faq.position);
                                }}
                              />
                            )}
                          </span>
                        </div>
                        <div
                          className={`mt-6 border-l-2 border-gray-50 pl-4 ${
                            showId !== faq.position && "hidden"
                          }`}
                        >
                          <p className="mb-5 text-base">{faq.body}</p>
                        </div>
                      </div>
                    </button>
                  </li>
                ))
              ) : (
                <div className="shadow-md col-span-3 w-100 cursor-pointer bg-white rounded-lg relative block p-6">
                  <div className="no_content">등록된 FAQ가 없습니다.</div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
