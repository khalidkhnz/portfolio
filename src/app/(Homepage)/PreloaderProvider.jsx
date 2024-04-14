"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader/index";
import { useEffect, useState } from "react";
const PreloaderProvider = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 5000);
    })();
  }, []);

  return (
    <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
  );
};

export default PreloaderProvider;
