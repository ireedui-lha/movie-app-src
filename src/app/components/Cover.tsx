import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Mytype } from "@/components/util/Mytype";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function CarouselDemo() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  const butarhai = (too: number) => {
    return Math.floor((too * 10) / 10)
      .toString()
      .replace(",", ",");
  };
  return (
    <Carousel className="w-[100%] m-auto  ">
      <CarouselContent>
        {data.results?.slice(0, 10).map((movie: Mytype, index: number) => (
          <CarouselItem key={index} className="relative h-[600px]">
            <Link href="/">
              {" "}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center "
                style={{
                  backgroundImage: movie?.poster_path
                    ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                    : `url('/path-to-placeholder.jpg')`,
                }}
              >
                <div className="absolute flex flex-col items-start gap-4 left-[140px] bottom-[165px] w-[404px] h-[264px] inset-0  ">
                  <p>Now Playing</p>
                  <p>{movie.original_title}</p>
                  <div className="flex">
                    <Star className="fill-current h-4 mt-1" />
                    <p>{butarhai(movie.vote_average)}</p>
                    <p>/10</p>
                  </div>

                  <p>{movie.overview}</p>
                  {/* <h1>{movie.}</h1> */}
                </div>
              </div>
            </Link>

            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[50px]" />
      <CarouselNext className="absolute right-[50px]" />
    </Carousel>
  );
}
