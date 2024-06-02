import Image from "next/image";
import Link from "next/link";
import imageNotFound from "../../public/image/notFound/notFound.png";

export default function NotFound() {
  return (
    <div className="my-24 ">
      <div className="flex flex-col justify-center items-center w-full">
        <Image src={imageNotFound} alt="not-found" width={100} height={100} />
        <h2>Không tìm thấy trang</h2>
        <p>
          Không tìm thấy trang này! Hãy truy cập FireFly.website để tiếp tục mua
          sắm
        </p>
        <Link href="/home">Quay trở lại trang mua sắm</Link>
      </div>
    </div>
  );
}
