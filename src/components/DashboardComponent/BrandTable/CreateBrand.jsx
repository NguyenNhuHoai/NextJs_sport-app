"use client";
import React, { useState } from "react";
import { SheetContent, SheetHeader, SheetTitle } from "../../ui/sheet";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { addBrand } from "./Actions";
import { cn } from "../../../lib/utils";
import { toast } from "../../ui/use-toast";


const CreateBrand = ({ refreshData }) => {
  const [data, setDataBrand] = useState({
    name: "",
    status: "true",
  });

  const handleOnchangeInput = (event) => {
    const { name, value } = event.target;
    setDataBrand({
      ...data,
      [name]: value,
    });
  };

  const handleSaveDataBrand = (event) => {
    event.preventDefault();
    addBrand(data);
    refreshData();
    setDataBrand({
      name: "",
      status: "true",
    });
    toast({
      title: "Tạo thương hiệu thành công",
    });
  };

  return (
    <SheetContent side={"top"} className={cn("h-screen")}>
      <SheetHeader>
        <SheetTitle className={cn("text-2xl py-4")}>
          Thêm thương hiệu sản phẩm
        </SheetTitle>
      </SheetHeader>
      <div>
        <section class="bg-gray-100">
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <form onSubmit={handleSaveDataBrand} class="space-y-4">
              <div>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-lg"
                  placeholder="Tên danh mục sản phẩm"
                  type="text"
                  id="name"
                  name="name"
                  value={data.name} // Gán giá trị từ state data cho input
                  onChange={handleOnchangeInput}
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="terms"
                    className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Hiển thị danh mục
                  </label>
                  <Select
                    name="status"
                    value={data.status} // Gán giá trị từ state data cho select
                    onValueChange={(value) =>
                      setDataBrand({ ...data, status: value })
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Trạng thái danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="true">True</SelectItem>
                        <SelectItem value="false">False</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </SheetContent>
  );
};

export default CreateBrand;
