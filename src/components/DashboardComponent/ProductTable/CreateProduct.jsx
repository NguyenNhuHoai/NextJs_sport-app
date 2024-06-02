"use client";
import React, { useEffect, useState } from "react";
import { SheetContent, SheetHeader, SheetTitle } from "../../ui/sheet";
import { addProduct } from "./Actions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { ScrollArea } from "../../ui/scroll-area";
import { cn } from "../../../lib/utils";
import {
  getDataBrand,
  getDataCategory,
  getDataSale,
} from "../../../lib/getData";

import { useToast } from "../../ui/use-toast";
import { Delete } from "lucide-react";
import { UploadButton } from "../../../lib/uploadthing";
import { title } from "process";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { Button } from "../../ui/button";
const CreateProduct = ({ refresh }) => {
  const [dataCategory, setDataCategory] = useState(null);
  const [dataBrand, setDataBrand] = useState(null);
  const [dataSale, setDataSale] = useState(null);
  const [color, setColor] = useColor("rgb(86 30 203)");
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    numberStar: "",
    numberProduct: "",
    status: "",
    genners: "male",
    brandId: "",
    categoryId: "",
    saleId: "",
    comments: "",
    descriptions: "",
    size: [],
    color: [],
    images: [],
    productNew: "",
  });
  const { toast } = useToast();

  async function fetchData() {
    try {
      const { dataCategory } = await getDataCategory();
      const { dataBrand } = await getDataBrand();
      const { dataSale } = await getDataSale();
      setDataCategory(dataCategory);
      setDataBrand(dataBrand);
      setDataSale(dataSale);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Lấy value từ form
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

  // Lưu dữ liệu vào database
  const handleAddFormData = async (event) => {
    event.preventDefault();
    await addProduct(formData);
    refresh();
    toast({
      title: "Bạn đã thêm dữ liệu thành công",
    });
    setFormData({
      name: "",
      price: "",
      numberStar: "",
      numberProduct: "",
      status: "true",
      genners: "male",
      brandId: "",
      categoryId: "",
      saleId: "",
      comments: "",
      descriptions: "",
      size: [],
      color: [],
      images: [],
      productNew: "true",
    });
  };
  // Xóa ảnh trong quá trình thêm ảnh
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
    <SheetContent side={"top"} className={cn("h-screen")}>
      <SheetHeader>
        <SheetTitle className={cn("text-2xl py-4")}>
          Thêm sản danh mục sản phẩm
        </SheetTitle>
      </SheetHeader>
      <ScrollArea className="w-full h-full rounded-md border">
        <section class="bg-gray-100">
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <form onSubmit={handleAddFormData} className="space-y-4">
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

              <input
                className="w-full rounded-lg border-gray-200 p-3 text-lg"
                placeholder="Số sao sản phẩm"
                type="text"
                id="numberStar"
                name="numberStar"
                value={formData.numberStar.toString()}
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

              <div>
                <ColorPicker color={color} onChange={setColor} />
                <Button onClick={()=>{formData.color.push(color.hex)}}>Thêm màu</Button>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-lg"
                  placeholder="Màu sắc sản phẩm"
                  type="text"
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleOnchangeInput}
                  readOnly
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  className={cn("text-xl text-zinc-400")}
                  htmlFor="picture"
                >
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
              <div className="w-full">
                <Label
                  className={cn("text-xl text-zinc-400")}
                  htmlFor="picture"
                >
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
      </ScrollArea>
    </SheetContent>
  );
};

export default React.memo(CreateProduct);
