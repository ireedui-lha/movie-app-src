import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import page from "../popular/page";

export function PaginationDemo() {
  const searchparams = useSearchParams();
  const genre = searchparams.get("genreIds");
  const page = searchparams.get("page");
  const thirdpage = searchparams.get("page");
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={"genre?" + "genreIds" + genre + "&page=1"}
            isActive={page == "1"}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={"genre?" + "genreIds" + genre + "&pag=2"}
            isActive={page == "2"}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={"genre?" + "genreIds" + genre + "&page=3"}
            isActive={thirdpage == "3"}
          >
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
