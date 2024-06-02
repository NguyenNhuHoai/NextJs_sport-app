"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";
import { cn } from "../../lib/utils";
const PaginationComponent = ({
  setCurrentPage,
  totalPage,
  currentPage,
  perPage,
  className
}) => {
  const totalPages = Math.ceil(totalPage / perPage);

  return (
    <Pagination className={cn("mt-4", className)}>
      <PaginationContent>
        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i + 1} active={i + 1 === currentPage}>
            <PaginationLink onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
