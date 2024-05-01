import React from "react";
import Nav from "./Nav";

type PropTypes = {
  children: React.ReactNode;
};

export default function Layout(props: PropTypes) {
  const { children } = props;
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
