"use client";
import { wait } from "@/shared/utils";
import React, { useEffect, useState } from "react";

const Greets = () => {
  const [index, setIndex] = useState(0);

  const greets = [
    "Hello, I'm",
    "Hola, soy",
    "Bonjour, je suis",
    "Hallo, ich bin",
    "你好，我是",
    "こんにちは、私はです",
    "Привет, я",
    "مرحبًا، أنا",
    "Olá, eu sou",
    "Ciao, sono",
    "안녕하세요, 저는",
  ];

  useEffect(() => {
    async function changeLanguage() {
      if (index == greets.length - 1) {
        setIndex(0);
        return;
      }
      await wait(2000);
      setIndex(index + 1);
    }
    changeLanguage();
  }, [index]);

  return <>{greets[index]}</>;
};

export default Greets;
