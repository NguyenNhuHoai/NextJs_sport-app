"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { cn } from "../../../lib/utils";
import { updateBrand, updateSale } from "./Actions";
import { toast } from "../../ui/use-toast";

const UpdateSale = ({ refreshData, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { percent, id } = data;
  const [formData, setFormData] = useState({
    id: id,
    percent: percent,
  });
  const handleSaveUpdeteBrand = (event) => {
    event.preventDefault();
    updateSale(formData);
    refreshData();
    setIsOpen(false);
    toast("Cập nhật giảm giá thành công");
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: parseInt(value),
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Chỉnh sửa</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className={cn("text-2xl font-bold")}>
            Cập nhật thương hiệu
          </DialogTitle>
          <DialogDescription className={cn("text-lg")}>
            Vui lòng điền thông tin cập nhật ở bên dưới
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSaveUpdeteBrand} class="space-y-4">
          <div>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-lg"
              placeholder=" Tên danh mục sản phẩm"
              type="text"
              id="name"
              value={formData.percent}
              onChange={handleChangeInput}
              name="percent"
            />
          </div>

          <div class="mt-4">
            <Button
              variant="outline"
              type="submit"
              class="inline-block w-full rounded-lg px-5 py-3 font-medium text-zinc-950 sm:w-auto border-none bg-orange-500 hover:bg-orange-300 hover:text-zinc-50"
            >
              Lưu
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateSale;
