"use server";
import { PrismaClient } from "@prisma/client";
export async function addBrand(formData) {
  const prisma = new PrismaClient();
  try {
    const newBrand = await prisma.brand.create({
      data: {
        name: formData.name,
        status: formData.status,
      },
    });
  } catch (error) {
    console.log("Đã xảy ra lỗi trong quá trình thêm sản phẩm");
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteBrand(id) {
  const prisma = new PrismaClient();
  try {
    const brand = await prisma.brand.findFirst({
      where: {
        id: id,
      },
      include: {
        productions: true,
      },
    });
    if (!brand) {
      throw new Error("Danh mục không tồn tại");
    }
    await Promise.all(
      brand.productions.flatMap(async (product) => {
        return await prisma.image.deleteMany({
          where: {
            productId: product.id,
          },
        });
      })
    );
    await prisma.production.deleteMany({
      where: {
        brandId: id,
      },
    });
    await prisma.brand.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateBrand(data) {
  const prisma = new PrismaClient();
  try {
    const { id, name, status } = data;
    const brandId = await prisma.brand.findFirst({
      where: {
        id: id,
      },
    });
    if (!brandId) {
      throw new Error("Danh mục không tồn tại");
    }
    await prisma.brand.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        status: status,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
}
