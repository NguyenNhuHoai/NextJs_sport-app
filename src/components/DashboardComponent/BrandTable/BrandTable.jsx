"use client";
import React, { useEffect, useState } from "react";
import { Sheet, SheetTrigger } from "../../ui/sheet";
import { cn } from "../../../lib/utils";
import CreateBrand from "./CreateBrand";
import UpdateBrand from "./UpdateBrand";
import DeleteBrand from "./DeleteBrand";
import { getDataBrandPagination } from "../../../lib/getData";
import { deleteBrand } from "./Actions";
import { formatDay } from "../../../lib/helpFnc";
import { toast } from "../../ui/use-toast";
import PaginationComponent from "../../PaginationComponent/PaginationComponent";

const BrandTable = () => {
  const [dataBrand, setDataBrand] = useState(null);
  const [totalBrand, setTotalBrand] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const brandPerPage = 5;
  
  const fetchData = async (page) => {
    const { dataBrand, totalBrand } = await getDataBrandPagination(
      page,
      brandPerPage
    );
    setDataBrand(dataBrand);
    setTotalBrand(totalBrand);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleDeleteBrand = (id) => {
    deleteBrand(id);
    fetchData();
    toast({
      title: "Xóa thương hiệu thành công",
    });
  };
  return (
    <div>
      <div className="flex justify-between items-center gap-3 px-4">
        <h2 className="text-center text-2xl font-bold py-8">
          Bảng thương hiệu sản phẩm
        </h2>
        <Sheet>
          <SheetTrigger
            className={cn(
              "bg-orange-400 px-2 py-4 rounded-2xl hover:bg-orange-200 text-zinc-50 hover:text-zinc-950"
            )}
          >
            Thêm thương hiệu sản phẩm
          </SheetTrigger>
          <CreateBrand refreshData={fetchData} />
        </Sheet>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead class="ltr:text-left rtl:text-right">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Tên thương hiệu sản phẩm
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Trạng thái thương hiệu sản phẩm
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Ngày tạo
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Ngày cập nhật
              </th>
              <th class="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {dataBrand?.map((data, index) => (
              <tr key={index}>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  {data.name}
                </td>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  {data.status}
                </td>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  {formatDay(data.createdAt.toString())}
                </td>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  {formatDay(data.updatedAt.toString())}
                </td>
                <td class="whitespace-nowrap px-4 py-2">
                  <DeleteBrand onClick={() => handleDeleteBrand(data.id)} />
                </td>
                <td class="whitespace-nowrap px-4 py-2">
                  <UpdateBrand data={data} refreshData={fetchData} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalBrand}
        perPage={brandPerPage}
      />
    </div>
  );
};

export default BrandTable;
