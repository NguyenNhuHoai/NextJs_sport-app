"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function getDataCategory() {
  try {
    const dataCategory = await prisma.category.findMany();
    return { dataCategory };
  } catch (error) {
    console.log("Lỗi không lấy được data");
  }
}

export async function getDataProductToCategoryId(id, takeProduct = 24) {
  try {
    const dataCategory = await prisma.category.findMany({
      where: {
        id: id,
      },
    });
    if (!dataCategory) {
      return;
    }

    const product = await prisma.production.findMany({
      take: takeProduct,
      where: {
        categoryId: dataCategory[0].id,
      },
      include: {
        images: true,
        category: {
          select: { name: true },
        },
        brand: {
          select: { name: true },
        },
        sale: {
          select: { percent: true },
        },
      },
    });

    const totalProductCategory = await prisma.production.count({
      where: {
        categoryId: dataCategory[0].id,
      },
    });

    return { product, dataCategory, totalProductCategory };
  } catch (error) {
    console.log("Lỗi không lấy được data");
  }
}

export async function getDataCategoryPagination(page = 1, limit = 10) {
  const offset = (page - 1) * limit;
  try {
    const dataCategory = await prisma.category.findMany({
      skip: offset,
      take: limit,
    });
    const totalCategory = await prisma.category.count();
    return { dataCategory, totalCategory };
  } catch (error) {
    console.log("Lỗi không lấy được data");
  }
}

export async function getDataBrand() {
  try {
    const dataBrand = await prisma.brand.findMany();
    return { dataBrand };
  } catch (error) {
    console.log("Lỗi không lấy được data");
  }
}

export async function getDataBrandPagination(page = 1, limit = 5) {
  const offset = (page - 1) * limit;
  try {
    const dataBrand = await prisma.brand.findMany({
      skip: offset,
      take: limit,
    });
    const totalBrand = await prisma.brand.count();
    return { dataBrand, totalBrand };
  } catch (error) {
    console.log("Lỗi không lấy được data");
  }
}

export async function getDataProductToBrandId(id, takeProduct = 24) {
  try {
    const dataBrand = await prisma.brand.findMany({
      where: {
        id: id,
      },
    });
    if (!dataBrand) {
      return;
    }

    const product = await prisma.production.findMany({
      take: takeProduct,
      where: {
        brandId: dataBrand[0].id,
      },
      include: {
        images: true,
        category: {
          select: { name: true },
        },
        brand: {
          select: { name: true },
        },
        sale: {
          select: { percent: true },
        },
      },
    });
    const totalProductToBrand = await prisma.production.count({
      where: {
        brandId: dataBrand[0].id,
      },
    });
    return { product, dataBrand, totalProductToBrand };
  } catch (error) {
    console.log("Lỗi không lấy được data");
  }
}
export async function getDataSale() {
  try {
    const dataSale = await prisma.sale.findMany();
    return { dataSale };
  } catch (error) {
    console.log("Lỗi không lấy được data");
  }
}

export async function getDataSalePagination(page = 1, limit = 5) {
  const offset = (page - 1) * limit;
  try {
    const dataSale = await prisma.sale.findMany({
      skip: offset,
      take: limit,
    });
    const toalSale = await prisma.sale.count();
    return { dataSale, toalSale };
  } catch (error) {
    console.log("Lỗi không lấy được data");
  }
}

export async function getDataProduct(page = 1, limit = 10) {
  const offset = (page - 1) * limit;
  try {
    const products = await prisma.production.findMany({
      skip: offset,
      take: limit,
      include: {
        images: true,
        category: {
          select: { name: true },
        },
        brand: {
          select: { name: true },
        },
        sale: {
          select: { percent: true },
        },
      },
    });
    const totalProducts = await prisma.production.count();
    return { products, totalProducts };
  } catch (error) {
    console.error("Error retrieving products with images:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getDataNewProduct(takeProduct) {
  try {
    const product = await prisma.production.findMany({
      take: takeProduct,
      where: {
        productNew: "true",
      },
      include: {
        images: true,
        category: {
          select: { name: true },
        },
        brand: {
          select: { name: true },
        },
        sale: {
          select: { percent: true },
        },
      },
    });
    return { product };
  } catch (error) {
    console.error("Error fetching new products:", error);
  }
}

export async function getDataToCategory(categoryName, takeProduct) {
  try {
    const categoryId = await prisma.category.findFirst({
      where: {
        name: categoryName,
      },
    });

    if (!categoryId) {
      return;
    }
    const product = await prisma.production.findMany({
      take: takeProduct,
      where: {
        categoryId: categoryId.id,
      },
      include: {
        images: true,
        category: {
          select: { name: true },
        },
        brand: {
          select: { name: true },
        },
        sale: {
          select: { percent: true },
        },
      },
    });

    return { product };
  } catch (error) {
    console.error("Error fetching new category:", error);
  }
}

export async function getDataProductSale(
  takeProduct,
  idBrand,
  idCategory,
  idSale
) {
  try {
    let whereConditions = {
      sale: {
        percent: {
          gt: 0,
        },
      },
    };

    if (idBrand) {
      whereConditions.brandId = idBrand;
    }

    if (idCategory) {
      whereConditions.categoryId = idCategory;
    }

    if (idSale) {
      whereConditions.saleId = idSale;
    }

    const products = await prisma.production.findMany({
      take: Math.min(takeProduct),
      where: whereConditions,
      include: {
        images: true,
        category: {
          select: { name: true },
        },
        brand: {
          select: { name: true },
        },
        sale: {
          select: { percent: true },
        },
      },
    });
    const totalProducts = await prisma.production.count({
      where: {
        sale: {
          percent: {
            gt: 0,
          },
        },
      },
    });
    return { product: products, totalProducts };
  } catch (error) {
    console.error("Error fetching new products:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getDataProductDetail(id) {
  try {
    const products = await prisma.production.findMany({
      where: {
        id: id,
      },
      include: {
        images: true,
        category: {
          select: { name: true },
        },
        brand: {
          select: { name: true },
        },
        sale: {
          select: { percent: true },
        },
      },
    });

    return { product: products };
  } catch (error) {
    console.error("Error fetching new products:", error);
  } finally {
    await prisma.$disconnect();
  }
}
