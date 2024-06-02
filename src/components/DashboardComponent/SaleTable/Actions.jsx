"use server";
import { PrismaClient } from "@prisma/client";
export async function addSale(formData) {
  const prisma = new PrismaClient();
  try {
    const newSale = await prisma.sale.create({
      data: {
        percent: formData.percent,
      },
    });
    console.log("newSale", newSale);
  } catch (error) {
    console.log("Đã xảy ra lỗi trong quá trình thêm sản phẩm");
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteSale(id) {
  const prisma = new PrismaClient();
  try {
    const sale = await prisma.sale.findFirst({
      where: {
        id: id,
      },
      include: {
        productions: true,
      },
    });
    if (!sale) {
      throw new Error("Sale không tồn tại");
    }

    for (const production of sale.productions) {
      await prisma.image.deleteMany({
        where: {
          productId: production.id,
        },
      });
    }

    await prisma.production.deleteMany({
      where: {
        saleId: id,
      },
    });

    await prisma.sale.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateSale(data) {
  const prisma = new PrismaClient();
  try {
    const { id, percent } = data;
    const sale = await prisma.sale.findFirst({
      where: {
        id: id,
      },
    });
    if (!sale) {
      throw new Error("Danh mục không tồn tại");
    }
    await prisma.sale.update({
      where: {
        id: id,
      },
      data: {
        percent: percent,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
}
