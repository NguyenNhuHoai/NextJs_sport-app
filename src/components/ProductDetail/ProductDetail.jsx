"use client";
import React, { useEffect, useRef, useState } from "react";
import SelectedList from "../SelectedList/SelectedList";
import Breadcrumb from "../Breadcrumb";
import ContainerCustom from "../ContainerCustom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import product1 from "../../../public/image/product/productDetail/productDetail01.png";
import product2 from "../../../public/image/product/productDetail/productDetail02.png";
import product3 from "../../../public/image/product/productDetail/productDetail03.png";
import product4 from "../../../public/image/product/productDetail/productDetail04.png";
import product5 from "../../../public/image/product/productDetail/productDetail05.png";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { BadgeDollarSign, Minus, Plus, ShoppingCart } from "lucide-react";
import ListProduct from "../ListProduct/ListProduct";
import CommentComponent from "../CommentComponent/CommentComponent";
import { useParams } from "next/navigation";
import { getDataProductDetail } from "../../lib/getData";
import { calculateSales, formatMoney } from "../../lib/helpFnc";
import UseCustomHook from "../../lib/useCustomHook/UseCustomHook";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
const ProductDetail = () => {
  const path = useParams();
  const [dataProductDetail, setDataProductDetail] = useState();
  const { dataNewProduct } = UseCustomHook();
  async function fetchData(id) {
    const productDetail = await getDataProductDetail(id);
    if (productDetail?.product) {
      setDataProductDetail(productDetail?.product[0]);
    }
  }

  useEffect(() => {
    fetchData(path.id);
  }, [path.id]);
  const [quantity, setQuantity] = useState(0);
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleReduce = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity(quantity - 1);
  };
  const handleGetValueColor = (value) => {
    console.log(value);
  };

  return (
    <div className="mt-24 w-full">
      <SelectedList/>
      <ContainerCustom>
        <Breadcrumb />
      </ContainerCustom>
      <hr />

      <ContainerCustom>
        <div className="w-full grid lg:grid-cols-12 grid-cols-1 gap-3 mb-5">
          <div className="lg:col-span-5 col-span-1 xl:mx-10 w-full flex items-center">
            <Carousel>
              <CarouselContent>
                {dataProductDetail?.images.map((img, index) => (
                  <CarouselItem
                    key={index}
                    className={cn("flex justify-center items-center")}
                  >
                    <img
                      src={img?.path}
                      alt="product-detail1"
                      width={300}
                      height={100}
                      className=""
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="lg:col-span-5 col-span-1 xl:mx-20 w-full">
            <div className="p-3 px-5">
              <div className="flex flex-col justify-center items-start gap-4">
                <p className="text-xl text-zinc-500 tracking-tight">
                  {dataProductDetail?.brand?.name}
                </p>
                <h1 className="text-2xl text-zinc-950 font-bold tracking-tight">
                  {dataProductDetail?.name}
                </h1>
                <div className="flex justify-center items-start flex-wrap pb-2 gap-10">
                  <p className="lg:text-xl text-lg font-bold text-black">
                    {dataProductDetail?.sale.percent > 0
                      ? formatMoney(
                          calculateSales(
                            dataProductDetail.price,
                            dataProductDetail.sale.percent
                          )
                        )
                      : formatMoney(dataProductDetail?.price)}
                  </p>

                  {dataProductDetail?.sale.percent > 0 && (
                    <p className="text-zinc-400 line-through font-bold lg:text-xl text-lg">
                      {formatMoney(dataProductDetail?.price)}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className="flex justify-center items-center gap-5 py-4 flex-wrap">
              <div className="flex justify-start items-center gap-3 py-7">
                <label>Số lượng tồn kho</label>
                <p>{dataProductDetail?.numberProduct}</p>
              </div>
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Kích thướt" />
                </SelectTrigger>
                <SelectContent>
                  {dataProductDetail?.size.map((s, index) => (
                    <SelectItem key={index} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex justify-center items-center gap-1">
                <Button
                  onClick={handleIncrease}
                  variant="outline"
                  className="bg-transparent border-none text-zinc-950 hover:bg-transparent hover:text-red-500"
                >
                  <Plus className="cursor-pointer" size={15} />
                </Button>
                <Input
                  value={quantity}
                  className="focus-visible:ring-0 w-10 p-1 text-center"
                />
                <Button
                  variant="outline"
                  onClick={handleReduce}
                  className="bg-transparent border-none text-zinc-950 hover:bg-transparent hover:text-red-500"
                >
                  <Minus onClick={handleReduce} size={15} />
                </Button>
              </div>
              <div>
                <div className="flex justify-between items-center gap-4">
                  <Label>Màu sắc</Label>
                  {dataProductDetail?.color.map((cl, index) => (
                    <button
                      key={index}
                      onClick={() => handleGetValueColor(cl)}
                      style={{
                        backgroundColor: `${cl}`,
                        width: "40px",
                        height: "40px",
                      }}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              className={cn(
                "w-full flex justify-center items-center gap-3 bg-orange-500 hover:bg-orange-300 hover:text-zinc-950 mb-4"
              )}
            >
              <ShoppingCart /> Thêm vào giỏ hàng
            </Button>
            <Button
              className={cn(
                "w-full flex justify-center items-center gap-3 bg-orange-500 hover:bg-orange-300 hover:text-zinc-950"
              )}
            >
              <BadgeDollarSign /> Mua sản phẩm
            </Button>
          </div>
          <div className="lg:col-span-12 col-span-1 xl:mx-10 w-full">
            <p
              className="text-xl tracking-tighter text-justify w-full"
              dangerouslySetInnerHTML={{
                __html: dataProductDetail?.descriptions,
              }}
            ></p>
          </div>
        </div>
        <CommentComponent className="mt-14" />
        <ListProduct
          data={dataNewProduct}
          title="Sản phẩm mới"
          className={cn("grid xl:grid-cols-6 lg:gap-5 grid-cols-2 gap-2 my-10")}
        />
      </ContainerCustom>
    </div>
  );
};

export default ProductDetail;
