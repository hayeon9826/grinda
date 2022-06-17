import React from "react";

const NoticePage: React.FC = () => {
  const notices = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      date: "2022. 05. 10",
    },
    {
      id: 2,
      title: "Duis eget tortor nec magna ultricies pretium.",
      date: "2022. 06. 10",
    },
    {
      id: 3,
      title:
        "Praesent justo risus, pellentesque in posuere sed, tristique nec libero?",
      date: "2022. 06. 10",
    },
    {
      id: 4,
      title:
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      date: "2022. 06. 12",
    },
    {
      id: 5,
      title:
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      date: "2022. 06. 12",
    },
    {
      id: 6,
      title:
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      date: "2022. 06. 12",
    },
    {
      id: 7,
      title:
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      date: "2022. 06. 12",
    },
    {
      id: 8,
      title:
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      date: "2022. 06. 12",
    },
    {
      id: 9,
      title:
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      date: "2022. 06. 12",
    },
  ];

  return (
    <>
      <section className="py-30 pb-40 xl:py-3">
        <div className="container px-4 mx-auto">
          <div className="mb-20 pt-10 text-center">
            <h2 className="mt-8 text-4xl font-semibold">공지사항</h2>
          </div>
          <div className="max-w-4xl mx-auto pb-40">
            <ul>
              {notices && notices.length ? (
                notices.map((faq) => (
                  <li
                    className="mb-4 px-4 lg:px-12 pb-4 bg-white border-b"
                    key={faq.id}
                  >
                    <button className="flex w-full text-left">
                      <div className="w-full">
                        <div>
                          <div className="text-md font-medium">{faq.title}</div>
                          <div className="text-sm font-thin">{faq.date}</div>
                        </div>
                      </div>
                    </button>
                  </li>
                ))
              ) : (
                <div className="col-span-3 w-100 cursor-pointer bg-white rounded-lg relative block p-6">
                  <div className="no_content">등록된 공지사항이 없습니다.</div>
                </div>
              )}
            </ul>
            {/* paginaion */}
            <div className="bg-white px-4 flex items-center justify-center sm:px-6 mt-16">
              <div className="flex-1 flex justify-center sm:hidden">
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  {" "}
                  Previous{" "}
                </a>
                <a
                  href="#"
                  className="ml-3 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  {" "}
                  Next{" "}
                </a>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
                <div>
                  <nav
                    className="relative z-0 inline-flex rounded-md -space-x-px"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 bg-primary-50-primary-500 text-primary-500 relative inline-flex items-center px-4 py-2 text-sm font-medium"
                    >
                      {" "}
                      1{" "}
                    </a>
                    <a
                      href="#"
                      className="bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
                    >
                      {" "}
                      2{" "}
                    </a>
                    <a
                      href="#"
                      className="bg-white text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 text-sm font-medium"
                    >
                      {" "}
                      3{" "}
                    </a>
                    <span className="relative inline-flex items-center px-4 py-2 bg-white text-sm font-medium text-gray-700">
                      {" "}
                      ...{" "}
                    </span>
                    <a
                      href="#"
                      className="bg-white text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 text-sm font-medium"
                    >
                      {" "}
                      8{" "}
                    </a>
                    <a
                      href="#"
                      className="bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
                    >
                      {" "}
                      9{" "}
                    </a>
                    <a
                      href="#"
                      className="bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
                    >
                      {" "}
                      10{" "}
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoticePage;
