"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import image1 from "../../../public/image/product/Image1.png";
import { cn } from "../../lib/utils";
import { calculateSales, formatMoney, formatString } from "../../lib/helpFnc";
import Rating from "../Rating";

const ProductItem = ({ className, dataProduct }) => {
  const [ListProduct, setListProduct] = useState(null);

  const stars = [];
  for (let i = 0; i < dataProduct.numberStar; i++) {
    stars.push(<Star color="yellow" />);
  }
  return (
    <article
      className={cn(
        "border group shadow-2xl hover:-translate-y-5 ease-in transition-all 0.6s my-4",
        className
      )}
    >
      <Link href={`/product/${dataProduct.id}`}>
        <div className="w-full shadow-md overflow-hidden ">
          <img
            className="w-[100%] "
            width={20}
            height={20}
            src={dataProduct.images[0]?.path}
            alt="image"
          />
        </div>
        <div className="px-2 py-3">
          <p className="lg:text-lg text-xl font-bold tracking-tight my-2">
            {formatString(dataProduct.name)}
          </p>

          <Rating numberStar={dataProduct.numberStar} />

          <div className="flex justify-center items-start flex-wrap pb-2 flex-col">
            <p className="lg:text-xl text-lg font-bold text-black">
              {dataProduct.sale.percent > 0
                ? formatMoney(
                    calculateSales(dataProduct.price, dataProduct.sale.percent)
                  )
                : formatMoney(dataProduct?.price)}
            </p>

            {dataProduct.sale.percent > 0 && (
              <div className="relative w-full">
                <p className="text-zinc-400 line-through font-bold lg:text-xl text-lg">
                  {formatMoney(dataProduct?.price)}
                </p>
                <p className="bg-red-500 rounded-full p-2 text-xs text-zinc-50 absolute top-0 right-0">
                  {dataProduct.sale.percent} %
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductItem;
