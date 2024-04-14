"use client";
import React from "react";
import { useSelector } from "react-redux";
import module from "./NavAction.module.scss";

const NavActiveBlurProvider = ({ children }) => {
  const isNavActive = useSelector((state) => state.nav.isNavActive);

  return (
    <div className={`${module.normal} ${isNavActive && module.active}`}>
      {children}
    </div>
  );
};

export default NavActiveBlurProvider;
