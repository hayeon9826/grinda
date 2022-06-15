import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <main>{children}</main>
      <Footer />
    </>
  );
}