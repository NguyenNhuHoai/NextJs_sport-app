"use client";
import React, { useEffect, useState } from "react";
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
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { cn } from "../../../lib/utils";
import { ScrollArea } from "../../ui/scroll-area";
import { useToast } from "../../ui/use-toast";
import {
  getDataBrand,
  getDataCategory,
  getDataSale,
} from "../../../lib/getData";
import { updateProduct } from "./Actions";

import { UploadButton } from "../../../lib/uploadthing";
import { Delete } from "lucide-react";

const UpdateProduct = ({ data }) => {
  const [dataCategory, setDataCategory] = useState(null);
  const [dataBrand, setDataBrand] = useState(null);
  const [dataSale, setDataSale] = useState(null);
  const { toast } = useToast();
  const {
    id,
    brandId,
    categoryId,
    color,
    genners,
    images,
    name,
    numberProduct,
    numberStart,
    price,
    saleId,
    size,
    status,
    descriptions,
    productNew,
  } = data;
  const [formData, setFormData] = useState({
    id: id,
    name: name,
    brandId: brandId,
    categoryId: categoryId,
    color: color,
    genners: genners,
    images: images,
    numberProduct: numberProduct,
    numberStart: numberStart,
    price: price,
    saleId: saleId,
    size: size,
    status: status,
    descriptions: descriptions,
    productNew: productNew,
  });

  async function fetchData() {
    const { dataCategory } = await getDataCategory();
    const { dataBrand } = await getDataBrand();
    const { dataSale } = await getDataSale();
    if ((dataCategory, dataBrand, dataSale)) {
      setDataCategory(dataCategory);
      setDataBrand(dataBrand);
      setDataSale(dataSale);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleOnchangeInput = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === "price" || name === "numberProduct" || name === "numberStar") {
      if (!value) {
        value = "";
      } else if (!/^\d+$/.test(value)) {
        return;
      } else {
        value = parseInt(value);
      }
    }

    if (name === "size" || name === "color") {
      value = value.split(",");
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateProduct = () => {
    updateProduct(formData);
    toast({ title: "Cập nhật sản phẩm thành công" });
    
  };

  const handleDeleteImage = (indexDelete) => {
    if (formData.images.length <= 0) return;

    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [
        ...prevFormData.images.filter((_, index) => index !== indexDelete),
      ],
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Cập nhật</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Cập nhật sản phẩm</DialogTitle>
          <DialogDescription>Cập nhật sản phẩm tại đây</DialogDescription>
        </DialogHeader>
        <ScrollArea className="w-full h-96">
          <form onSubmit={handleUpdateProduct} className="space-y-4">
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-lg"
              placeholder="Tên danh mục sản phẩm"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleOnchangeInput}
            />

            <input
              className="w-full rounded-lg border-gray-200 p-3 text-lg"
              placeholder="Giá sản phẩm"
              type="text"
              id="price"
              name="price"
              value={formData.price.toString()}
              onChange={handleOnchangeInput}
            />

            <input
              className="w-full rounded-lg border-gray-200 p-3 text-lg"
              placeholder="Số lượng sản phẩm"
              type="text"
              id="numberProduct"
              name="numberProduct"
              value={formData.numberProduct.toString()}
              onChange={handleOnchangeInput}
            />

            <div class="flex justify-between items-center flex-wrap">
              <div className="flex items-center space-x-2 gap-2">
                <Select
                  name="status"
                  value={formData.status}
                  onValueChange={(value) =>
                    setFormData({ ...formData, status: value })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Trạng thái sản phẩm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="true">True</SelectItem>
                      <SelectItem value="false">False</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2 gap-2">
                <Select
                  name="status"
                  value={formData.productNew}
                  onValueChange={(value) =>
                    setFormData({ ...formData, productNew: value })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sản phẩm mới" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="true">True</SelectItem>
                      <SelectItem value="false">False</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2 gap-2">
                <Select
                  name="genners"
                  value={formData.genners}
                  onValueChange={(value) =>
                    setFormData({ ...formData, genners: value })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Giới tính" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="male">Nam</SelectItem>
                      <SelectItem value="female">Nữ</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2 gap-2">
                <Select
                  name="category"
                  value={formData.categoryId}
                  onValueChange={(value) =>
                    setFormData({ ...formData, categoryId: value })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Loại sản phẩm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {dataCategory?.map((data, index) => (
                        <SelectItem key={index} value={data.id}>
                          {data.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2 gap-2">
                <Select
                  name="brand"
                  value={formData.brandId}
                  onValueChange={(value) =>
                    setFormData({ ...formData, brandId: value })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Thương hiệu" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {dataBrand?.map((data, index) => (
                        <SelectItem key={index} value={data.id}>
                          {data.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2 gap-2">
                <Select
                  name="sale"
                  value={formData.saleId}
                  onValueChange={(value) =>
                    setFormData({ ...formData, saleId: value })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Giảm giá" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {dataSale?.map((data, index) => (
                        <SelectItem key={index} value={data.id}>
                          {data.percent}%
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <input
              className="w-full rounded-lg border-gray-200 p-3 text-lg"
              placeholder="Kích thước sản phẩm"
              type="text"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleOnchangeInput}
            />

            <input
              className="w-full rounded-lg border-gray-200 p-3 text-lg"
              placeholder="Màu sắc sản phẩm"
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleOnchangeInput}
            />
            <div className="w-full">
              <Label className={cn("text-xl text-zinc-400")} htmlFor="picture">
                Mô tả hình ảnh
              </Label>
              <textarea
                name="descriptions"
                id="descriptions"
                value={formData.descriptions}
                onChange={handleOnchangeInput}
                className="w-full h-32"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className={cn("text-xl text-zinc-400")} htmlFor="picture">
                Hình ảnh (chọn tối đa 5 ảnh)
              </Label>
              <UploadButton
                appearance={{
                  button:
                    "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-orange-500 bg-none after:bg-orange-400",
                  container:
                    "w-max flex-row rounded-md border-cyan-300 bg-slate-800",
                  allowedContent:
                    "flex h-8 flex-col items-center justify-center px-2 text-white",
                }}
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  console.log(res);
                  setFormData((prev) => ({
                    ...prev,
                    images: [
                      ...prev.images,
                      { name: res[0].key, path: res[0].url },
                    ],
                  }));
                }}
                onUploadError={(error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
              <div>
                <div className="mt-4">
                  <h3>Hình ảnh đã chọn:</h3>
                  {formData?.images?.length > 0 && (
                    <ul className="grid grid-cols-5 gap-3 mt-3">
                      {formData?.images?.map((image, index) => (
                        <li key={index} className="mb-2 relative">
                          <Delete
                            onClick={() => handleDeleteImage(index)}
                            className={cn(
                              "absolute top-0 right-0 hover:text-zinc-500 cursor-pointer"
                            )}
                          />
                          <img
                            src={image.path}
                            alt="Selected"
                            width={200}
                            height={200}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;
