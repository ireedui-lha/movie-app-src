import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import page from "../popular/page";

export function PaginationDemo({ Max }: { Max: number }) {
  const router = useRouter();
  const searchparams = useSearchParams();
  const genre = searchparams.get("genreIds");
  const page = searchparams.get("page") || 1;

  const paginate = (page: number) => {
    router.push(`/genre/12?genreIds=${genre}&page=${page}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>

        {Array.from(Array(Max)).map((_: number, index: number) => {
          return (
            <PaginationItem key={index} onClick={() => paginate(index + 1)}>
              <PaginationLink isActive={page == index + 1}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* <PaginationItem>
          <PaginationLink
            href={"genre?" + "genreIds" + genre + "&page=2"}
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
        </PaginationItem> */}
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
