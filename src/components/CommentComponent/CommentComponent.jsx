"use client";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Send, Smile } from "lucide-react";
import { cn } from "../../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import EmojiPicker from "emoji-picker-react";
import "./comment.css";
import ContainerCustom from "../ContainerCustom";

const CommentComponent = ({ className, ...props }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleShowEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const emojiPickerRef = useRef(null);
  return (
    <div className={cn("w-full", className)}>
      <ContainerCustom>
        <div className="relative z-30">
          <div
            className={cn(
              " lg:!w-[800px] w-[500px] relative rounded-lg overflow-hidden shadow-xl bg-white"
            )}
          >
            <Input
              type="email"
              placeholder="Email"
              className={cn(
                "lg:w-[680px] w-[390px] focus-visible:outline-none border-none focus-visible:ring-none focus-visible:ring-transparent bg-transparent rounded-none px-5 py-7 text-xl"
              )}
            />
            <Smile
              className="absolute top-4 right-24 cursor-pointer"
              onClick={handleShowEmojiPicker}
            />

            <Button
              variant="outline"
              type="submit"
              className={cn(
                "absolute top-0 -right-3 rounded-none border-0  py-7 px-7 border-l-2 border-l-zinc-500 border-solid bg-transparent"
              )}
            >
              <Send className="mr-4 " />
            </Button>
          </div>
          {showEmojiPicker && (
            <div className="absolute top-14 left-0" ref={emojiPickerRef}>
              <EmojiPicker />
            </div>
          )}
        </div>

        <div className="my-10 ">
          <div className=" p-4">
            <div className="flex justify-start items-center gap-4 tracking-wide">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-xl font-bold uppercase">Nguyễn Như Hoài</p>
            </div>
            <div className="lg:w-[800px] my-6 py-4 px-3 rounded-2xl bg-zinc-200 customcomment relative">
              <p className="text-xl tracking-normal text-justify">
                Shop giao hàng siêu nhanh luôn, sản phẩm ok lắm nhe, sẽ tiếp tục
                ủng hộ shop nè ahihi!
              </p>
            </div>
          </div>
          <div className=" p-4">
            <div className="flex justify-start items-center gap-4 tracking-wide">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-xl font-bold uppercase">Nguyễn Như Hoài</p>
            </div>
            <div className="lg:w-[800px] my-6 py-4 px-3 rounded-2xl bg-zinc-200 customcomment relative">
              <p className="text-xl tracking-normal text-justify">
                Shop giao hàng siêu nhanh luôn, sản phẩm ok lắm nhe, sẽ tiếp tục
                ủng hộ shop nè ahihi!
              </p>
            </div>
          </div>
         
        </div>
      </ContainerCustom>
    </div>
  );
};

export default CommentComponent;
