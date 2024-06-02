"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { cn } from "../lib/utils";
import { useUser } from "@clerk/nextjs";
const DialogCustom = () => {
  const { isSignedIn } = useUser();

  return (
    <>
      {isSignedIn ? (
        <Button
          variant="outline"
          className={cn(
            "text-xl font-bold bg-zinc-50 border-none py-8 hover:bg-orange-300 hover:text-zinc-50"
          )}
        >
          <Link href={"/home"}>
            Mua sắm thôi nào
          </Link>
        </Button>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "text-xl font-bold bg-zinc-50 border-none py-8 hover:bg-orange-300 hover:text-zinc-50"
              )}
            >
              Bắt đầu mua sắm <ShoppingBag className="mx-1" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Hello khách yêu</DialogTitle>
              <DialogDescription>
                Không biết khách yêu đã có tài khoản chưa ạ?
              </DialogDescription>
            </DialogHeader>

            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                className={cn(
                  "bg-orange-400 text-zinc-50 text-base hover:bg-orange-500"
                )}
              >
                <Link href={"/home"}>Chỉ xem</Link>
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "bg-orange-400 text-zinc-50 text-base hover:bg-orange-500"
                )}
              >
                <Link href={"/sign-up"}>Đăng ký</Link>
              </Button>{" "}
              <Button
                variant="outline"
                className={cn(
                  "bg-orange-400 text-zinc-50 text-base hover:bg-orange-500"
                )}
              >
                <Link href={"/sign-in"}>Đăng nhập</Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default DialogCustom;
