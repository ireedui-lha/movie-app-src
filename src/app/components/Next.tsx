"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Mytype } from "@/components/util/Mytype";
import next from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function PaginationDemo({
  currentPage,
  total,
}: {
  currentPage: number;
  total: number;
}) {
  const router = useRouter();
  const nexthandler = (page: number) => {
    router.push(`/page?page${page}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => nexthandler(currentPage - 1)}
            href="#"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => nexthandler(currentPage - 1)} href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => nexthandler(currentPage - 1)}
            href="#"
            isActive
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => nexthandler(currentPage - 1)} href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
