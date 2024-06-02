"use client";
import React, { useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Button } from "../ui/button";

const SelectedList = React.memo(
  ({ dataBrand, dataCategory, dataTableSale, handleGetId, isShowSelect }) => {
    const memoizedBrandOptions = useMemo(
      () => dataBrand?.dataBrand || [],
      [dataBrand]
    );
    const memoizedCategoryOptions = useMemo(
      () => dataCategory?.dataCategory || [],
      [dataCategory]
    );
    const memoizedSaleOptions = useMemo(
      () => dataTableSale || [],
      [dataTableSale]
    );
    return (
      <>
        <div className="bg-zinc-600 px-6 py-6 text-center">
          <p className="text-zinc-50 text-lg">
            Giao hàng miễn phí cho đơn hàng từ 4 triệu trở lên
          </p>
          <p className="text-zinc-50 text-lg underline">Đăng kí ngay </p>
        </div>

        {isShowSelect && (
          <div className="w-[80%] mx-auto my-12 flex justify-start items-center flex-wrap gap-3">
            <Select
              name="brand"
              onValueChange={(value) => {
                handleGetId({ idBrand: value });
              }}
            >
              <SelectTrigger className="w-[200px] text-xl p-4">
                <SelectValue placeholder="Thương hiệu" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {memoizedBrandOptions?.map((data, index) => (
                    <SelectItem key={index} value={data.id}>
                      {data.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              name="category"
              onValueChange={(value) => {
                handleGetId({ idCategory: value });
              }}
            >
              <SelectTrigger className="w-[200px] text-xl p-4">
                <SelectValue placeholder="Loại sản phẩm" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {memoizedCategoryOptions?.map((data, index) => (
                    <SelectItem key={index} value={data.id}>
                      {data.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              name="sale"
              onValueChange={(value) => {
                handleGetId({ idSale: value });
              }}
            >
              <SelectTrigger className="w-[200px] text-xl p-4">
                <SelectValue placeholder="Giảm giá" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {memoizedSaleOptions?.map((data, index) => (
                    <SelectItem key={index} value={data.id}>
                      {data.percent}%
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}
      </>
    );
  }
);

export default SelectedList;
