import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

type PropTypes = {
  children: React.ReactNode;
};

export default function Layout(props: PropTypes) {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Outlet />
    </>
  );
}
