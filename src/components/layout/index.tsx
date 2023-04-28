import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout: React.FC<React.PropsWithChildren> = () => {
  return (
    <div>
      <div className="fixed top-0 z-10 w-[100vw] bg-white shadow-[0_0_45px_0px_rgba(0,0,0,0.35)]">
        <Header />
      </div>
      <div className="min-h-[100vh] mt-[57px]">
        <main className="">
          <Outlet />
        </main>
      </div>
      <div className="bg-black400">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
