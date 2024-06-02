import React, { useEffect, useState } from "react";
import {
  getDataBrand,
  getDataCategory,
  getDataNewProduct,
  getDataProductSale,
  getDataSale,
  getDataToCategory,
} from "../getData";
const UseCustomHook = () => {
  const [dataNewProduct, setDataNewProduct] = useState(null);
  const [dataProductShoeSocer, setDataProductShoeSocer] = useState(null);
  const [dataProductSale, setDataProductSale] = useState(null);
  const [dataProductClothes, setDataProductClothes] = useState(null);
  const [dataBrand, setDataBrand] = useState(null);
  const [dataCategory, setDataCategory] = useState(null);
  const [dataTableSale, setDataTableSale] = useState(null);
  async function fetchData() {
    const newDataProduct = await getDataNewProduct(12);
    setDataNewProduct(newDataProduct?.product);
    const productToCategory = await getDataToCategory("Giày đá bóng", 12);
    setDataProductShoeSocer(productToCategory?.product);
    const productSale = await getDataProductSale(12);
    setDataProductSale(productSale?.product);
    const productToClothes = await getDataToCategory("Quần áo", 12);
    setDataProductClothes(productToClothes?.product);
    const brandData = await getDataBrand();
    setDataBrand(brandData);
    const categoryData = await getDataCategory();
    setDataCategory(categoryData);
    const { dataSale } = await getDataSale();
    setDataTableSale(dataSale);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return {
    dataNewProduct,
    dataProductShoeSocer,
    dataProductSale,
    dataProductClothes,
    dataBrand,
    dataCategory,
    dataTableSale,
  };
};

export default UseCustomHook;
