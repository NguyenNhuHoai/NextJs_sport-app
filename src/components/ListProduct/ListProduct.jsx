"use client";
import React from "react";
import ContainerCustom from "../ContainerCustom";
import ProductItem from "../ProductItem/ProductItem";
import CustomTitle from "../CustomTitle/CustomTitle";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
const ListProduct = ({
  className,
  data,
  title,
  isShowButton,
  total,
  handleShowMore,

  handleHide,
  takeProduct,
}) => {
  const productsList = data;

  return (
    <div className="w-full my-4">
      <CustomTitle title={title} />
      {total && (
        <h3 className="text-xl font-bold underline">{total} Sản phẩm</h3>
      )}
      <div
        className={(cn("grid lg:grid-cols-3 grid-cols-2 gap-10 "), className)}
      >
        {productsList?.map((item, index) => (
          <ProductItem key={index} dataProduct={item} />
        ))}
      </div>
      {isShowButton && (
        <>
          {total > takeProduct ? (
            <Button
              variant="outline"
              onClick={handleShowMore}
              className={cn(
                "underline text-zinc-950 bg-zinc-50 font-bold text-xl border-none hover:bg-orange-300"
              )}
            >
              Xem thêm
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={handleHide}
              className={cn(
                "underline text-zinc-950 bg-zinc-50 font-bold text-xl border-none hover:bg-orange-300"
              )}
            >
              Ấn đi
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default ListProduct;
