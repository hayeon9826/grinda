import React from "react";
import { useRouter } from "next/router";

const NoticePage = () => {
  const router = useRouter();

  return (
    <>
      <div className="h-screen bg-white">
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-4xl mx-auto border-b pb-16">
              <h1>
                <span className="mt-8 block text-5xl leading-8 font-bold tracking-tight text-gray-700">공지사항</span>
              </h1>
              <h1>
                <span className="mt-16 block text-2xl leading-8 font-bold tracking-tight text-gray-700">제목입니다.</span>
              </h1>
              <div className="flex justify-between mt-4 border-b pb-4 mb-4">
                <p className="text-gray-500 text-sm">2022-06-20</p>
              </div>
              <div className="text-gray-700 font-normal text-base leading-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lectus sit amet lorem finibus iaculis eu lobortis urna. Nulla consequat nibh
                justo, in lobortis nulla ultricies eu. Duis efficitur nibh ut turpis semper finibus. Curabitur elementum egestas tortor, nec sollicitudin erat
                bibendum molestie. Sed tempus varius odio. Etiam laoreet sem dui, sit amet aliquam mi rutrum ut. Nullam ultrices, lectus et accumsan pretium,
                leo quam commodo eros, in luctus ipsum arcu id orci. Vivamus id venenatis orci. Donec ac cursus sem. Aenean sollicitudin ante vitae interdum
                egestas. Sed ac tincidunt risus. Donec tempus pellentesque augue cursus ullamcorper. Nunc quis placerat enim, vitae commodo elit. Sed semper
                velit et leo sagittis iaculis. Vivamus mi nulla, laoreet sed arcu ac, aliquet placerat arcu. Duis eu lectus justo. Sed at libero euismod, tempus
                neque vehicula, viverra ex. Morbi libero lectus, faucibus ac leo non, egestas rutrum eros. Donec bibendum sodales sapien et aliquet. Morbi
                eleifend, arcu molestie interdum elementum, urna lectus sodales tellus, ac auctor erat odio a risus. Sed lectus mauris, rhoncus quis varius
                quis, mattis vitae urna. Maecenas fringilla purus nec ante bibendum, pretium ultrices nisl egestas. Mauris dapibus quam mauris, eget scelerisque
                urna ullamcorper eget. Quisque ut libero id libero auctor ornare. Nulla aliquam placerat varius. Cras in ornare odio, non lobortis metus. Proin
                id aliquam purus. Nulla facilisi. Maecenas quis iaculis ligula. In hac habitasse platea dictumst. Vestibulum facilisis ac risus volutpat
                fringilla. Nunc vel massa risus. Fusce facilisis sodales tristique. Duis in accumsan tortor. Nulla vel hendrerit sapien. In hac habitasse platea
                dictumst. Aliquam rhoncus non tellus quis gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Praesent faucibus metus quis enim pellentesque volutpat. Nunc vehicula vitae lectus nec cursus. Donec sagittis placerat eros id bibendum. Cras
                ullamcorper condimentum elit, vitae convallis nisi accumsan a. Mauris finibus elit vitae pulvinar vehicula. Nullam rutrum commodo justo, eu
                pellentesque risus lacinia id. Cras lobortis lectus sed nibh hendrerit, sit amet consequat nunc egestas. Donec vitae velit eu orci sodales
                hendrerit quis vitae enim. Fusce non venenatis justo, sed rutrum dui. Mauris pellentesque vitae dui nec bibendum. Aliquam et enim dapibus turpis
                sodales ultricies id vel libero. Proin tempus congue dui eu lacinia. Donec eu arcu sed sapien dignissim pharetra. In dignissim lorem vitae leo
                finibus, eget auctor tortor faucibus. Duis gravida vulputate dolor, in commodo metus faucibus sit amet. Vivamus sed dui nulla. Aenean sit amet
                auctor arcu. Nulla facilisi. Nunc pretium metus et metus aliquam iaculis. Nullam cursus sodales erat, at volutpat nisl aliquam quis. Suspendisse
                pellentesque a orci quis ullamcorper. Ut venenatis molestie erat sit amet dignissim.
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
