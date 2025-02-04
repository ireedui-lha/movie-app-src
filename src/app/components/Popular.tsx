import { Star } from "lucide-react";
import Link from "next/link";

export default async function Popular() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const butarhai = (too: number) => {
    return Math.floor((too * 10) / 10)
      .toString()
      .replace(",", ",");
  };

  const data = await response.json();

  return (
    <div className="max-w-[1280px] m-auto">
      <div className="flex max-w-[1280px] m-auto justify-between h-[59px] mt-[20px]">
        <h1 className="text-3xl">Popular</h1>
        <Link href={"/popular"}>See more...</Link>
      </div>
      <div className="flex justify-between "></div>
      <div className="flex flex-wrap max-w-[1280px] gap-[32px] m-auto">
        {data?.results.slice(0, 10).map((movie: any, index: any) => {
          return (
            <Link href={`/product-detail/${movie.id}`}>
              {" "}
              <div
                key={index}
                className=" rounded-[20px] overflow-hidden h-[439px] w-[230px] bg-secondary"
              >
                <img
                  className=" w-[230px] h-[340px]"
                  src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
                  alt=""
                />
                <div className=" h-[79px] w-[230px] ">
                  <div className="flex">
                    <Star className="fill-current h-4 mt-1" />
                    <p>{butarhai(movie?.vote_average)}/10</p>
                  </div>
                  <p className="font-bold">{movie?.original_title}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
