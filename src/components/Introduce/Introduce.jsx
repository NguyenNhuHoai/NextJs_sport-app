import React from "react";
import "./introduce.css";
import { Waves } from "lucide-react";
import ContainerCustom from "../ContainerCustom";
import banner1 from "../../../public/image/banner/banner7.png";
import banner2 from "../../../public/image/banner/banner8.png";
import Image from "next/image";
const Introduce = () => {
  return (
    <div className="mt-24">
      <div className="backgroundImage text-center pt-36 flex justify-center">
        <div className="py-10 -mb-1 px-16 bg-zinc-50 rounded-t-2xl">
          <h4 className="text-[40px] font-bold ">Giới thiệu</h4>
          <p className="text-2xl">Trang chủ / Giới thiệu</p>
        </div>
      </div>
      <ContainerCustom>
        <div className="w-full flex justify-center items-center">
          <div className="p-3 bg-orange-400 rounded-3xl relative selectbox">
            <div className="bg-zinc-50 py-16 px-24 rounded-2xl text-center flex justify-center items-center flex-col gap-3">
              <p>
                <Waves size='40px'/>
              </p>
              <p className="text-3xl font-bold tracking-wider">Looks Good.Run Good.Feels Good.</p>
              <p className="text-2xl tracking-wider">Hannahley</p>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="grid grid-cols-2 gap-8 py-20">
            <div className="order-1">
              <p className="text-5xl font-bold tracking-tight">
                Người ta nói gì về thể thao{" "}
              </p>
              <p className="text-xl tracking-widest text-justify">
                Thể thao là sự rèn luyện cho tinh thần và cơ thể. Không có gì
                quan trọng hơn sự đam mê trong thể thao. Thể thao giúp ta học
                cách chấp nhận thất bại và khôi phục lại từ những thất bại đó.
                Thể thao không chỉ là về việc chiến thắng, mà còn là về việc học
                cách chiến đấu và trưởng thành.
              </p>
            </div>
            <div className="w-full order-2 flex items-center">
              <Image
                src={banner1}
                alt="banner"
                width={300}
                className="lg:w-full lg:h-full  rounded-3xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="order-2">
              <p className="text-5xl font-bold tracking-tight">
                Sứ mệnh Firefly
              </p>
              <p className="text-xl tracking-widest text-justify">
                Cửa hàng Firefly mong muốn bạn có trải nghiệm dịch vụ tại cửa
                hàng tốt nhất, luôn luôn lắng nghe những đóng góp ý kiến của các
                bạn. Thế nên khi bạn gặp vấn đề gì trong quá trình mua hàng tại
                cửa hàng Firefly xin hãy liên hệ với chúng chúng tôi, để đội ngũ
                nhân viên hỗ trợ bạn giải quyết vấn đề. Trân trọng cảm ơn bạn đã
                tin tưởng mua hàng tại cửa hàng Firefly chúng tôi.
              </p>
            </div>
            <div className="w-full order-1 flex items-center">
              <Image
                src={banner2}
                alt="banner"
                width={300}
                className="lg:w-full lg:h-full  rounded-3xl"
              />
            </div>
          </div>
        </div>
      </ContainerCustom>
    </div>
  );
};

export default Introduce;
