import Image from "next/image";
import banner from "../../public/image/banner/banner9.png";
import logo from "../../public/logo.svg";
import DialogCustom from '../components/DialogCustom'

export default function HomePage() {
  return (
    <div className="bg-orange-500 w-screen h-screen">
      <div className=" flex justify-center items-center bg-zinc-950 bg-opacity-20 shadow-lg">
        <div className="">
          <Image src={logo} alt="logo" width={200} height={200} />
        </div>
      </div>
      <div className=" flex justify-center items-center flex-col my-5">
        <div className="w-[90%] m-auto grid grid-cols-5">
          <div className="col-span-3 flex flex-col justify-start items-start gap-3">
            <h1 className="text-9xl font-bold uppercase text-zinc-50 font-serif tracking-wider">
              Shop FIREFLY
            </h1>
            <p className="text-3xl text-zinc-50 italic text-justify">
              "Nếu bạn là người đam mê thể thao. Không thể thiếu các phụ kiện
              phục trong quá trình ấy. Hãy đến với chúng tôi, nới mà các bạn có
              thể thoải mái tự do lựa chọn phu kiện yêu thích."
            </p>
            < DialogCustom/>
          </div>
          <div className="col-span-2 flex justify-end items-center">
            <Image
              src={banner}
              alt="banner"
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
