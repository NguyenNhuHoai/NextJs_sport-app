"use client";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useRef } from "react";
import logo from "../../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menus = [
  {
    id: 1,
    name: "Bảng danh mục",
    path: "/dashboard/category",
  },
  {
    id: 2,
    name: "Bảng thương hiệu",
    path: "/dashboard/brand",
  },
  {
    id: 3,
    name: "Bảng giảm giá",
    path: "/dashboard/sale",
  },
  {
    id: 4,
    name: "Bảng sản phẩm",
    path: "/dashboard/product",
  },
  {
    id: 5,
    name: "Bảng User",
    path: "/dashboard/users",
  },
];

const SideMenu = () => {
  const pathName = usePathname();
  console.log("pathName", pathName);
  useEffect(() => {
    // console.log(path);
  }, [pathName]);
  return (
    <div class="flex w-full h-full flex-col justify-between border-e bg-white relative">
      <div class="px-4 py-1">
        <Image src={logo} alt="logo" />
        <ul class="mt-6 space-y-1">
          {Menus.map((menu, index) => (
            <li>
              <Link
                href={menu.path}
                className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                  pathName === menu.path && "bg-slate-100"
                }`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="fixed bottom-0 w-72 left-0  inset-x-0 border-t border-gray-100 py-4">
        <UserButton
          appearance={{
            elements: {
              button: {
                fontSize: "16px",
              },
              avatarBox: {
                width: "30px",
                height: "30px",
              },
              userButtonOuterIdentifier: {
                fontSize: "18px",
              },
            },
          }}
          showName
        />
      </div>
    </div>
  );
};

export default SideMenu;
