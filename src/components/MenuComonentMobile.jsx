import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

import { Menu } from "lucide-react";
import Image from "next/image";
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

const RecursiveAccordion = ({ data }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.name}</AccordionTrigger>
          {item.navMenu && (
            <AccordionContent>
              {item.navMenu && <RecursiveAccordion data={item.navMenu} />}
            </AccordionContent>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const MenuComonentMobile = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left">
          <Image src={"./logo.svg"} width={200} height={100} alt="logo" />
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              <Link className="text-red-500 font-bold" href={"/"}>
                SALE
              </Link>
              <RecursiveAccordion data={menuData} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MenuComonentMobile;
