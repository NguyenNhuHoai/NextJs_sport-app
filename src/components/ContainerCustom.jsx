import React, { ReactNode } from "react";
import { cn } from "../lib/utils";

const ContainerCustom = ({ className, children }) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-3xl px-2.5 md:px-20 my-12",
        className
      )}
    >
      {children}
    </div>
  );
};
export default ContainerCustom;
