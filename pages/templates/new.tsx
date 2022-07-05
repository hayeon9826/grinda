
import { useState } from "react";

import EditorScreen from "@components/Template/EditorScreen";
import { components, elements } from '@utils/TemplateCategories'
import SlideOver from "@components/Template/SlideOver";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TemplateNewPage = () => {
  const [currentTab, setCurrentTab] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <div className="h-screen">
        <SlideOver setOpen={setOpen} open={open} title={currentTab}/>
        <div className="lg:mt-12 hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            <nav className="px-3 mt-6">
              <div className="space-y-1">
              <h1 className="font-semibold mb-4 text-sm text-gray-600 ">ELEMENT</h1>
                {elements.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={
                      () => { 
                        setCurrentTab(item.name); 
                        setOpen(true);
                      }}
                    className={classNames(
                      currentTab === item?.name
                        ? "bg-gray-200 text-gray-900"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                      "group flex items-center px-2 py-2 text-sm font-normal rounded-md"
                    )}
                    aria-current={currentTab === item?.name ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
            <nav className="px-3 mt-4">
              <div className="space-y-1">
              <h1 className="font-semibold mb-4 text-sm text-gray-600 ">COMPONENT</h1>
                {components.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={
                      () => { 
                        setCurrentTab(item.name); 
                        setOpen(true);
                      }}
                    className={classNames(
                      currentTab === item?.name
                        ? "bg-gray-200 text-gray-900"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                      "group flex items-center px-2 py-2 text-sm font-normal rounded-md"
                    )}
                    aria-current={currentTab === item?.name ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <EditorScreen />
      </div>
    </>
  );
};

export default TemplateNewPage;
