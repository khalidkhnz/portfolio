"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import React from "react";
import Header from "@/components/Header/Header";

const HeaderProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Header />
      <div>{children}</div>
    </main>
  );
};

export default HeaderProvider;
