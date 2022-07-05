
import Image from "next/image";

const EditorScreen = () => {
  return (
    <>
      <div className="lg:pl-64 flex flex-col">
          <div className="overflow-y-auto">
            <div className="sm:flex md:hidden w-full lg:hidden xl:hidden fixed top-[10%] p-4 mb-4 shadow text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
              <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
              <div>
                <span className="font-medium">해당 화면에서 에디터를 지원하지 않습니다.</span> 
                <br />
                <span>모바일에서 확인해주세요.</span>
              </div>
            </div>
            
          </div>
        </div>
    </>
  );
};

export default EditorScreen;