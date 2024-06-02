import React from "react";
import { cn } from "../../lib/utils";

const CustomTitle = ({ className, ...props }) => {
  const { title } = props;
  return (
    <div className={cn("flex justify-between items-end my-10", className)}>
      <h2 className="text-6xl font-bold">{title}</h2>
    </div>
  );
};

export default CustomTitle;
