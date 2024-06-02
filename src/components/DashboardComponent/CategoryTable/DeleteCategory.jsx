import React, { useState } from "react";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { cn } from "../../../lib/utils";

const DeleteCategory = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Xóa</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Xóa danh mục sản phẩm</DialogTitle>
          <DialogDescription>Bạn có chắc chắn muốn xóa</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            className={cn(
              "bg-orange-500 text-zinc-50 hover:text-zinc-950 hover:bg-orange-200"
            )}
            onClick={() => setIsOpen(false)}
            type="button"
          >
            Hủy
          </Button>
          <Button
            className={cn(
              "bg-orange-500 text-zinc-50 hover:text-zinc-950 hover:bg-orange-200"
            )}
            onClick={() => {
              onClick();
              setIsOpen(false);
            }}
            type="button"
          >
            Xóa
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCategory;
