"use client";
import React, { useEffect, useState } from "react";
import { Sheet, SheetTrigger } from "../../ui/sheet";
import { cn } from "../../../lib/utils";
import CreateCategory from "./CreateCategory";
import UpdateCategory from "./UpdateCategory";
import DeleteCategory from "./DeleteCategory";
import { deleteCategory } from "./Actions";
import { formatDay } from "../../../lib/helpFnc";
import { toast } from "../../ui/use-toast";
import PaginationComponent from "../../PaginationComponent/PaginationComponent";
import { getDataCategoryPagination } from "../../../lib/getData";

const CategoryTable = () => {
  const [dataCategory, setDataCategory] = useState(null);
  const [totalCategory, setTotalCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const categoryPerPage = 5;

  const fetchData = async (page) => {
    const { dataCategory, totalCategory } = await getDataCategoryPagination(
      page,
      categoryPerPage
    );
    setDataCategory(dataCategory);
    setTotalCategory(totalCategory);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleDeletecategory = (id) => {
    deleteCategory(id);
    fetchData();
    toast({
      title: "Xóa thành công danh mục sản phẩm",
    });
  };
  return (
    <div>
      <div className="flex justify-between items-center gap-3 px-4">
        <h2 className="text-center text-2xl font-bold py-8">
          Bảng danh mục sản phẩm
        </h2>
        <Sheet>
          <SheetTrigger
            className={cn(
              "bg-orange-400 px-2 py-4 rounded-2xl hover:bg-orange-200 text-zinc-50 hover:text-zinc-950"
            )}
          >
            Thêm sản danh mục sản phẩm
          </SheetTrigger>
          <CreateCategory refreshData={fetchData} />
        </Sheet>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead class="ltr:text-left rtl:text-right">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Tên danh mục sản phẩm
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Trạng thái danh mục sản phẩm
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
            {dataCategory?.map((data, index) => (
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
                  <DeleteCategory
                    onClick={() => handleDeletecategory(data.id)}
                  />
                </td>
                <td class="whitespace-nowrap px-4 py-2">
                  <UpdateCategory data={data} refreshData={fetchData} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalCategory}
        perPage={categoryPerPage}
      />
    </div>
  );
};

export default CategoryTable;
