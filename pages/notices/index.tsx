import React from "react";
import Link from "next/link";
import axios from "axios";
import { useQuery } from "react-query";
import { Notice } from "@interface";
import { useRouter } from "next/router";
import SkeletonList from "@components/SkeletonList";

const NoticePage: React.FC = () => {
  const router = useRouter();
  const { page = 0 } = router.query;

  const { data: notices, isFetching } = useQuery(
    ["notices", { page }],
    async () => {
      const result = await axios(`/api/notices`, {
        params: {
          limit: 10,
          page: page,
        },
      });

      return result;
    }
  );

  return (
    <>
      <section className="py-30 pb-40 xl:py-3">
        <div className="container px-4 mx-auto">
          <div className="mb-20 pt-10 text-center">
            <h2 className="mt-8 text-4xl font-bold">공지사항</h2>
          </div>

          <div className="max-w-4xl mx-auto pb-40">
            {isFetching && <SkeletonList />}
            <ul>
              {notices && notices?.data?.objects?.length ? (
                notices?.data?.objects?.map((notice: Notice) => (
                  <li
                    className="mb-4 px-4 lg:px-12 pb-6 pt-2 bg-white border-b cursor-pointer"
                    key={notice.id}
                  >
                    <button className="flex w-full text-left">
                      <div className="w-full">
                        <Link href={`/notices/${notice?.id}`} passHref>
                          <div>
                            <div className="text-md font-semibold text-gray-700">
                              {notice.title}
                            </div>
                            <div className="text-sm font-normal text-gray-500">
                              {notice.createdAt}
                            </div>
                          </div>
                        </Link>
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
              <div className=" sm:flex-1 sm:flex sm:items-center sm:justify-center">
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
                    {[...Array(notices?.data?.total_pages)].map((x, i) => (
                      <Link
                        href={{
                          pathname: `/notices`,
                          query: { ...router.query, page: i },
                        }}
                        key={i}
                      >
                        <a
                          className={`bg-white hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                            Number(page) === i
                              ? "text-primary-500 font-bold"
                              : "text-gray-500"
                          }`}
                        >
                          {i + 1}
                        </a>
                      </Link>
                    ))}

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
