import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: any) {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <ToastContainer />
      <main>{children}</main>
      {router.pathname !== "/templates/new" && <Footer />}
    </>
  );
}
