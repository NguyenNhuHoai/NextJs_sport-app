"use client";
import Image from "next/image";
import React from "react";
import MenuComponent from "./MenuComponent";
import Link from "next/link";
import SearchComponent from "./SearchComponent";
import { ShoppingCart } from "lucide-react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import logo from "../../public/logo.svg";

import MenuComonentMobile from "./MenuComonentMobile";
import { cn } from "../lib/utils";
const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex lg:justify-between justify-evenly items-center pl-6 pr-16 bg-orange-500 fixed z-50 left-0 right-0 top-0 h-24">
      <Link href={"/home"} className="lg:order-1 order-2">
        <Image src={logo} width={200} height={100} alt="logo" />
      </Link>

      <div className="lg:block hidden lg:order-2">
        <MenuComponent />
      </div>
      <div className="lg:block hidden lg:order-3  p-2 rounded-md">
        <Link
          className="lg:text-xl hover:text-red-700 p-3 rounded-md text-lg text-red-600 font-bold"
          href={"/sale"}
        >
          SALE
        </Link>
      </div>
      <div className="lg:order-4 order-3">
        <Link
          className="lg:text-xl text-lg bg-orange-400 p-2 rounded-lg text-white hover:text-zinc-500"
          href={"/introduce"}
        >
          Về chúng tôi
        </Link>
      </div>
      <div className="lg:hidden order-1">
        <MenuComonentMobile />
      </div>
      <div className=" md:flex hidden justify-between items-center gap-3 lg:order-5 order-4">
        <div className=" flex bg-orange-400 rounded-full p-3 hover:text-zinc-500 text-white">
          <SearchComponent />
        </div>
        <div className="bg-orange-400 text-white hover:text-zinc-500 rounded-full p-3">
          <Link href={"/cart"}>
            <ShoppingCart />
          </Link>
        </div>
      </div>
      <div className="lg:order-6 order-5">
        {isSignedIn ? (
          <UserButton
            appearance={{
              elements: {
                button: {
                  fontSize: "16px",
                },
                avatarBox: {
                  width: "40px",
                  height: "40px",
                },
                userButtonOuterIdentifier: {
                  fontSize: "18px",
                },
              },
            }}
            showName
          />
        ) : (
          <SignInButton className="lg:text-xl text-lg bg-orange-400 p-2 rounded-lg text-white hover:bg-orange-400 hover:text-zinc-500" />
        )}
      </div>
    </div>
  );
};

export default Header;
