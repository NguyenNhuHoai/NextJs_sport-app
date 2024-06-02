"use client";
import React, { useState } from "react";
import { SheetContent, SheetHeader, SheetTitle } from "../../ui/sheet";

import { cn } from "../../../lib/utils";
import { addSale } from "./Actions";
import { toast } from "../../ui/use-toast";
import { title } from "process";
const CreateSale = ({ refreshData }) => {
  const [data, setDataSale] = useState({
    percent: "",
  });

  const handleOnchangeInput = (event) => {
    const { name, value } = event.target;
    if (!/^\d+$/.test(value) && value !== "") return;
    setDataSale({
      ...data,
      [name]: Number(value),
    });
  };

  const handleSaveDataSale = (event) => {
    event.preventDefault();
    addSale(data);
    refreshData();
    setDataSale({
      percent: "",
    });
    toast({
      title: "Tạo thành công mã giảm giá.",
    });
  };

  return (
    <SheetContent side={"top"} className={cn("h-screen")}>
      <SheetHeader>
        <SheetTitle className={cn("text-2xl py-4")}>
          Thêm giảm giá cho sản phẩm
        </SheetTitle>
      </SheetHeader>
      <div>
        <section class="bg-gray-100">
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <form onSubmit={handleSaveDataSale} class="space-y-4">
              <div className="flex justify-start items-center gap-3">
                <label>Nhập giảm giá</label>
                <input
                  class="w-96 rounded-lg border-gray-200 p-3 text-lg"
                  placeholder="Giảm giá"
                  type="text"
                  id="percent"
                  name="percent"
                  value={data.percent}
                  onChange={handleOnchangeInput}
                />
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

export default CreateSale;
