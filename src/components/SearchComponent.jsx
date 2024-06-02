import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";
import { cn } from "../lib/utils";
const SearchComponent = () => {
  return (
    <Dialog className={cn("bg-transparent")} >
      <DialogTrigger>
        <Search />
      </DialogTrigger>
      <DialogContent className={cn('bg-orange-200 w-full')}>
        <DialogHeader>
          <DialogTitle>Tìm kiếm tại đây</DialogTitle>
          <DialogDescription className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Nhập tìm kiếm tại đây" />
            <Button
              type="submit"
              className={cn("bg-orange-500 rounded-full p-3 hover:bg-orange-200")}
            >
              <Search />
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SearchComponent;
