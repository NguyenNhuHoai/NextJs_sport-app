"use client";
import React, { useState } from "react";
import CustomTitle from "../CustomTitle/CustomTitle";
import ContainerCustom from "../ContainerCustom";
import Image from "next/image";
import image1 from "../../../public/image/product/image1.png";
import { Button } from "../ui/button";
import { BadgeDollarSign, Minus, Plus, Trash2 } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
const Cart = () => {
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
  return (
    <div className="mt-24 py-2">
      <ContainerCustom>
        <CustomTitle />
        <div className="grid lg:grid-cols-3 gap-2">
          <div className="col-span-2">
            <article className="flex justify-between items-center gap-5 bg-zinc-300 px-2 py-2 my-5">
              <div className="flex justify-between items-center gap-3">
                <Image
                  src={image1}
                  alt="product"
                  width={90}
                  height={50}
                  className="w-16 h-11"
                />
                <div>
                  <p className="text-base font-bold">Jordan Delta 2</p>
                  <p className="text-base">4.790.000đ</p>
                </div>
              </div>
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
                <p>4.790.000đ</p>
              </div>
              <Button
                variant="outline"
                className="bg-transparent border-none text-zinc-950 hover:bg-transparent hover:text-red-500"
              >
                <Trash2 />
              </Button>
            </article>
            <article className="flex justify-between items-center gap-5 bg-zinc-300 px-2 py-2 my-5">
              <div className="flex justify-between items-center gap-3">
                <Image
                  src={image1}
                  alt="product"
                  width={90}
                  height={50}
                  className="w-16 h-11"
                />
                <div>
                  <p className="text-base font-bold">Jordan Delta 2</p>
                  <p className="text-base">4.790.000đ</p>
                </div>
              </div>
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
                <p>4.790.000đ</p>
              </div>
              <Button
                variant="outline"
                className="bg-transparent border-none text-zinc-950 hover:bg-transparent hover:text-red-500"
              >
                <Trash2 />
              </Button>
            </article>
          </div>
          <div className="col-span-1 ml-6 py-3 ">
            <p className="text-lg font-bold">Tổng thanh toán</p>
            <div className="my-2">
              <div className="flex justify-between items-center my-2">
                <p className="text-base">Tổng tiền hàng</p>
                <p className="text-base">4.000.000 VNĐ </p>
              </div>
              <div className="flex justify-between items-center my-2">
                <p className="text-base">Tổng giảm giá</p>
                <p className="text-base">0 VNĐ </p>
              </div>
              <hr />
              <p className="my-2 text-end">4.000.000 VNĐ </p>
            </div>
            <Button className={cn('bg-orange-500 hover:bg-orange-300 hover:text-zinc-950')}>
              <BadgeDollarSign /> Mua ngay
            </Button>
          </div>
        </div>
      </ContainerCustom>
    </div>
  );
};

export default Cart;
