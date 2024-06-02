"use server";
import { PrismaClient } from "@prisma/client";
import { UTApi } from "uploadthing/server";

export async function addProduct(productData) {
  const prisma = new PrismaClient();

  const { images } = productData;

  try {
    const newProduct = await prisma.production.create({
      data: {
        name: productData.name,
        price: productData.price,
        numberStar: productData.numberStar,
        numberProduct: productData.numberProduct,
        status: productData.status,
        genners: productData.genners,
        brandId: productData.brandId,
        size: { set: productData.size },
        color: { set: productData.color },
        categoryId: productData.categoryId,
        saleId: productData.saleId,
        descriptions: productData.descriptions,
        productNew: productData.productNew,
      },
      include: {
        category: true,
        brand: true,
        sale: true,
      },
    });
    await Promise.all(
      images.map(async (image) => {
        await prisma.image.create({
          data: {
            name: image.name,
            path: image.path,
            productId: newProduct.id,
          },
        });
      })
    );

    return newProduct;
  } catch (error) {
    throw new Error(`Error creating product: ${error}`);
  }
}

export async function deleteProduct(id) {
  const prisma = new PrismaClient();
  const utapi = new UTApi();
  console.log("utapi", utapi);
  try {
    const product = await prisma.production.findFirst({
      where: { id: id },
      include: {
        comments: true,
        images: true,
        sale: true,
        category: true,
        brand: true,
      },
    });

    if (!product) {
      throw new Error("Sản phẩm không tồn tại");
    }
    if (product.comments) {
      await prisma?.comment.deleteMany({
        where: {
          productionId: id,
        },
      });
    }

    if (product.images) {
      await prisma?.image.deleteMany({
        where: {
          productId: id,
        },
      });
    }

    await prisma.production.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error("Lỗi xóa sản phẩm");
  } finally {
    await prisma.$disconnect();
  }
}

export async function updateProduct(data) {
  const prisma = new PrismaClient();
  try {
    const {
      id,
      brandId,
      categoryId,
      color,
      genners,
      images,
      name,
      numberProduct,
      numberStart,
      price,
      saleId,
      size,
      status,
      descriptions,
      productNew,
    } = data;
    const productId = await prisma.production.findFirst({
      where: {
        id: id,
      },
    });
    if (!productId) {
      throw new Error("Sản phẩm không tồn tại");
    }
    const newProduct = await prisma.production.update({
      where: {
        id: id,
      },
      data: {
        brandId: brandId,
        categoryId: categoryId,
        color: color,
        genners: genners,
        name: name,
        numberProduct: numberProduct,
        numberStar: numberStart,
        price: price,
        saleId: saleId,
        size: size,
        status: status,
        descriptions: descriptions,
        productNew: productNew,
      },
      include: {
        images: true,
        brand: true,
        category: true,
        sale: true,
        comments: true,
      },
    });
    await prisma.image.deleteMany({
      where: {
        productId: id,
      },
    });
    await Promise.all(
      images.map(async (image) => {
        await prisma.image.create({
          data: {
            name: image.name,
            path: image.path,
            productId: newProduct.id,
          },
        });
      })
    );
    console.log("Cập nhật thành công");
  } catch (error) {
    console.log(error);
  }
}
