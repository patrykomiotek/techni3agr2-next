"use client";

import { ToastContainer } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};
