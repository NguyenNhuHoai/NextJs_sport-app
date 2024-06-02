"use client";
import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import AboutUs from "../AboutUs/AboutUs";
import ListProduct from "../ListProduct/ListProduct";
import photo from "../../../public/image/photo/photo1.png";
import Image from "next/image";
import "./homepage.css";
import ContainerCustom from "../ContainerCustom";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import CustomTitle from "../CustomTitle/CustomTitle";
import banner1 from "../../../public/image/banner/banner3.png";
import banner2 from "../../../public/image/banner/banner4.png";
import banner3 from "../../../public/image/banner/banner5.png";
import UseCustomHook from "../../lib/useCustomHook/UseCustomHook";
const HomePage = () => {
  const {
    dataNewProduct,
    dataProductClothes,
    dataProductSale,
    dataProductShoeSocer,
  } = UseCustomHook();
  return (
    <div>
      <Slider />
      <ContainerCustom>
        <AboutUs srcImage={photo} />

        <ListProduct
          data={dataNewProduct}
          title="Sản phẩm mới"
          className={"grid lg:grid-cols-6 grid-cols-2 gap-3 my-8"}
        />
        <ListProduct
          data={dataProductSale}
          title="Sản phẩm giảm giá"
          className={"grid lg:grid-cols-6 grid-cols-2 gap-3 my-8"}
        />
      </ContainerCustom>
      <div className="backgroundImage">
        <ContainerCustom>
          <div className="grid grid-cols-3 gap-8 py-10">
            <div className="  flex flex-col justify-center items-start gap-5">
              <h2 className="text-[40px] font-bold text-orange-600 uppercase">
                Tư vấn Nike của bạn!{" "}
              </h2>
              <p className="text-xl text-zinc-50 tracking-tighter text-justify">
                Hãy tham gia cùng các thành viên của chúng tôi và thể hiện tình
                yêu của bạn đối với <span>Nike By You!</span>
              </p>
              <Button
                variant="outline"
                className={cn(
                  "bg-orange-500 text-zinc-50 border-none hover:bg-orange-200 "
                )}
              >
                Tham gia
              </Button>
            </div>
          </div>
        </ContainerCustom>
      </div>
      <ContainerCustom>
        <ListProduct
          data={dataProductShoeSocer}
          title="Giày thể thao"
          className={"grid lg:grid-cols-6 grid-cols-2 gap-4 my-8"}
        />
        <ListProduct
          data={dataProductClothes}
          title="Quần áo"
          className={"grid lg:grid-cols-6 grid-cols-2 gap-4 my-8"}
        />
      </ContainerCustom>
      <ContainerCustom>
        <div className="my-8">
          <CustomTitle />
          <div className="grid grid-cols-2 grid-rows-3 my-5">
            <div className="order-1 flex items-center justify-center">
              <p className="text-4xl font-bold tracking-widest uppercase">
                Tập thể dục
              </p>
            </div>
            <div className="order-2">
              <Image src={banner1} alt="banner" />
            </div>
            <div className="order-4 flex items-center justify-center">
              <p className="text-4xl font-bold tracking-widest uppercase">
                Chạy bộ
              </p>
            </div>
            <div className="order-3">
              <Image src={banner2} alt="banner" />
            </div>
            <div className="order-5 flex items-center justify-center">
              <p className="text-4xl font-bold tracking-widest uppercase">
                Đá banh
              </p>
            </div>
            <div className="order-6">
              <Image src={banner3} alt="banner" />
            </div>
          </div>
          <h3 className="text-center mt-6 lg:text-5xl text-3xl font-bold italic tracking-wider uppercase">
            LOOKS GOOD. RUNS GOOD. FEELS GOOD.
          </h3>
        </div>

        <div className="flex justify-between items-start gap-4">
          <div>
            <h6 className="text-2xl text-center font-bold uppercase text-zinc-950 tracking-tight">
              Giày
            </h6>
            <ul className="text-center text-xl text-zinc-500 my-2">
              <li>Thương hiệu nổi bật</li>
              <li>Giày chạy bộ</li>
              <li>Giày leo núi</li>
              <li>Giày đá banh</li>
            </ul>
          </div>
          <div>
            <h6 className="text-2xl text-center font-bold uppercase text-zinc-950 tracking-tight">
              Quần áo
            </h6>
            <ul className="text-center text-xl text-zinc-500 my-2">
              <li>Quần áo thể thao</li>
              <li>Sport bra</li>
              <li>Quần áo tập gym</li>
            </ul>
          </div>
          <div>
            <h6 className="text-2xl text-center font-bold uppercase text-zinc-950 tracking-tight">
              Môn thể thao
            </h6>
            <ul className="text-center text-xl text-zinc-500 my-2">
              <li>Chạy bộ</li>
              <li>Bóng rổ</li>
              <li>Bóng đá</li>
              <li>Tập luyện/phòng Gym</li>
            </ul>
          </div>
          <div>
            <h6 className="text-2xl text-center font-bold uppercase text-zinc-950 tracking-tight">
              Thương hiệu
            </h6>
            <ul className="text-center text-xl text-zinc-500 my-2">
              <li>Nike</li>
              <li>Jodan</li>
              <li>Adidas</li>
              <li>MLB</li>
              <li>Converse</li>
            </ul>
          </div>
        </div>
      </ContainerCustom>
    </div>
  );
};

export default HomePage;
