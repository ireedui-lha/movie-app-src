"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import ToggleGroupDemo from "../components/Togglegroup";
import { Mytype } from "@/components/util/Mytype";
import { PaginationDemo } from "../components/Pagnition";
import Resultstoggle from "../components/Resultstoggle";

export default function Genre() {
  const [movie, setMovie] = React.useState<any>([]);
  const [genre, setGenre] = React.useState<{ value: string; name: string }[]>(
    []
  );
  const searchParams = useSearchParams();

  const genreId = searchParams.get("genreValue");
  const page = searchParams.get("page") || 1;
  React.useEffect(() => {
    const responce = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      setMovie(res.results || []);
      console.log(res);
    };
    responce();
  }, [genreId, page]);
  React.useEffect(() => {
    const data = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
      const responseData = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const res = await responseData.json();
      setGenre(res.genres || []);
      console.log(res);
    };
    data();
  }, []);
  return (
    <div>
      <div className="w-[1280px] flex m-auto gap-10">
        <h1>search Filter</h1>
        <p>Genres</p>

        <div className="flex w-[880px] flex-wrap gap-4 mt-[200px] ">
          {movie.map((movie: Mytype, index: number) => {
            return (
              <div key={index} className="w-[165px] h-[277px]">
                <img
                  className="w-[165px] h-[244px]"
                  src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
                  alt=""
                />
                <p>{movie.original_title}</p>
                <p> {movie?.total_results}</p>
              </div>
            );
          })}
        </div>
        <div className="  w-[400px]  border-r-2  flex flex-wrap  justify-start items-start mt-[200px] ">
          <Resultstoggle genres={genre} />
        </div>
      </div>{" "}
      <PaginationDemo />
    </div>
  );
}
