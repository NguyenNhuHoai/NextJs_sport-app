import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../components/ui/menubar";
import { cn } from "../lib/utils";
import UseCustomHook from "../lib/useCustomHook/UseCustomHook";
import Link from "next/link";
const menuData = [
  { id: 1, name: "Giày", path: "/" },
  { id: 2, name: "Quần áo", path: "/" },
  { id: 3, name: "Môn thể thao", path: "/" },
  {
    id: 4,
    name: "Thương hiệu",
    path: "/",
    navMenu: [
      {
        id: 1,
        name: "Nike",
        path: "/",
      },
      {
        id: 2,
        name: "Jodan",
        path: "/",
        navMenu: [
          {
            id: 1,
            name: "Jodan1",
            path: "/",
          },
        ],
      },
    ],
  },
];

const RenderSubMenu = ({ data }) => {
  return data?.map((item, index) => (
    <MenubarSub key={index}>
      <MenubarSubTrigger>{item.name}</MenubarSubTrigger>
      <MenubarSubContent>
        {item.navMenu ? (
          <RenderSubMenu data={item.navMenu} />
        ) : (
          <MenubarItem>{item.name}</MenubarItem>
        )}
      </MenubarSubContent>
    </MenubarSub>
  ));
};

const Rendermenu = ({ data }) => {
  return (
    <Menubar className={cn("border-none bg-orange-400 h-full w-full")}>
      {data.map((menuItem, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger>{menuItem.name}</MenubarTrigger>
          {menuItem.navMenu && (
            <MenubarContent>
              <RenderSubMenu data={menuItem.navMenu} />
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

const MenuComponent = () => {
  const { dataBrand, dataCategory } = UseCustomHook();
  return (
    <Menubar className={cn("border-none bg-orange-400 h-full w-full")}>
      <MenubarMenu>
        <MenubarTrigger>Thương hiệu</MenubarTrigger>
        <MenubarContent>
          {dataBrand?.dataBrand.map((brand, index) => (
            <Link href={`/brand/${brand.id}`}>
              <MenubarItem key={index}>{brand.name}</MenubarItem>
            </Link>
          ))}
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Danh mục sản phẩm</MenubarTrigger>
        <MenubarContent>
          {dataCategory?.dataCategory.map((cate, index) => (
            <Link href={`/category/${cate.id}`}>
              <MenubarItem key={index}>{cate.name}</MenubarItem>
            </Link>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenuComponent;
