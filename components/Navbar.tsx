import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { toast } from "react-toastify";
import { app } from "@lib/firebase";
import { deleteUser, getAuth, signOut } from "firebase/auth";
import { getCurrentUser } from "@lib/frontend";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {
  const router = useRouter();
  const { currentUser, isFetching, refetch } = getCurrentUser();

  const navigation = [
    { name: "템플릿", href: "/", current: router.pathname === "/" },
    {
      name: "공지사항",
      href: "#",
      current: router.pathname === "/notices",
    },
    { name: "FAQ", href: "#", current: router.pathname === "/faqs" },
  ];

  const handleAlert = () => {
    toast.info("페이지 준비중입니다.", {
      autoClose: 1000,
    });
  };

  const handleLogout = async () => {
    const auth = getAuth(app);
    await signOut(auth);
    toast.success("로그아웃 되었습니다.", {
      autoClose: 1000,
    });
    router.replace("/");
    refetch();
  };
  return (
    <>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/" passHref>
                      <span className="text-primary-500 text-2xl font-bold cursor-pointer">
                        Grinda
                      </span>
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link href={item.href} key={item.name} passHref>
                          <span
                            key={item.name}
                            onClick={() =>
                              item.href === "#" ? handleAlert() : ""
                            }
                            className={classNames(
                              item.current
                                ? "text-primary-500 font-semibold underline"
                                : "text-gray-300 hover:text-primary-500",
                              "px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:block">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-200 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 "
                  >
                    <span className=" text-white">로그아웃</span>
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    className={classNames(
                      item.current
                        ? "text-primary-500 font-semibold underline"
                        : "text-gray-300 hover:text-primary-500",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <Link href={item.href} key={item.name}>
                      {item.name}
                    </Link>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
