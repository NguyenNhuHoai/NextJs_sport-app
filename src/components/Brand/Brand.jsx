"use client";
import React, { useEffect, useState } from "react";
import ContainerCustom from "../ContainerCustom";

import Breadcrumb from "../Breadcrumb";

import ListProduct from "../ListProduct/ListProduct";
import { cn } from "../../lib/utils";
import SelectedList from "../SelectedList/SelectedList";
import { useParams } from "next/navigation";
import { getDataProductToBrandId } from "../../lib/getData";
const Brand = () => {
  const brandIdPrams = useParams().id;
  const [dataProductToBrand, setDataProductToBrand] = useState(null);
  const [dataBrand, setDataBrand] = useState(null);
  const [total, setTotal] = useState();
  const [takeProduct, setTakeProduct] = useState();
  async function fetchDataBrand(id, takeProduct) {
    const { product, dataBrand, totalProductToBrand } =
      await getDataProductToBrandId(id, takeProduct);
    setDataProductToBrand(product);
    setDataBrand(dataBrand[0]);
    setTotal(totalProductToBrand);
  }
  useEffect(() => {
    fetchDataBrand(brandIdPrams, takeProduct);
  }, [brandIdPrams, takeProduct]);
  const handleShowMore = () => {
    setTakeProduct(takeProduct + 6);
  };
  const handleHide = () => {
    setTakeProduct(24);
  };
  return (
    <div className="mt-24">
      <SelectedList />
      <ContainerCustom>
        <Breadcrumb />
        <ListProduct
          takeProduct={takeProduct}
          handleShowMore={handleShowMore}
          handleHide={handleHide}
          total={total}
          isShowButton={true}
          title={dataBrand?.name}
          data={dataProductToBrand}
          className={cn("grid lg:grid-cols-5 lg:gap-5 grid-cols-2 gap-7 my-10")}
        />
      </ContainerCustom>
    </div>
  );
};

export default Brand;
