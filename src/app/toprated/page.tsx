import { Mytype } from "@/components/util/Mytype";
import Link from "next/link";
import { useState } from "react";

export default async function page() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return (
    <div className="grid grid-cols-5 max-w-[1280px] gap-[32px] m-auto">
      {data.results?.map((movie: Mytype, index: number) => {
        return (
          <Link href={`/product-detail/${movie.id}`}>
            {" "}
            <div>
              <img
                src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
                alt=""
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
