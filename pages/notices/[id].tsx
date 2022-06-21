import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useQuery } from "react-query";
import dayjs from "dayjs";

const NoticePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: notice,
    isFetching,
    refetch,
  } = useQuery(
    ["notices", id],
    async () => {
      const result = await axios.get(`/api/notices?id=${id}`);
      return result;
    },
    {
      enabled: !!id,
    }
  );

  return (
    <>
      <div className="h-screen bg-white">
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-4xl mx-auto border-b pb-16">
              <h1>
                <span className="mt-8 block text-5xl leading-8 font-bold tracking-tight text-gray-700">
                  공지사항
                </span>
              </h1>
              <h1>
                <span className="mt-16 block text-2xl leading-8 font-bold tracking-tight text-gray-700">
                  {notice?.data?.title}
                </span>
              </h1>
              <div className="flex justify-between mt-4 border-b pb-4 mb-4">
                <p className="text-gray-500 text-sm">
                  {dayjs(notice?.data?.createdAt).format("YYYY-MM-DD")}
                </p>
              </div>
              <div className="text-gray-700 font-normal text-base leading-10">
                {notice?.data?.body}
              </div>
            </div>
            <div className="flex pt-8 max-w-4xl mx-auto text-lg">
              <button
                onClick={() => {
                  router.back();
                }}
                className={`rounded-md inline-flex justify-center py-2 px-5 border border-transparent text-sm font-medium  text-gray-800 bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2`}
              >
                목록으로 돌아가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticePage;
