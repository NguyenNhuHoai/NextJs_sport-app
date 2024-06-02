import Image from "next/image";
import React from "react";
import photo from "../../../public/image/photo/photo1.png";
import { Button } from "../ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { cn } from "../../lib/utils";
import ContainerCustom from "../ContainerCustom";
const AboutUs = ({ ...props }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 m-auto mt-10 gap-1 lg:gap-12">
        <div>
          <div className="flex flex-col gap-6 p-2">
            <h2 className="lg:text-5xl text-4xl font-bold text-black tracking-tight text-shadow">
              Chào mừng bạn đến với{" "}
              <span className="text-orange-600 block"> Firefly shop</span>
            </h2>
            <p className="text-justify tracking-tight lg:text-xl text-xl text-shadow">
              Cửa hàng Firefly chúng tôi chuyên bán đồ thể thao được thành lập
              năm 2023 với tiêu chí “Looks Good.Runs Good.Feels Good. ” Chúng
              tôi mong khách hàng luôn có trải nghiệm tốt nhất tại cửa hàng của
              chúng tôi. Chúc khách hàng có 1 ngày mua sắm tuyệt vời tại cửa
              hàng Firefly, Trân trọng cảm ơn!
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-4 gap-5">
              <div className="bg-orange-500 p-5 rounded-full hover:text-black text-white hover:bg-orange-400">
                <Phone size={30} />
              </div>
              <div>
                <p className="lg:text-2xl text-xl font-bold text-shadow">
                  0366259312{" "}
                </p>
                <span className="text-base text-shadow">
                  Liên hệ với chúng tôi nếu bạn gặp vấn đề khi mua sắm tại cửa
                  hàng Firefly.
                </span>
              </div>
            </div>
            <Button
              className={cn(
                "relative group text-base p-2 bg-zinc-950 flex justify-center items-center gap-2 text-orange-600"
              )}
            >
              Đến cửa hàng ngay
              <ArrowRight
                size={25}
                className="transition-transform ease-in-out duration-200 transform group-hover:translate-x-1 x"
              />
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={props.srcImage}
            alt="photo"
            className="lg:w-2/3 w-full rounded-tr-[150px] rounded-bl-[150px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
