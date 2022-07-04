import { Transition } from "@headlessui/react";
import { useState } from "react";

const elements = [
  { name: "Text", href: "#", current: false },
  { name: "Image", href: "#", current: false },
  { name: "Button", href: "#", current: false },
  { name: "Card", href: "#", current: false },
  { name: "List", href: "#", current: false },
  { name: "Background", href: "#", current: false },
  { name: "SNS", href: "#", current: false },
]

const components = [
  { name: "Navigation", href: "#", current: true },
  { name: "Header", href: "#", current: false },
  { name: "Banner", href: "#", current: false },
  { name: "Features", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
  { name: "FAQ", href: "#", current: false },
  { name: "Content", href: "#", current: false },
  { name: "Team", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Posts", href: "#", current: false },
  { name: "Testimonials", href: "#", current: false },
  { name: "Statistics", href: "#", current: false },
  { name: "Contacts", href: "#", current: false },
  { name: "Footer", href: "#", current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TemplateNewPage = () => {
  const [currentTab, setCurrentTab] = useState<string>("");

  return (
    <>
      <div className="h-screen">
        {/* Static sidebar for desktop */}
        <div className="lg:mt-12 hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            {/* Navigation */}
            <nav className="px-3 mt-6">
              <div className="space-y-1">
              <h1 className="font-semibold mb-4 text-sm text-gray-600 ">ELEMENT</h1>
                {elements.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setCurrentTab(item.name)}
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
                    onClick={() => setCurrentTab(item.name)}
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
        {/* Main column */}
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
            <div className="h-screen lg:flex md:flex items-center justify-center border-4 border-dotted hidden">
              Content...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateNewPage;
