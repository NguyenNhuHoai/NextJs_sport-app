import { SignUp } from "@clerk/nextjs";
import banner from "../../../../public/image/banner/banner10.jpg";
import logo from "../../../../public/logo.svg";
import Image from "next/image";

export default function Page() {
  return (
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt=""
            src={banner}
            class="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        </section>
        <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 bg-orange-500 flex-col gap-5">
          <div class="max-w-xl lg:max-w-3xl">
            <SignUp path="/sign-up" />
          </div>
        </main>
      </div>
    </section>
  );
}
