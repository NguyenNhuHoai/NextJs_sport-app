"use client";
import React, { useEffect, useState } from "react";
import { Sheet, SheetTrigger } from "../../ui/sheet";
import { cn } from "../../../lib/utils";
import CreateSale from "./CreateSale";
import { formatDay } from "../../../lib/helpFnc";
import { getDataSalePagination } from "../../../lib/getData";
import { deleteSale } from "./Actions";
import DeleteSale from "./DeleteSale";
import { toast } from "../../ui/use-toast";
import UpdateSale from "./UpdateSale";
import PaginationComponent from "../../PaginationComponent/PaginationComponent";

const SaleTable = () => {
  const [dataSale, setDataSale] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [toalSale, setTotalSale] = useState(0);
  const salePerPage = 5;

  const fetchData = async (page) => {
    const { dataSale, toalSale } = await getDataSalePagination(
      page,
      salePerPage
    );
    setDataSale(dataSale);
    setTotalSale(toalSale);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleDeleteSale = (id) => {
    deleteSale(id);
    fetchData();
    toast({
      title: "Xóa thành công mã giảm giá.",
    });
  };
  return (
    <div className="relative">
      <div className="flex justify-between items-center gap-3 px-4">
        <h2 className="text-center text-2xl font-bold py-8">
          Bảng quản lý giảm giá
        </h2>
        <Sheet>
          <SheetTrigger
            className={cn(
              "bg-orange-400 px-2 py-4 rounded-2xl hover:bg-orange-200 text-zinc-50 hover:text-zinc-950"
            )}
          >
            Thêm giảm giá sản phẩm
          </SheetTrigger>
          <CreateSale refreshData={fetchData} />
        </Sheet>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead class="ltr:text-left rtl:text-right">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Giảm giá
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
            {dataSale?.map((data, index) => (
              <tr key={index}>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  {data.percent}%
                </td>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  {formatDay(data.createdAt.toString())}
                </td>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  {formatDay(data.updatedAt.toString())}
                </td>
                <td class="whitespace-nowrap px-4 py-2">
                  <UpdateSale data={data} refreshData={fetchData} />
                </td>
                <td class="whitespace-nowrap px-4 py-2">
                  <DeleteSale onClick={() => handleDeleteSale(data.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationComponent
        currentPage={currentPage}
        perPage={salePerPage}
        setCurrentPage={setCurrentPage}
        totalPage={toalSale}
      />
    </div>
  );
};

export default SaleTable;
