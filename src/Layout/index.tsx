import React from "react";
import Nav from "./nav";
import { Outlet } from "react-router-dom";

type PropTypes = {
  children: React.ReactNode;
};

export default function Layout(props: PropTypes) {
  const { children } = props;
  return (
    <>
      <Nav />
      {children}
      <Outlet />
    </>
  );
}
