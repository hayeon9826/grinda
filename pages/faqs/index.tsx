import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { Faq } from "@interface";
import axios from "axios";
import { useQuery } from "react-query";
import { categories } from "./categories";
import SkeletonList from "@components/SkeletonList";

const FaqPage: React.FC = () => {
  const [showId, setShowId] = useState("");
  const [category, setCategory] = useState("general");

  const { data: faqs, isFetching } = useQuery(
    ["faqs", { category }],
    async () => {
      const result = await axios(`/api/faqs`, {
        params: {
          category: category,
        },
      });
      return result;
    }
  );

  return (
    <>
      <section className="py-30 pb-40 xl:py-3">
        <div className="container px-4 mx-auto">
          <div className="mb-10 pt-10 text-center">
            <h2 className="mt-8 text-4xl font-bold">자주 묻는 질문</h2>
          </div>
          <div className="max-w-4xl mx-auto pb-40">
            <div className="px-4 mb-20 lg:px-12 text-center">
              {categories?.length &&
                categories?.map((data, index) => (
                  <button
                    onClick={() => setCategory(data?.name)}
                    key={index}
                    type="button"
                    className={`font-normal rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
                      category === data?.name
                        ? "bg-primary-500 hover:bg-primary-600 text-white "
                        : "bg-slate-200 hover:bg-slate-300 text-gray-700"
                    }`}
                  >
                    {data.title}
                  </button>
                ))}
            </div>
            {isFetching && <SkeletonList />}
            <ul>
              {faqs && faqs?.data?.objects?.length ? (
                faqs?.data?.objects?.map((faq: Faq, index) => (
                  <li
                    className="mb-4 px-4 lg:px-12 py-4 bg-white border-b"
                    key={faq.id}
                  >
                    <button className="flex w-full text-left">
                      <div className="w-auto mr-8">
                        <span className="flex items-center justify-center w-10 h-10 text-md text-gray-400">
                          {index + 1}
                        </span>
                      </div>
                      <div className="w-full">
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-normal">
                            {faq.question}
                          </div>
                          <span className="ml-4">
                            {showId === faq.id ? (
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
                                  setShowId(faq.id);
                                }}
                              />
                            )}
                          </span>
                        </div>
                        <div
                          className={`mt-6 border-l-2 border-gray-50 pl-4 ${
                            showId !== faq.id && "hidden"
                          }`}
                        >
                          <p className="mb-5 text-base">{faq.answer}</p>
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
