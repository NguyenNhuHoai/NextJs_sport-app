import React from "react";
import ContainerCustom from "./ContainerCustom";
import Image from "next/image";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from '../../public/logo.svg'

const Footer = () => {
  return (
    <div>

      <div className=" bg-orange-500">
        <div className="w-[90%] m-auto p-2 grid lg:grid-cols-4 grid-cols-1 gap-3">
          <div>
            <Image width={200} height={200} src={logo} alt="logo" />
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3918.577466159827!2d106.70663037480597!3d10.843612089309282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1715938339434!5m2!1svi!2s"
                width="100%"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <h6 className="text-2xl text-center font-bold uppercase text-zinc-950 tracking-tight">
              giới thiệu
            </h6>
            <ul className="text-center text-xl text-zinc-950 my-2 ">
              <li className="my-2">Giới thiệu về Fireflyfly Shop</li>
              <li className="my-2">Thương hiệu</li>
              <li className=" my-2 flex justify-center items-center gap-5 text-zinc-950">
                <Facebook />
                <Youtube />
                <Instagram />
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-2xl text-center font-bold uppercase text-zinc-950 tracking-tight">
              các chính sách
            </h6>
            <ul className="text-center text-xl text-zinc-950 my-2">
              <li className="my-2">Bảo mật thông tin cá nhân</li>
              <li className="my-2">Cam kết hàng hóa</li>
              <li className="my-2">Cách thức mua hàng</li>
              <li className="my-2">Chính sách vận chuyển</li>
              <li className="my-2">Hình thức thanh toán</li>
              <li className="my-2">Hướng dẫn trả góp</li>
              <li className="my-2">Chính sách bảo hành</li>
            </ul>
          </div>
          <div>
            <h6 className="text-2xl text-center font-bold uppercase text-zinc-950 tracking-tight">
              Hồ Chí Minh
            </h6>
            <ul className="text-justify text-xl text-zinc-950 my-2">
              <li className="my-2">
                Lô 8, Tô Ký, Công viên phần mềm Quang Trung, Quận 12, Tp.Hồ Chí
                Minh
              </li>
              <li className="my-2">
                28/1/16, Nguyễn Văn Quá, ĐHT 19, Quận 12, Tp.Hồ Chí Minh{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
