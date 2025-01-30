"use client";

import PaginationDemo from "@/app/components/Next";
import Popular from "@/app/components/Popular";
import Toprated from "@/app/components/Toprated";
import Upcoming from "@/app/components/Upcoming";
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
import { useRouter, useSearchParams } from "next/navigation";
import { Result } from "postcss";
import React, { useEffect, useState } from "react";

export default function Page({
  params: { valueid },
}: {
  params: { valueid: string };
}) {
  const [movie, setMovie] = React.useState<any>([]);
  const [filteredMovies, setFilteredMovies] = useState({ results: [] });
  if (!filteredMovies) {
    return null;
  }

  // const token =
  //   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";

  // React.useEffect(() => {
  //   const respomce = async () => {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3/search/movie?query=${valueid}&language=en-US&page=${Page}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const res = await response.json();
  //     setMovie(res.results || []);
  //     console.log(res);
  //   };
  //   respomce();
  // }, []);
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const router = useRouter();
  const value = searchParams.get("value");
  const onvalueChange = (values: string[]) => {
    router.push(`?value=${value}`);
  };

  // const butarhai = (too: number) => {
  //   return Math.floor((too * 10) / 10)
  //     .toString()
  //     .replace(",", ",");
  // };

  return (
    <div>
      <div>
        {filteredMovies.results?.map((movie: Mytype, index: number) => {
          return (
            <Page
              key={movie.id}
              index={index}
              className="w-[165px] h-[331px]"
            />
          );
        })}
      </div>
      <PaginationDemo currentPage={Number(page)} />
    </div>
  );
}
