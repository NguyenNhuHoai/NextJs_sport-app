"use client";
import React, { useEffect, useState } from "react";
import ContainerCustom from "../ContainerCustom";

import Breadcrumb from "../Breadcrumb";

import ListProduct from "../ListProduct/ListProduct";
import { cn } from "../../lib/utils";
import SelectedList from "../SelectedList/SelectedList";

import { useParams } from "next/navigation";
import { getDataProductToCategoryId } from "../../lib/getData";

const Category = () => {
  const idCategoryItem = useParams().id;
  const [dataCategory, setDataCategory] = useState(null);
  const [dataProduct, setDataProduct] = useState(null);
  const [total, setTotal] = useState(null);
  const [takeProduct, setTakeProduct] = useState();

  async function fetchDataCategory(id, takeProduct) {
    const { product, dataCategory, totalProductCategory } =
      await getDataProductToCategoryId(id, takeProduct);

    setDataCategory(dataCategory[0]);
    setDataProduct(product);
    setTotal(totalProductCategory);
  }

  useEffect(() => {
    fetchDataCategory(idCategoryItem, takeProduct);
  }, [idCategoryItem, takeProduct]);
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
          title={dataCategory?.name}
          data={dataProduct}
          className={cn("grid lg:grid-cols-6 lg:gap-5 grid-cols-2 gap-7 my-10")}
        />
      </ContainerCustom>
    </div>
  );
};

export default Category;
