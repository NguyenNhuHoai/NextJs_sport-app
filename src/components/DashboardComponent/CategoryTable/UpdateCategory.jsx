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
import { updateCategory } from "./Actions";
import { toast } from "../../ui/use-toast";
import { title } from "process";
const UpdateCategory = ({ refreshData, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, status, id } = data;
  const [formData, setFormData] = useState({
    id: id,
    name: name,
    status: status,
  });
  const handleSaveUpdeteCategory = (event) => {
    event.preventDefault();
    updateCategory(formData);
    refreshData();
    setIsOpen(false);
    toast({
      title: "Cập nhật danh mục sản phẩm thành công",
    });
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
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
            Cập nhật category
          </DialogTitle>
          <DialogDescription className={cn("text-lg")}>
            Vui lòng điền thông tin cập nhật ở bên dưới
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSaveUpdeteCategory} class="space-y-4">
          <div>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-lg"
              placeholder=" Tên danh mục sản phẩm"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center space-x-2">
              <Select
                value={formData.status}
                name="status"
                onValueChange={(value) =>
                  setFormData({ ...formData, status: value })
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

export default UpdateCategory;
