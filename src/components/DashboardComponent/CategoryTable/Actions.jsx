"use server";
import { PrismaClient } from "@prisma/client";
export async function addCategory(formData) {
  const prisma = new PrismaClient();
  try {
    const newCategory = await prisma.category.create({
      data: {
        name: formData.name,
        status: formData.status,
      },
    });
    console.log("newCategory", newCategory);
  } catch (error) {
    console.log("Đã xảy ra lỗi trong quá trình thêm sản phẩm");
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteCategory(id) {
  const prisma = new PrismaClient();
  try {
    const category = await prisma.category.findUnique({
      where: {
        id: id,
      },
      include: {
        productions: true,
      },
    });

    if (!category) {
      throw new Error("Danh mục không tồn tại");
    }

    await Promise.all(
      category.productions.flatMap(async (product) => {
        return await prisma.image.deleteMany({
          where: {
            productId: product.id,
          },
        });
      })
    );

    await prisma.production.deleteMany({
      where: {
        categoryId: id,
      },
    });

    await prisma.category.delete({
      where: {
        id: id,
      },
    });

    return category;
  } catch (error) {
    throw new Error(error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function updateCategory(data) {
  const prisma = new PrismaClient();
  try {
    const { id, name, status } = data;
    const categoryId = await prisma.category.findFirst({
      where: {
        id: id,
      },
    });
    if (!categoryId) {
      throw new Error("Danh mục không tồn tại");
    }
    await prisma.category.update({
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
