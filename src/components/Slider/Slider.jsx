import React from "react";
import "./index.css";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { ArrowRight } from "lucide-react";
const Slider = () => {
  return (
    <div className="block">
      <div className="w-full mt-20 backgroundImageSlide h-[90vh] flex items-center">
        <div className="flex m-auto flex-col justify-center items-center gap-4">
          <div className="lg:text-7xl text-center text-4xl text-orange-600 font-bold">
            <h1>Mua sắm đồ dụng cụ thể thao ở Firefly </h1>
          </div>
          <div className="lg:text-4xl text-center text-xl text-orange-600 font-bold">
            <h2>Giảm giá 50% cho bộ sưu tập giày thể thao </h2>
          </div>
          <div>
            <Button
              className={cn(
                "relative group lg:text-4xl text-xl p-9 bg-zinc-950 flex justify-center items-center gap-2 text-orange-600"
              )}
            >
              Đến cửa hàng ngay
              <ArrowRight
                size={35}
                className="transition-transform ease-in-out duration-200 transform group-hover:translate-x-3 x"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
