"use client";
import React, { useEffect, useState } from "react";
import ListProduct from "../ListProduct/ListProduct";
import SelectedList from "../SelectedList/SelectedList";
import ContainerCustom from "../ContainerCustom";
import { Breadcrumb } from "../ui/breadcrumb";
import { cn } from "../../lib/utils";
import { getDataProductSale } from "../../lib/getData";
import UseCustomHook from "../../lib/useCustomHook/UseCustomHook";
import { Button } from "../ui/button";

const Sale = () => {
  const [dataProductSale, setDataProductSale] = useState(null);
  const [total, setTotal] = useState(null);
  const [takeProduct, setTakeProduct] = useState(24);
  const { dataBrand, dataCategory, dataTableSale } = UseCustomHook();
  const [selectedIds, setSelectedIds] = useState({
    idBrand: "",
    idCategory: "",
    idSale: "",
  });
  async function fetchDataProductSale(
    takeProduct,
    idBrand,
    idCategory,
    idSale
  ) {
    const { product, totalProducts } = await getDataProductSale(
      takeProduct,
      idBrand,
      idCategory,
      idSale
    );
    setDataProductSale(product);
    setTotal(totalProducts);
  }

  useEffect(() => {
    fetchDataProductSale(
      takeProduct,
      selectedIds.idBrand,
      selectedIds.idCategory,
      selectedIds.idSale
    );
  }, [
    takeProduct,
    selectedIds.idBrand,
    selectedIds.idCategory,
    selectedIds.idSale,
  ]);

  const handleShowMore = () => {
    setTakeProduct(takeProduct + 6);
  };

  const handleHide = () => {
    setTakeProduct(24);
  };

  const handleGetId = (newId) => {
    setSelectedIds((prevIds) => ({ ...prevIds, ...newId }));
  };
  const handleClearSelect = () => {
    setSelectedIds({
      idBrand: "",
      idCategory: "",
      idSale: "",
    });
  };

  return (
    <div className="mt-24">
      <SelectedList
        isShowSelect
        dataBrand={dataBrand}
        dataCategory={dataCategory}
        dataTableSale={dataTableSale}
        handleGetId={handleGetId}
      />
      <Button
        className={cn(
          "absolute xl:top-[245px] lg:top-[247px] lg:right-[100px] md:right-[327px]  md:top-[300px]"
        )}
        onClick={handleClearSelect}
      >
        Làm mới tìm kiếm
      </Button>

      <ContainerCustom>
        <Breadcrumb />
        <ListProduct
          takeProduct={takeProduct}
          handleHide={handleHide}
          handleShowMore={handleShowMore}
          handleClearSelect={() => handleClearSelect}
          total={total}
          isShowButton={true}
          title={"Sale"}
          data={dataProductSale}
          className={cn("grid lg:grid-cols-6 lg:gap-5 grid-cols-2 gap-7 my-10")}
        />
      </ContainerCustom>
    </div>
  );
};

export default Sale;
