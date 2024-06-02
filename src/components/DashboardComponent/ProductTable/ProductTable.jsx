"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";
import CreateProduct from "./CreateProduct";
import { Sheet, SheetTrigger } from "../../ui/sheet";
import { getDataProduct } from "../../../lib/getData";
import { formatDay, formatString } from "../../../lib/helpFnc";
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";
import { deleteProduct } from "./Actions";
import PaginationComponent from "../../PaginationComponent/PaginationComponent";
import { toast } from "../../ui/use-toast";

const ProductTable = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const fetchData = async (page) => {
    try {
      const { products, totalProducts } = await getDataProduct(
        page,
        productsPerPage
      );
      setDataProducts(products);
      setTotalProducts(totalProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    fetchData(currentPage);
    toast({
      title: "Xóa sản phẩm thành công",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-3 px-4">
        <h2 className="text-center text-2xl font-bold py-8">
          Bảng danh sách sản phẩm
        </h2>
        <Sheet>
          <SheetTrigger
            className={cn(
              "bg-orange-400 px-2 py-4 rounded-2xl hover:bg-orange-200 text-zinc-50 hover:text-zinc-950"
            )}
          >
            Thêm sản danh mục sản phẩm
          </SheetTrigger>
          <CreateProduct refresh={fetchData} />
        </Sheet>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Tên sản phẩm
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Giá sản phẩm
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Sản phẩm mới
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Thương hiệu sản phẩm
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Loại sản phẩm
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Trạng thái
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Số lương tồn kho
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Kích cỡ
              </th>{" "}
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Màu sắc
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Mô tả sản phẩm
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Mã giảm giá
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Hình ảnh sản phẩm
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Số sao đánh giá
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Ngày tạo
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Ngày cập nhật
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {dataProducts.map((data) => (
              <tr key={data.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900  text-center">
                  <p className="text-wrap"> {formatString(data.name)}</p>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {data.price}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {data.productNew}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {data.brand.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {data.category.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {data.status}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {data.numberProduct}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {data.size}
                </td>
                <td className=" px-4 py-2 text-gray-700 flex justify-between items-center">
                  {data.color.map((cl, index) => (
                    <div
                      className={`w-3 h-3`}
                      style={{ backgroundColor: `${cl}` }}
                    ></div>
                  ))}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  <p className="text-wrap">
                    {" "}
                    {formatString(data.descriptions)}
                  </p>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {data.sale.percent}%
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  <div className="flex justify-between items-center flex-wrap">
                    {data.images?.map((image) => (
                      <img
                        key={image.id}
                        src={image.path}
                        alt="Product"
                        width={50}
                        height={50}
                      />
                    ))}
                  </div>
                </td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {data.numberStar}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {formatDay(data.createdAt)}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {formatDay(data.updatedAt)}
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <DeleteProduct onClick={() => handleDeleteProduct(data.id)} />
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <UpdateProduct data={data} refreshData={fetchData} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationComponent
        totalPage={totalProducts}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        perPage={productsPerPage}
      />
    </div>
  );
};

export default ProductTable;
