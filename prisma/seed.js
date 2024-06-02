const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function addCategories() {
  try {
    // Tạo nhiều bản ghi mới trong bảng Comment
    const newCategories = await prisma.production.createMany({
      data: [
        {
          name: "Giày Thể Thao Nam MWC NATT- 5704 Giày Thể Thao Nam Cao Cấp, Sneaker Nam Cổ Thấp Năng Động Cá Tính",
          price: 234,
          numberProduct: 12,
          numberStar: 5,
          status: true,
          productNew: true,
          genners: "male",
          brandId: "clwrd0uv8000frjctccs3x8ey",
          categoryId: "clwrcucgy0001rjctjgky9loy",
          saleId: "clwrd28oq000jrjctvr0ozvcu",
          size: ["40", " 41", " 42", " 43", " 44"],
          color:["đỏ"," vàng"," xanh"," cam"],
          
        },
      ],
    });
    console.log(
      "Số lượng bản ghi đã được thêm vào Comment:",
      newCategories.count
    );
  } catch (error) {
    console.error("Đã xảy ra lỗi khi thêm dữ liệu vào Comment:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Gọi hàm để thêm dữ liệu
addCategories();
